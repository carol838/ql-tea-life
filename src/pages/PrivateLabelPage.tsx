import './PageTemplates.css';

type PrivateLabelContent = {
  title: string;
  intro: string;
  features: [string, string][];
};

export const privateLabelPages: Record<string, PrivateLabelContent> = {
  '/private-label': {
    title: 'Private Label Tea',
    intro: 'Flexible Chinese tea sourcing, packing and brand support for international buyers.',
    features: [
      ['Tea Selection', 'Select suitable tea categories, grades and formats for your target market.'],
      ['Packaging Development', 'Coordinate retail-ready packaging formats for your brand and sales channels.'],
      ['OEM Coordination', 'Support sampling, production planning and export preparation from one project flow.'],
    ],
  },
  '/tea-bags': {
    title: 'Private Label Tea Bags',
    intro: 'Tea bag formats prepared for retail, hospitality and foodservice tea programs.',
    features: [
      ['Multiple Bag Formats', 'Choose conventional, pyramid and individually wrapped tea bag formats.'],
      ['Custom Tea Blends', 'Develop tea and botanical combinations aligned with your product positioning.'],
      ['Retail Cartons', 'Prepare branded cartons and outer packaging for retail and foodservice programs.'],
    ],
  },
  '/custom-packaging': {
    title: 'Custom Tea Packaging',
    intro: 'Packaging support for brands requiring distinctive and export-ready tea presentation.',
    features: [
      ['Pouches and Tins', 'Select practical packaging formats for loose leaf tea, tea bags and gift ranges.'],
      ['Label Coordination', 'Coordinate brand artwork, product information and print-ready packaging details.'],
      ['Outer Cartons', 'Plan transport packaging suitable for international distribution requirements.'],
    ],
  },
  '/oem-service': {
    title: 'Tea OEM Service',
    intro: 'OEM tea project support from category selection through packing and export preparation.',
    features: [
      ['Project Planning', 'Define tea selection, packaging, quantities and target timelines before production.'],
      ['Sample Coordination', 'Review tea and packaging samples before confirming the final specification.'],
      ['Production Support', 'Coordinate packing, quality checks and export preparation for confirmed projects.'],
    ],
  },
};

export default function PrivateLabelPage({ page }: { page: PrivateLabelContent }) {
  return (
    <main className="content-page">
      <section className="page-hero">
        <p className="page-eyebrow">Private Label Solutions</p>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
      </section>
      <section className="page-section">
        <p className="page-eyebrow">Capabilities</p>
        <h2>Built for Tea Brands and Importers</h2>
        <div className="benefit-grid">
          {page.features.map(([feature, description]) => (
            <article key={feature}><h3>{feature}</h3><p>{description}</p></article>
          ))}
        </div>
      </section>
      <section className="inquiry-cta">
        <div><p className="page-eyebrow">Start a Project</p><h2>Discuss Your Private Label Requirements</h2></div>
        <a className="page-button" href="/contact">Contact Us</a>
      </section>
    </main>
  );
}
