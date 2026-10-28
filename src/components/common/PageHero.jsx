import Breadcrumbs from './Breadcrumbs.jsx';

export default function PageHero({ eyebrow, title, description, image, alt, breadcrumbs }) {
  return (
    <section className={`page-hero${image ? ' page-hero--image' : ''}`} style={image ? { '--hero-image': `url("${image}")` } : undefined}>
      <div className="container page-hero__content">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-hero__description">{description}</p>
      </div>
      {image && <span className="visually-hidden">{alt}</span>}
    </section>
  );
}
