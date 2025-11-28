
import { FaGooglePlay, FaApple, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import {useTranslations} from 'next-intl';
import { getStaticProps } from '../lib/i18n';

export { getStaticProps };
export default function Footer() {
  const t = useTranslations('FooterComp');
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section footer-brand">
          <h3>SyncPOD</h3>
          <p>{t('descriptApp')}</p>
        </div>

        <div className="footer-section footer-socials">
          <h4>{t('titleFollowUs')}</h4>
          <div className="social-icons">
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>

        <div className="footer-section footer-store">
          <h4>{t('getApp')}</h4>
          <div className="store-buttons-container">
            <a href="#" className="store-button">
              <FaGooglePlay className="store-icon" />
              <div className="store-text">
                <span>{t('getItOn')}</span>
                <span>Google Play</span>
              </div>
            </a>
            <a href="#" className="store-button">
              <FaApple className="store-icon" />
              <div className="store-text">
                <span>{t('getItOn')}</span>
                <span>App Store</span>
              </div>
            </a>
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 SyncPOD. {t('allRights')}</p>
      </div>

      <style jsx>{`
        .footer {
          background-color: #00202B;
          color: #e0e0e0;
          padding: 3rem 2rem;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .footer-section {
          flex: 1;
          min-width: 250px;
        }
        .footer-section h3, .footer-section h4 {
          font-size: 1.2rem;
          font-weight: bold;
          color: #ffffff;
          margin-bottom: 1rem;
        }
        .footer-brand p {
          font-size: 0.9rem;
          line-height: 1.5;
          color: #b0c4de;
        }
        .social-icons {
          display: flex;
          gap: 1.5rem;
        }
        .social-icons a {
          color: #b0c4de;
          font-size: 1.5rem;
          transition: color 0.3s ease;
        }
        .social-icons a:hover {
          color: #ffffff;
        }
        .store-buttons-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: flex-start;
        }
        .store-button {
          background-color: #002a3a;
          border: 1px solid #005f7a;
          display: flex;
          align-items: center;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          color: #ffffff;
          text-decoration: none;
          transition: background-color 0.3s ease;
          width: 190px;
          box-sizing: border-box;
        }
        .store-button:hover {
          background-color: #005f7a;
        }
        .store-icon {
          font-size: 1.75rem;
          margin-right: 1rem;
        }
        .store-text {
          display: flex;
          flex-direction: column;
        }
        .store-text span:first-child {
          font-size: 0.7rem;
          text-transform: uppercase;
        }
        .store-text span:last-child {
          font-size: 1rem;
          font-weight: bold;
        }
        .footer-bottom {
          text-align: center;
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid #005f7a;
        }
        .footer-bottom p {
          margin: 0;
          font-size: 0.8rem;
          color: #b0c4de;
        }
      `}</style>
    </footer>
  );
}
