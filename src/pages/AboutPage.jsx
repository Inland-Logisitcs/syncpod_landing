import React from 'react';
import { useTranslation } from 'react-i18next';
import './AboutPage.css';
import downloadIcon from '../assets/img/download.svg';
import registerIcon from '../assets/img/register.svg';
import scanIcon from '../assets/img/scan.svg';
import routeIcon from '../assets/img/route.svg';

const AboutPage = () => {
  const { t } = useTranslation();

  const gettingStartedSteps = [
    {
      title: t('AboutPage.step1_title'),
      description: t('AboutPage.step1_description'),
      align: "left",
      icon: downloadIcon,
    },
    {
      title: t('AboutPage.step2_title'),
      description: t('AboutPage.step2_description'),
      align: "right",
      icon: registerIcon,
    },
    {
      title: t('AboutPage.step3_title'),
      description: t('AboutPage.step3_description'),
      align: "left",
      icon: scanIcon,
    },
    {
      title: t('AboutPage.step4_title'),
      description: t('AboutPage.step4_description'),
      align: "right",
      icon: routeIcon,
    },
  ];

  return (
    <div className="about-page">
      <main className="main">
        <section className="app-preview">
          <div className="preview-overlay"></div>
          <div className="preview-content">
            <h2>{t('AboutPage.appPreviewTitle')}</h2>
            <p>{t('AboutPage.appPreviewSubtitle')}</p>
          </div>
        </section>

        <section className="mission mission-card">
          <h2>{t('AboutPage.missionTitle')}</h2>
          <p>{t('AboutPage.missionContent')}</p>
        </section>

        <section className="getting-started">
          <h2>{t('AboutPage.gettingStartedTitle')}</h2>
          <div className="steps-timeline">
            {gettingStartedSteps.map((step, index) => (
              <div key={index} className={`step-card ${step.align}`}>
                <div className="step-content">
                  <img src={step.icon} alt={`${step.title} icon`} className="step-icon" />
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
