import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaQuestionCircle } from 'react-icons/fa';
import './ContactPage.css';

const ContactPage = () => {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t('ContactPage.faq1_question'),
      answer: t('ContactPage.faq1_answer'),
    },
    {
      question: t('ContactPage.faq2_question'),
      answer: t('ContactPage.faq2_answer'),
    },
    {
      question: t('ContactPage.faq3_question'),
      answer: t('ContactPage.faq3_answer'),
    },
    {
      question: t('ContactPage.faq4_question'),
      answer: t('ContactPage.faq4_answer'),
    },
  ];

  return (
    <div className="bg-white text-black">
      <main className="main">
        <section className="contact-hero">
          <div className="hero-overlay"></div>
          <div className="hero-content-contact">
            <h1>{t('ContactPage.heroTitle')}</h1>
            <p>{t('ContactPage.heroSubtitle')}</p>
          </div>
        </section>

        <section className="faq">
          <h2>{t('ContactPage.faqTitle')}</h2>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div className='title-icon'>
                <FaQuestionCircle className="h3-icon" />
                <h3>{faq.question}</h3>
                </div>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-email-section">
          <div className="contact-card">
            <div className="contact-card-header">
              <div className="email-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <h3>{t('ContactPage.contactCardTitle')}</h3>
            </div>
            <div className="contact-card-inner">
              <p>
                {t('ContactPage.contactCardContent')}{' '}
                <a href="mailto:eng@inlandlogistics.co" className="email-link">
                    eng@inlandlogistics.co
                </a>
                {t('ContactPage.asSoonPossible')}
              </p>
            </div>
          </div>

          <div className="contact-card report-card">
            <div className="contact-card-header">
                <div className="email-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-alert-triangle"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                </div>
                <h3>{t('ContactPage.reportCardTitle')}</h3>
            </div>
            <div className="contact-card-inner">
                <p>
                {t('ContactPage.reportCardContent')}{' '}
                <a href="mailto:eng@inlandlogistics.co" className="email-link">
                    eng@inlandlogistics.co
                </a>
                {' '}
                with:
                </p>
                <ul className="problem-list">
                <li>{t('ContactPage.problemList1')}</li>
                <li>{t('ContactPage.problemList2')}</li>
                <li>{t('ContactPage.problemList3')}</li>
                <li>{t('ContactPage.problemList4')}</li>
                </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
