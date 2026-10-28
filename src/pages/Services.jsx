import { ArrowUpRight } from 'lucide-react';
import Button from '../components/common/Button.jsx';
import CallToAction from '../components/common/CallToAction.jsx';
import PageHero from '../components/common/PageHero.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import ServiceCard from '../components/services/ServiceCard.jsx';
import { services } from '../data/services.js';
import useDocumentMeta from '../hooks/useDocumentMeta.js';

const serviceNotes = [
  {
    title: 'Solar for homes and businesses',
    copy: 'Photovoltaic systems for domestic and commercial needs, designed around an energy discussion and site assessment.',
    image: '/images/products/on-grid-solar.png',
    alt: 'Solar panels arranged across a rooftop',
  },
  {
    title: 'Solar for agricultural fields',
    copy: 'Solar systems and water-pumping solutions for agricultural applications, including sites with limited grid access.',
    image: '/images/products/solar-water-pumps.png',
    alt: 'Solar-powered water pump irrigating a field',
  },
];

export default function Services() {
  useDocumentMeta('Solar and energy services', 'Discover residential, commercial and agricultural solar services, energy efficiency studies, electrical safety audits and plant maintenance.');
  return (
    <>
      <PageHero
        eyebrow="SERVICES"
        title={<>Good energy starts<br />with the right plan.</>}
        description="From solar PV to energy efficiency and plant support, explore the services offered by Energetics World."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
      />
      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow="HOW WE CAN HELP" title="Solutions for different needs." description="The company serves domestic, commercial and agricultural energy needs with related studies and support." />
          <div className="service-grid">
            {services.map((service, index) => <ServiceCard key={service.title} service={service} index={index} />)}
          </div>
          <figure className="service-areas-image">
            <img
              src="/images/services/key-service-areas.jpg"
              alt="Energetics key service areas: solar power and thermal, solar irrigation pumps, maintenance and repairs, and solar accessories."
              loading="lazy"
              width="1169"
              height="487"
            />
          </figure>
        </div>
      </section>
      <section className="section">
        <div className="container">
          {serviceNotes.map((item, index) => (
            <article className={`service-feature${index % 2 ? ' service-feature--reverse' : ''}`} key={item.title}>
              <img src={item.image} alt={item.alt} loading="lazy" width="1200" height="800" />
              <div>
                <p className="eyebrow">SOLAR, FOR EVERYDAY NEEDS</p>
                <h2>{item.title}</h2>
                <p>{item.copy}</p>
                <Button to="/contact" variant="text">Discuss this service <ArrowUpRight size={17} aria-hidden="true" /></Button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <div className="container"><CallToAction title="Tell us what you’re working on." description="Share a little about your site and energy needs. Our team can help you explore a suitable next step." /></div>
    </>
  );
}
