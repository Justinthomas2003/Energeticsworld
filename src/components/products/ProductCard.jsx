import { ArrowUpRight, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button.jsx';

export default function ProductCard({ product }) {
  const detailsPath = `/products/${product.id}`;
  return (
    <article className="product-card">
      <Link className="product-card__image-link" to={detailsPath} aria-label={`View ${product.name} details`}>
        <div className="product-card__image-wrap">
          <img src={product.image} alt={product.alt} loading="lazy" width="1000" height="720" />
          <span className="product-card__category">{product.category}</span>
        </div>
      </Link>
      <div className="product-card__body">
        <span className="product-card__icon"><Leaf size={17} aria-hidden="true" /></span>
        <h3><Link to={detailsPath}>{product.name}</Link></h3>
        <p>{product.description}</p>
        <Button to={detailsPath} variant="text">
          View product details <ArrowUpRight size={16} aria-hidden="true" />
        </Button>
      </div>
    </article>
  );
}
