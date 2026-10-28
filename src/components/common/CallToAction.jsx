import { ArrowUpRight } from 'lucide-react';
import Button from './Button.jsx';

export default function CallToAction({ title, description, buttonLabel = 'Talk to our team', to = '/contact' }) {
  return (
    <section className="cta-band">
      <div>
        <p className="eyebrow">LET’S START A CONVERSATION</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <Button to={to} variant="light">{buttonLabel}<ArrowUpRight size={17} aria-hidden="true" /></Button>
    </section>
  );
}
