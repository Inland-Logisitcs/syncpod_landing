import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGooglePlay, FaApple, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-brand">
          <h3>SyncPOD</h3>
          <p>{t('FooterComp.descriptApp')}</p>
        </div>

        <div className="footer-section footer-socials">
          <h4>{t('FooterComp.titleFollowUs')}</h4>
          <div className="social-icons">
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>

        <div className="footer-section footer-store">
          <h4>{t('FooterComp.getApp')}</h4>
          <div className="store-buttons-container">
            <a href="#" className="store-button">
              <FaGooglePlay className="store-icon" />
              <div className="store-text">
                <span>{t('FooterComp.getItOn')}</span>
                <span>Google Play</span>
              </div>
            </a>
            <a href="#" className="store-button">
              <FaApple className="store-icon" />
              <div className="store-text">
                <span>{t('FooterComp.getItOn')}</span>
                <span>App Store</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 SyncPOD. {t('FooterComp.allRights')}</p>
      </div>
    </footer>
  );
};

export default Footer;
