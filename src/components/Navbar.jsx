import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import iconApp from '../assets/img/syncpod_icon.png';
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <img src={iconApp} alt="Syncpod Logo" width={40} height={40} />
          <span className="logo-text">SyncPOD</span>
        </Link>

        {/* Hamburger button */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          ☰
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>{t('NavbarComp.homeLink')}</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>{t('NavbarComp.aboutLink')}</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>{t('NavbarComp.contactLink')}</Link>
          <Link to="/terms" onClick={() => setMenuOpen(false)}>{t('NavbarComp.termsLinks')}</Link>
        </div>

        {/* Language switcher */}
        <div className="language-switcher">
          <select onChange={handleLanguageChange} defaultValue={i18n.language}>
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;