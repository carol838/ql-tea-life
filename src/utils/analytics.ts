type LeadMethod = 'contact_form' | 'future';

type LeadTrackingParams = {
  method: LeadMethod;
  page_path?: string;
  form_name?: string;
};

type WhatsAppClickParams = {
  contact_method?: 'whatsapp';
  cta_location?: string;
  location?: string;
};

type EmailClickParams = {
  cta_location?: string;
  location?: string;
};

const isDevelopment = (import.meta as ImportMeta & { env?: { DEV?: boolean } }).env?.DEV === true;
const debugParams = isDevelopment ? { debug_mode: true } : {};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function analyticsEnabled() {
  if (typeof window === 'undefined') {
    return false;
  }

  return !['localhost', '127.0.0.1'].includes(window.location.hostname);
}

function sendGtagEvent(eventName: string, params: Record<string, unknown>) {
  if (!analyticsEnabled()) {
    return;
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
    return;
  }

  window.dataLayer?.push(['event', eventName, params]);
}

export function generateLead({ method, page_path, form_name }: LeadTrackingParams) {
  sendGtagEvent('generate_lead', {
    method,
    lead_source: method,
    ...(page_path ? { page_path } : {}),
    ...(form_name ? { form_name } : {}),
    ...debugParams,
  });
}

export function trackWhatsAppLead(params: WhatsAppClickParams = {}) {
  sendGtagEvent('whatsapp_click', {
    contact_method: 'whatsapp',
    ...(params.cta_location ? { cta_location: params.cta_location } : {}),
    ...(params.location ? { cta_location: params.location, location: params.location } : {}),
    ...debugParams,
  });
}

export function trackEmailClick(params: EmailClickParams = {}) {
  sendGtagEvent('email_click', {
    contact_method: 'email',
    ...(params.cta_location ? { cta_location: params.cta_location } : {}),
    ...(params.location ? { cta_location: params.location, location: params.location } : {}),
    ...debugParams,
  });
}
