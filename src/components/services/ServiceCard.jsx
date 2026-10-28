import {
  Activity, ArrowUpRight, Building2, HousePlug, Home, ShieldCheck, Sprout, Wrench,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const icons = {
  activity: Activity,
  building: Building2,
  'house-plug': HousePlug,
  home: Home,
  shield: ShieldCheck,
  sprout: Sprout,
  wrench: Wrench,
};

export default function ServiceCard({ service, index = 0 }) {
  const Icon = icons[service.icon] ?? Activity;
  return (
    <Link to={`/services/${service.id}`} className="service-card service-card--link">
      <span className="service-card__number">{String(index + 1).padStart(2, '0')}</span>
      <span className="service-card__icon"><Icon size={23} strokeWidth={1.7} aria-hidden="true" /></span>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <span className="service-card__link">Explore service <ArrowUpRight size={16} aria-hidden="true" /></span>
    </Link>
  );
}
