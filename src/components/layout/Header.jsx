import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Button from '../common/Button.jsx';
import Logo from '../common/Logo.jsx';
import ThemeToggle from '../common/ThemeToggle.jsx';
import DesktopNavigation from './DesktopNavigation.jsx';
import MobileNavigation from './MobileNavigation.jsx';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const [menuRoute, setMenuRoute] = useState(pathname);
  const isMenuOpen = menuRoute === pathname && menuOpen;

  const toggleMenu = () => {
    if (menuRoute !== pathname) {
      setMenuRoute(pathname);
      setMenuOpen(true);
      return;
    }

    setMenuOpen((open) => !open);
  };

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') closeMenu();
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [isMenuOpen]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <DesktopNavigation />
        <div className="header-actions">
          <ThemeToggle />
          <Button to="/contact" className="header-cta">Get in touch</Button>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={toggleMenu}
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>
      {menuOpen && <div id="mobile-navigation"><MobileNavigation onNavigate={() => setMenuOpen(false)} /></div>}
    </header>
  );
}
