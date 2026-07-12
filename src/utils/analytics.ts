type LeadMethod = 'whatsapp' | 'email' | 'contact_form' | 'future';

type LeadTrackingParams = {
  method: LeadMethod;
  location?: string;
};

type WhatsAppClickParams = {
  contact_method?: 'whatsapp';
  location?: string;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function generateLead({ method, location }: LeadTrackingParams) {
  window.gtag?.('event', 'generate_lead', {
    method,
    ...(location ? { location } : {}),
  });
}

export function trackWhatsAppLead(params: WhatsAppClickParams = {}) {
  window.gtag?.('event', 'whatsapp_click', params);
  generateLead({
    method: 'whatsapp',
    location: params.location,
  });
}
