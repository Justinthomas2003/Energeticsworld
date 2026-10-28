import { Link } from 'react-router-dom';
import Button from '../components/common/Button.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';

export default function NotFound() {
  useDocumentMeta('Page not found', 'The page you requested could not be found.');
  return (
    <section className="not-found">
      <div className="container">
        <p className="eyebrow">404 · PAGE NOT FOUND</p>
        <h1>This page seems to have gone off-grid.</h1>
        <p>We couldn’t find the page you were looking for. Let’s get you back on track.</p>
        <Button to="/">Back to home</Button>
        <p className="not-found__link"><Link to="/contact">Contact us if you need a hand.</Link></p>
      </div>
    </section>
  );
}
