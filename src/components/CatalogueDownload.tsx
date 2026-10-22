import {
  createContext,
  FormEvent,
  KeyboardEvent,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { trackCatalogueDownload } from '../utils/analytics';
import './CatalogueDownload.css';

const CATALOGUE_NAME = 'QL Tea Life – Wholesale Tea Product Catalogue';
const CATALOGUE_FILENAME = 'QL_Tea_Life_Wholesale_Tea_Catalogue_Web.pdf';
const BUSINESS_TYPES = [
  'Tea Importer / Distributor',
  'Tea Shop / Retailer',
  'Private Label / New Brand',
  'Wholesaler',
  'Other',
] as const;
const CATALOGUE_SOURCE_PAGES = new Set(['/', '/private-label', '/contact']);

type SubmissionState = 'idle' | 'sending' | 'success' | 'error';
type FieldErrors = Partial<Record<'email' | 'country' | 'company' | 'businessType' | 'whatsapp' | 'form', string>>;

type CatalogueDownloadContextValue = {
  openCatalogueDownload: () => void;
};

const CatalogueDownloadContext = createContext<CatalogueDownloadContextValue | null>(null);

function currentSourcePage() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  return CATALOGUE_SOURCE_PAGES.has(path) ? path : '/';
}

export function CatalogueDownloadProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [sourcePage, setSourcePage] = useState('/');
  const openerRef = useRef<HTMLElement | null>(null);

  const openCatalogueDownload = useCallback(() => {
    openerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setSourcePage(currentSourcePage());
    setIsOpen(true);
  }, []);

  const closeCatalogueDownload = useCallback(() => {
    setIsOpen(false);
    window.requestAnimationFrame(() => openerRef.current?.focus());
  }, []);

  return (
    <CatalogueDownloadContext.Provider value={{ openCatalogueDownload }}>
      {children}
      {isOpen ? (
        <CatalogueRequestDialog sourcePage={sourcePage} onClose={closeCatalogueDownload} />
      ) : null}
    </CatalogueDownloadContext.Provider>
  );
}

export function useCatalogueDownload() {
  const context = useContext(CatalogueDownloadContext);

  if (!context) {
    throw new Error('useCatalogueDownload must be used within CatalogueDownloadProvider.');
  }

  return context;
}

