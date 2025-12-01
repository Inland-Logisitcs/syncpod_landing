import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import './StoreButtons.css';

const StoreButtons = () => {
  const { t } = useTranslation();

  return (
    <div className="store-buttons">
      <a href="#" className="store-button apple">
        <FaApple className="icon" />
        <div className="text-left">
          <span className="small-text">{t('StoreButtonComp.download')}</span>
          <span className="font-bold">App Store</span>
        </div>
      </a>
      <a href="#" className="store-button google">
        <FaGooglePlay className="icon" />
        <div className="text-left">
          <span className="small-text">{t('StoreButtonComp.getItOn')}</span>
          <span className="font-bold">Google Play</span>
        </div>
      </a>
    </div>
  );
};

export default StoreButtons;
