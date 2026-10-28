import { ArrowUpRight, Check } from 'lucide-react';
import Button from '../components/common/Button.jsx';
import CallToAction from '../components/common/CallToAction.jsx';
import PageHero from '../components/common/PageHero.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';

export default function About() {
  useDocumentMeta('About us', 'Learn about Energetics World, a Karnataka-based energy solutions company serving domestic, agricultural and commercial needs.');
  return (
    <>
      <PageHero
        eyebrow="A LITTLE ABOUT US"
        title={<>A local perspective.<br />A greener direction.</>}
        description="Energy solutions shaped around the homes, businesses and communities we serve."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About us' }]}
        image="/images/products/on-grid-solar.png"
        alt="Solar panels in a green landscape"
      />
      <section className="section">
        <div className="container about-intro">
          <div>
            <p className="eyebrow">ENERGETICS ECO TECHNOLOGIES LLP</p>
            <h2>Focused on clean energy for <span>everyday needs.</span></h2>
          </div>
          <div className="about-intro__copy">
            <p>Energetics World is the next-generation energy solutions company based in Karnataka, India, focused on urban, semi-urban and rural markets. Its work is aligned with India’s solar ambitions, with a focus on small-scale rooftop installations in South India.</p>
            <p>The company designs, installs and maintains solar photovoltaic systems for domestic, agricultural and commercial needs.</p>
            <Button to="/contact" variant="text">Start a conversation <ArrowUpRight size={17} aria-hidden="true" /></Button>
          </div>
        </div>
      </section>
      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow="WHAT GUIDES US" title="A pursuit for a green future." description="The company’s stated mission and vision put energy conservation, renewable energy and safety at the centre." />
          <div className="mission-grid">
            <article><span className="eyebrow">OUR MISSION</span><h3>“Pursuit for a green future.”</h3><p>A concise statement of purpose from Energetics World.</p></article>
            <article><span className="eyebrow">OUR VISION</span><h3>Creating value for a greener future.</h3><p>To build an organization that provides solutions and creates value in energy conservation, renewable energy and safety.</p></article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container expertise-grid">
          <div className="expertise-image">
            <img src="/images/products/on-grid-solar.png" alt="Solar panels on a rooftop under an open sky" loading="lazy" width="1200" height="900" />
            <span>Solar photovoltaic systems for domestic, agricultural and commercial needs.</span>
          </div>
          <div className="expertise-copy">
            <p className="eyebrow">OUR CAPABILITIES</p>
            <h2>Practical expertise, from <span>assessment to support.</span></h2>
            <ul>
              <li><Check size={17} aria-hidden="true" /> Solar PV system design, installation and maintenance</li>
              <li><Check size={17} aria-hidden="true" /> Residential, commercial and agricultural solar needs</li>
              <li><Check size={17} aria-hidden="true" /> Energy efficiency discussions and studies</li>
              <li><Check size={17} aria-hidden="true" /> Electrical safety, grounding and surge protection considerations</li>
            </ul>
            <Button to="/services" variant="outline">Explore our services <ArrowUpRight size={17} aria-hidden="true" /></Button>
          </div>
        </div>
      </section>
      <div className="container"><CallToAction title="Let’s explore a greener future together." description="Get in touch to discuss your energy needs and find out what solutions may suit your site." /></div>
    </>
  );
}
