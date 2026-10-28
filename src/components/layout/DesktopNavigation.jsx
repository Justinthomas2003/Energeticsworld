import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

export default function DesktopNavigation() {
  return (
    <nav className="desktop-nav" aria-label="Main navigation">
      {links.map(({ to, label, end }) => (
        <NavLink key={to} to={to} end={end} className={({ isActive }) => isActive ? 'nav-link is-active' : 'nav-link'}>
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
