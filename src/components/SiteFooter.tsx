import './SiteFooter.css';

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/carol-zhang-68467a237/',
    icon: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
        <path d="M8 10v6M8 7.8v.1M11.5 16v-6M11.5 12.7c.7-1.8 4.5-2.1 4.5 1V16" />
      </>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/ql_tealife/',
    icon: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17.4" cy="6.8" r=".7" />
      </>
    ),
  },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand-group">
          <a className="site-footer__brand" href="/">
            QL Tea Life
          </a>
          <div className="site-footer__links" aria-label="Footer navigation">
            <a href="/about">About</a>
            <a href="/jasmine-tea">Tea Collection</a>
            <a href="/contact">Contact</a>
          </div>
        </div>

        <div className="site-footer__social">
          <p>Follow Us</p>
          <div className="site-footer__social-links">
            {socialLinks.map((social) => (
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow QL Tea Life on ${social.name}`}
                key={social.name}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  {social.icon}
                </svg>
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
