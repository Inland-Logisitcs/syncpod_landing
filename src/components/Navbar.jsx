import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import iconApp from '../assets/img/syncpod_icon.png';
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <nav className="navbar">
      <div className="container">
  
        <Link to="/" className="logo">
          <img src={iconApp} alt="Syncpod Logo" width={40} height={40} />
          <span className="logo-text">SyncPOD</span>
        </Link>
        <div className="nav-links">
          <Link to="/">{t('NavbarComp.homeLink')}</Link>
          <Link to="/about">{t('NavbarComp.aboutLink')}</Link>
          <Link to="/contact">{t('NavbarComp.contactLink')}</Link>
          <Link to="/terms">{t('NavbarComp.termsLinks')}</Link>
        </div>
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