function CatalogueRequestDialog({ sourcePage, onClose }: { sourcePage: string; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const submissionInProgress = useRef(false);
  const submissionId = useRef(crypto.randomUUID());
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusFrame = window.requestAnimationFrame(() => {
      dialogRef.current?.querySelector<HTMLElement>('input, select, button')?.focus();
    });

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const closeIfAvailable = () => {
    if (submissionState !== 'sending') {
      onClose();
    }
  };

  const handleDialogKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      closeIfAvailable();
      return;
    }

    if (event.key !== 'Tab' || !dialogRef.current) {
      return;
    }

    const focusable = Array.from(
      dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), input:not([disabled]), select:not([disabled]), a[href]',
      ),
    );

    if (focusable.length === 0) {
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const submitCatalogueRequest = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submissionInProgress.current || submissionState === 'success') {
      return;
    }

    submissionInProgress.current = true;
    setSubmissionState('sending');
    setSubmissionMessage('Preparing your catalogue…');
    setFieldErrors({});

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/catalogue-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.get('email'),
          country: formData.get('country'),
          company: formData.get('company'),
          businessType: formData.get('businessType'),
          whatsapp: formData.get('whatsapp'),
          website: formData.get('website'),
          sourcePage,
          submissionId: submissionId.current,
        }),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null) as {
          message?: string;
          fieldErrors?: FieldErrors;
        } | null;
        setFieldErrors(result?.fieldErrors ?? {});
        throw new Error(result?.message ?? 'We could not prepare the catalogue. Please try again.');
      }

      if (!response.headers.get('content-type')?.toLowerCase().includes('application/pdf')) {
        throw new Error('The catalogue could not be downloaded. Please try again.');
      }

      const catalogue = await response.blob();
      const objectUrl = URL.createObjectURL(catalogue);
      const downloadLink = document.createElement('a');
      downloadLink.href = objectUrl;
      downloadLink.download = CATALOGUE_FILENAME;
      downloadLink.style.display = 'none';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      downloadLink.remove();
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 60_000);

      trackCatalogueDownload({
        source_page: sourcePage,
        catalogue_name: CATALOGUE_NAME,
      });
      setSubmissionState('success');
      setSubmissionMessage('Your catalogue download has started. Thank you for your interest in QL Tea Life.');
    } catch (error) {
      setSubmissionState('error');
      setSubmissionMessage(
        error instanceof Error
          ? error.message
          : 'We could not prepare the catalogue. Please try again.',
      );
    } finally {
      submissionInProgress.current = false;
    }
  };

  return (
    <div
      className="catalogue-dialog__backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closeIfAvailable();
        }
      }}
    >
      <div
        className="catalogue-dialog"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="catalogue-dialog-title"
        aria-describedby="catalogue-dialog-description"
        onKeyDown={handleDialogKeyDown}
      >
        <button
          className="catalogue-dialog__close"
          type="button"
          onClick={closeIfAvailable}
          disabled={submissionState === 'sending'}
          aria-label="Close catalogue request form"
        >
          <span aria-hidden="true">×</span>
        </button>

        <div className="catalogue-dialog__heading">
          <p className="catalogue-dialog__eyebrow">Wholesale Buyer Resource</p>
          <h2 id="catalogue-dialog-title">Download Our Tea Catalogue</h2>
          <p id="catalogue-dialog-description">
            Tell us a little about your business to receive our wholesale tea and packaging catalogue.
          </p>
        </div>

        <form className="catalogue-form" onSubmit={submitCatalogueRequest}>
          <div className="catalogue-form__grid">
            <div className="catalogue-form__field">
              <label htmlFor="catalogue-email">Business Email</label>
              <input
                id="catalogue-email"
                name="email"
                type="email"
                autoComplete="email"
                maxLength={254}
                required
                aria-invalid={Boolean(fieldErrors.email)}
                aria-describedby={fieldErrors.email ? 'catalogue-email-error' : undefined}
              />
              {fieldErrors.email ? <span id="catalogue-email-error" className="catalogue-form__error">{fieldErrors.email}</span> : null}
            </div>

            <div className="catalogue-form__field">
              <label htmlFor="catalogue-country">Country / Region</label>
              <input
                id="catalogue-country"
                name="country"
                type="text"
                autoComplete="country-name"
                maxLength={120}
                required
                aria-invalid={Boolean(fieldErrors.country)}
                aria-describedby={fieldErrors.country ? 'catalogue-country-error' : undefined}
              />
              {fieldErrors.country ? <span id="catalogue-country-error" className="catalogue-form__error">{fieldErrors.country}</span> : null}
            </div>

            <div className="catalogue-form__field">
              <label htmlFor="catalogue-company">Company / Brand Name</label>
              <input
                id="catalogue-company"
                name="company"
                type="text"
                autoComplete="organization"
                maxLength={160}
                required
                aria-invalid={Boolean(fieldErrors.company)}
                aria-describedby={fieldErrors.company ? 'catalogue-company-error' : undefined}
              />
              {fieldErrors.company ? <span id="catalogue-company-error" className="catalogue-form__error">{fieldErrors.company}</span> : null}
            </div>

            <div className="catalogue-form__field">
              <label htmlFor="catalogue-business-type">Business Type</label>
              <select
                id="catalogue-business-type"
                name="businessType"
                required
                defaultValue=""
                aria-invalid={Boolean(fieldErrors.businessType)}
                aria-describedby={fieldErrors.businessType ? 'catalogue-business-type-error' : undefined}
              >
                <option value="" disabled>Select your business type</option>
                {BUSINESS_TYPES.map((businessType) => (
                  <option value={businessType} key={businessType}>{businessType}</option>
                ))}
              </select>
              {fieldErrors.businessType ? <span id="catalogue-business-type-error" className="catalogue-form__error">{fieldErrors.businessType}</span> : null}
            </div>

            <div className="catalogue-form__field catalogue-form__field--full">
              <label htmlFor="catalogue-whatsapp">WhatsApp <span>(optional)</span></label>
              <input
                id="catalogue-whatsapp"
                name="whatsapp"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                maxLength={60}
                aria-invalid={Boolean(fieldErrors.whatsapp)}
                aria-describedby={fieldErrors.whatsapp ? 'catalogue-whatsapp-error' : undefined}
              />
              {fieldErrors.whatsapp ? <span id="catalogue-whatsapp-error" className="catalogue-form__error">{fieldErrors.whatsapp}</span> : null}
            </div>
          </div>

          <div className="catalogue-form__honeypot" aria-hidden="true">
            <label htmlFor="catalogue-website">Website</label>
            <input id="catalogue-website" name="website" type="text" autoComplete="off" maxLength={200} tabIndex={-1} />
          </div>

          <p className="catalogue-form__privacy">
            Your information will be used to provide our catalogue and respond to your business inquiries.{' '}
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          </p>

          <button
            className="catalogue-form__submit"
            type="submit"
            disabled={submissionState === 'sending' || submissionState === 'success'}
            aria-busy={submissionState === 'sending'}
          >
            {submissionState === 'sending' ? 'Preparing Download…' : 'Submit & Download Catalogue'}
          </button>

          {submissionMessage ? (
            <p
              className={`catalogue-form__status catalogue-form__status--${submissionState}`}
              role={submissionState === 'error' ? 'alert' : 'status'}
              aria-live="polite"
            >
              {submissionMessage}
            </p>
          ) : null}
        </form>
      </div>
    </div>
  );
}
