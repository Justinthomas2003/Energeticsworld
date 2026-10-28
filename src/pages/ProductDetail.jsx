import { useParams } from 'react-router-dom';
import NotFound from './NotFound.jsx';
import OfferingDetail from './OfferingDetail.jsx';
import { products } from '../data/products.js';

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((item) => item.id === productId);

  if (!product) return <NotFound />;
  return <OfferingDetail type="product" item={product} />;
}
