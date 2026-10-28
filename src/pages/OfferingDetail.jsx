import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button.jsx';
import PageHero from '../components/common/PageHero.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';

export default function OfferingDetail({ type, item }) {
  const isProduct = type === 'product';
  const collectionLabel = isProduct ? 'Products' : 'Services';
  const collectionPath = isProduct ? '/products' : '/services';
  const contactPath = isProduct ? `/contact?product=${encodeURIComponent(item.id)}` : '/contact';

  useDocumentMeta(item.title ?? item.name, item.description);

  return (
    <>
      <PageHero
        eyebrow={isProduct ? item.category : 'SERVICE'}
        title={item.title ?? item.name}
        description={item.description}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: collectionLabel, to: collectionPath },
          { label: item.title ?? item.name },
        ]}
      />
      <section className="section">
        <div className="container offering-detail">
          <img src={item.image} alt={item.alt} width="1200" height="900" />
          <div className="offering-detail__copy">
            <p className="eyebrow">{isProduct ? 'PRODUCT OVERVIEW' : 'SERVICE OVERVIEW'}</p>
            <h2>About {item.title ?? item.name}</h2>
            <p>{item.details}</p>
            <Link className="text-link" to={collectionPath}>Back to {collectionLabel.toLowerCase()} <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
      <div className="container">
        <section className="cta-band">
          <div>
            <p className="eyebrow">LET’S START A CONVERSATION</p>
            <h2>{isProduct ? 'Discuss this solar solution.' : 'Discuss your service needs.'}</h2>
            <p>Share a little about your site and requirements to explore a suitable next step with the team.</p>
          </div>
          <Button to={contactPath} variant="light">Enquire now <ArrowUpRight size={17} aria-hidden="true" /></Button>
        </section>
      </div>
    </>
  );
}
