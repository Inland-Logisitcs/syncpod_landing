import React from 'react';
import { useTranslation } from 'react-i18next';
import StoreButtons from '../components/StoreButtons';
import routeIcon from '../assets/img/route.svg';
import packageIcon from '../assets/img/package.svg';
import deliveryIcon from '../assets/img/delivery.svg';
import mockupApp from '../assets/img/mockup-app.png';


import './HomePage.css';

const HomePage = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: deliveryIcon,
      title: t('IndexPage.service1_title'),
      description: t('IndexPage.service1_description'),
    },
    {
      icon: packageIcon,
      title: t('IndexPage.service2_title'),
      description: t('IndexPage.service2_description'),
    },
    {
      icon: routeIcon,
      title: t('IndexPage.service3_title'),
      description: t('IndexPage.service3_description'),
    },
  ];

  return (
    <div className="">
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1>{t('IndexPage.heroTitle')}</h1>
              <p>{t('IndexPage.heroSubtitle')}</p>
              <StoreButtons />
            </div>
            <div className="hero-mockup">
              <img src={mockupApp} alt="SyncPOD App Mockup" style={{width: '100%', height: 'auto'}}/>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="feature-section">
          <h2 className="section-title">{t('IndexPage.servicesTitle')}</h2>
          <div className="feature-grid">
            {services.map((service, index) => (
              <div key={index} className="feature-card">
                <img src={service.icon} alt={`${service.title} icon`} className="feature-icon" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="testimonials">
          <h2 className="section-title">{t('IndexPage.testimonialsTitle')}</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>{t('IndexPage.testimonial1_text')}</p>
              <span>{t('IndexPage.testimonial1_author')}</span>
            </div>
            <div className="testimonial-card">
              <p>{t('IndexPage.testimonial2_text')}</p>
              <span>{t('IndexPage.testimonial2_author')}</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
