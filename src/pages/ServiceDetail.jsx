import { useParams } from 'react-router-dom';
import NotFound from './NotFound.jsx';
import OfferingDetail from './OfferingDetail.jsx';
import { services } from '../data/services.js';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = services.find((item) => item.id === serviceId);

  if (!service) return <NotFound />;
  return <OfferingDetail type="service" item={service} />;
}
