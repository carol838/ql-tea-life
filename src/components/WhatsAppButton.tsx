import { useEffect, useState } from 'react';
import { trackWhatsAppLead } from '../utils/analytics';
import './WhatsAppButton.css';

const WHATSAPP_URL = 'https://wa.me/8618767158838';
const TOOLTIP_STORAGE_KEY = 'ql-tea-whatsapp-tooltip-seen';

export default function WhatsAppButton() {
  const [showFirstVisitTooltip, setShowFirstVisitTooltip] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem(TOOLTIP_STORAGE_KEY)) {
      return;
    }

    window.localStorage.setItem(TOOLTIP_STORAGE_KEY, 'true');
    setShowFirstVisitTooltip(true);

    const timeout = window.setTimeout(() => {
      setShowFirstVisitTooltip(false);
    }, 6000);

    return () => window.clearTimeout(timeout);
  }, []);

  const trackWhatsAppClick = () => {
    setShowFirstVisitTooltip(false);
    trackWhatsAppLead({
      contact_method: 'whatsapp',
    });
  };

  return (
    <a
      className={`whatsapp-button${showFirstVisitTooltip ? ' whatsapp-button--first-visit' : ''}`}
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with QL Tea Life on WhatsApp"
      onClick={trackWhatsAppClick}
    >
      <span className="whatsapp-button__tooltip" role="tooltip">
        Chat with us on WhatsApp
      </span>
      <svg
        className="whatsapp-button__icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.3-4.3a8.5 8.5 0 1 1 15.7-4.4Z" />
        <path d="M8.4 7.7c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.8 1.9c.1.3.1.5-.1.7l-.7.8c-.2.2-.1.4 0 .6.6 1.1 1.5 2 2.6 2.6.2.1.4.1.6-.1l.9-1c.2-.2.4-.3.7-.2l1.8.9c.3.1.4.3.4.5 0 .3-.1 1.3-.7 1.8-.5.5-1.3.8-2.1.7-1.1-.2-2.7-.7-4.5-2.3-1.5-1.4-2.5-3.1-2.8-4.2-.2-.8 0-1.8.4-2.6Z" />
      </svg>
    </a>
  );
}
