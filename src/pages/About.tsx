import './About.css';

export default function About() {
  return (
    <main className="about-page">
      <section className="about-section">
        <div className="about-section__content">
          <h1>About</h1>
          <p>
            QL Tea Life supports international buyers with Chinese tea sourcing,
            wholesale supply, private label packaging and OEM project coordination.
          </p>
        </div>
        <div className="about-section__image" aria-hidden="true" />
      </section>
    </main>
  );
}
