import { useState } from 'react';
import './SiteHeader.css';

const teaLinks = [
  ['Jasmine Tea', '/jasmine-tea'],
  ['Green Tea', '/green-tea'],
  ['Black Tea', '/black-tea'],
  ['Oolong Tea', '/oolong-tea'],
  ['Herbal Tea', '/herbal-tea'],
  ['Flavoured Tea', '/flavoured-tea'],
];

const privateLabelLinks = [
  ['Private Label Solutions', '/private-label'],
  ['Packaging Options', '/custom-packaging'],
  ['How It Works', '/oem-service'],
];

function Dropdown({
  label,
  links,
}: {
  label: string;
  links: string[][];
}) {
  return (
    <details className="nav-dropdown">
      <summary>
        <span>{label}</span>
        <span aria-hidden="true">+</span>
      </summary>
      <div className="nav-dropdown__menu">
        {links.map(([name, path]) => (
          <a href={path} key={path}>
            {name}
          </a>
        ))}
      </div>
    </details>
  );
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="/">
          QL Tea Life
        </a>
        <button
          className="site-header__toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`site-nav${menuOpen ? ' site-nav--open' : ''}`} aria-label="Main navigation">
          <a href="/">Home</a>
          <Dropdown label="Tea Collection" links={teaLinks} />
          <Dropdown label="Private Label" links={privateLabelLinks} />
          <a href="/tea-knowledge">Tea Knowledge</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
