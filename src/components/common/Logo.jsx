import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link className="brand" to="/" aria-label="Energetics World home">
      <img className="brand__logo" src="/images/logo/energetics-logo.png" alt="" />
    </Link>
  );
}
