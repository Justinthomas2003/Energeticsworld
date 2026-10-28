import { ArrowDown, ArrowUpRight, Check, SunMedium } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button.jsx';
import CallToAction from '../components/common/CallToAction.jsx';
import FAQAccordion from '../components/common/FAQAccordion.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import ServiceCard from '../components/services/ServiceCard.jsx';
import ProductCard from '../components/products/ProductCard.jsx';
import { faqs } from '../data/content.js';
import { products } from '../data/products.js';
import { services } from '../data/services.js';
import useDocumentMeta from '../hooks/useDocumentMeta.js';

const processSteps = [
  { number: '01', title: 'Understand your energy', body: 'Start with an energy audit and a conversation about efficiency and your site.' },
  { number: '02', title: 'Design your system', body: 'A solar system is designed around the site and its energy needs.' },
  { number: '03', title: 'Install with care', body: 'Move from an agreed system design to an installed solar solution.' },
  { number: '04', title: 'Keep it supported', body: 'Ask about ongoing solar power and solar thermal plant maintenance.' },
];

export default function Home() {
  useDocumentMeta('Solar energy solutions', 'Discover solar PV systems, water pumps, energy efficiency studies and maintenance from Energetics Eco Technologies LLP.');
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__image" role="img" aria-label="Solar panels catching the morning sun across a green landscape" />
        <div className="container home-hero__content">
          <p className="eyebrow"><span className="eyebrow-dot" /> ENERGETICS ECO TECHNOLOGIES LLP</p>
          <h1>Make room for<br />a <span>brighter</span> energy future.</h1>
          <p className="home-hero__lead">Thoughtful solar solutions for homes, businesses and agricultural needs across South India.</p>
          <div className="hero-actions">
            <Button to="/contact">Plan your solar project <ArrowUpRight size={17} aria-hidden="true" /></Button>
            <Button to="/about" variant="outline-light">Get to know us</Button>
          </div>
          <a className="hero-scroll" href="#purpose"><ArrowDown size={15} aria-hidden="true" /> Discover Energetics</a>
        </div>
        <div className="home-hero__caption"><SunMedium size={17} aria-hidden="true" /> Solar, designed around you</div>
      </section>

      <section className="section purpose-section" id="purpose">
        <div className="container purpose-grid">
          <div>
            <p className="eyebrow">OUR PURPOSE</p>
            <h2>Energy that works<br />for <span>everyday life.</span></h2>
          </div>
          <div className="purpose-copy">
            <p>Energetics World is an energy solutions company based in Karnataka, focused on urban, semi-urban and rural markets. The team designs, installs and maintains photovoltaic systems for domestic, agricultural and commercial needs.</p>
            <Link className="text-link" to="/about">More about Energetics <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
        </div>
        <div className="container values-strip">
          <article><span>01</span><h3>Our mission</h3><p>“Pursuit for a green future.”</p></article>
          <article><span>02</span><h3>Our vision</h3><p>Creating value through energy conservation, renewable energy and safety.</p></article>
          <article><span>03</span><h3>Our approach</h3><p>Energy discussions, thoughtful system design and care for system health.</p></article>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow="WHAT WE DO" title="Energy solutions for the way you live and work." description="From a home rooftop to an agricultural field, explore the services offered by Energetics World." />
          <div className="service-grid service-grid--home">
            {services.slice(0, 6).map((service, index) => <ServiceCard key={service.title} service={service} index={index} />)}
          </div>
          <div className="section-link"><Button to="/services" variant="outline">Explore our services <ArrowUpRight size={17} aria-hidden="true" /></Button></div>
        </div>
      </section>

      <section className="section product-section">
        <div className="container">
          <div className="split-heading">
            <SectionHeading eyebrow="SOLAR, MADE PRACTICAL" title="Explore our solar solutions." align="left" />
            <p>On-grid, off-grid and hybrid solar PV, solar water pumps, and solar thermal solutions.</p>
          </div>
          <div className="product-grid product-grid--featured">
            {[products[0], products[1], products[3]].map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
          <div className="section-link"><Button to="/products" variant="outline">View all solutions <ArrowUpRight size={17} aria-hidden="true" /></Button></div>
        </div>
      </section>

      <section className="process-section">
        <div className="container process-layout">
          <div className="process-intro">
            <p className="eyebrow">FROM FIRST CONVERSATION TO CLEANER ENERGY</p>
            <h2>A clear path<br />to going <span>solar.</span></h2>
            <p>The company’s published approach starts with energy efficiency and assessment, then moves to design, installation and system support.</p>
            <Button to="/contact" variant="outline-light">Talk through your needs <ArrowUpRight size={17} aria-hidden="true" /></Button>
          </div>
          <div className="process-steps">
            {processSteps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <div><h3>{step.title}</h3><p>{step.body}</p></div>
                <Check size={17} aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-layout">
          <SectionHeading eyebrow="GOOD TO KNOW" title="A few things you might be wondering." align="left" />
          <FAQAccordion items={faqs} />
        </div>
      </section>
      <div className="container"><CallToAction title="Ready to talk about solar?" description="Share what you have in mind. The Energetics team can help you explore the next step." /></div>
    </>
  );
}
