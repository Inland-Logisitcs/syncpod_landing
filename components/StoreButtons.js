
import Link from 'next/link';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import {useTranslations} from 'next-intl';
import { getStaticProps } from '../lib/i18n';

export { getStaticProps };

const StoreButtons = () => {
  const t = useTranslations('StoreButtonComp');
  return (
    
    <div className="store-buttons">
      <Link href="#" legacyBehavior>
        <a className="store-button apple">
          <FaApple className="icon" />
          <div className="text-left">
            <span className="small-text">{t('download')}</span>
            <span className="font-bold">App Store</span>
          </div>
        </a>
      </Link>
      <Link href="#" legacyBehavior>
        <a className="store-button google">
          <FaGooglePlay className="icon" />
          <div className="text-left">
            <span className="small-text">{t('getItOn')}</span>
            <span className="font-bold">Google Play</span>
          </div>
        </a>
      </Link>
      <style jsx>{`
        .store-buttons {
          display: flex;
          gap: 1rem;
        }
        .store-button {
          display: flex;
          align-items: center;
          background-color: #014055;
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 10px;
          text-decoration: none;
          transition: background-color 0.3s;
          border: 2px solid white;
        }
        .store-button:hover {
          background-color: white;
          color: #014055;
        }
        .apple .icon {
          font-size: 4.5rem;
          margin-right: 1rem;
        }
        .google .icon {
          font-size: 4.3rem;
          margin-right: 1rem;
        }
        .text-left {
          display: flex;
          flex-direction: column;
        }
        .text-left span {
          text-align: left;
          line-height: 1.2;
        }
        .small-text {
          font-size: 0.8rem;
        }
        .font-bold {
          font-weight: bold;
          font-size: 1.2rem;
        }
      `}</style>
    </div>
  );
};

export default StoreButtons;
