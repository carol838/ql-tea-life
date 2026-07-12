type LeadMethod = 'whatsapp' | 'email' | 'contact_form' | 'future';

type LeadTrackingParams = {
  method: LeadMethod;
  location?: string;
};

type WhatsAppClickParams = {
  contact_method?: 'whatsapp';
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

function sendGtagEvent(eventName: string, params: Record<string, unknown>) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
    return;
  }

  window.dataLayer?.push(['event', eventName, params]);
}

export function generateLead({ method, location }: LeadTrackingParams) {
  sendGtagEvent('generate_lead', {
    method,
    ...(location ? { location } : {}),
    ...debugParams,
  });
}

export function trackWhatsAppLead(params: WhatsAppClickParams = {}) {
  sendGtagEvent('whatsapp_click', {
    ...params,
    ...debugParams,
  });
  generateLead({
    method: 'whatsapp',
    location: params.location,
  });
}
