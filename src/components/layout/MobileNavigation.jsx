import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

export default function MobileNavigation({ onNavigate }) {
  return (
    <nav className="mobile-nav" aria-label="Mobile navigation">
      {links.map(({ to, label, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          onClick={onNavigate}
          className={({ isActive }) => isActive ? 'mobile-nav__link is-active' : 'mobile-nav__link'}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
