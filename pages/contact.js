
import Head from "next/head";
import {useTranslations} from 'next-intl';
import { getStaticProps } from '../lib/i18n';

export { getStaticProps };

export default function Contact() {
  const t = useTranslations('ContactPage');

  const faqs = [
    {
      question: t('faq1_question'),
      answer: t('faq1_answer'),
    },
    {
      question: t('faq2_question'),
      answer: t('faq2_answer'),
    },
    {
      question: t('faq3_question'),
      answer: t('faq3_answer'),
    },    
    {
      question: t('faq4_question'),
      answer: t('faq4_answer'),
    },
  ];

  return (
    <div className="bg-white text-black">
      <Head>
        <title>{t('pageTitle')} - Syncpodd</title>
        <meta
          name="description"
          content={t('pageDescription')}
        />
      </Head>

      <main className="main">
        <section className="contact-hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>{t('heroTitle')}</h1>
            <p>{t('heroSubtitle')}</p>
          </div>
        </section>

        <section className="faq">
          <h2>{t('faqTitle')}</h2>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-email-section">
          <div className="contact-card">
            <div className="contact-card-inner">
              <div className="contact-card-header">
                <div className="email-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <h3>{t('contactCardTitle')}</h3>
              </div>
              <p>
                {t('contactCardContent')}{' '}
                <a href="mailto:eng@inlandlogistics.co" className="email-link">
                    eng@inlandlogistics.co
                </a>
                {t('asSoonPossible')}
              </p>
            </div>
          </div>

          <div className="contact-card report-card">
            <div className="contact-card-inner">
                <div className="contact-card-header">
                    <div className="email-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-alert-triangle"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    </div>
                    <h3>{t('reportCardTitle')}</h3>
                </div>
                <p>
                {t('reportCardContent')} ' '
                <a href="mailto:eng@inlandlogistics.co" className="email-link">
                    eng@inlandlogistics.co
                </a>
                ' ' with:
                </p>
                <ul className="problem-list">
                <li>{t('problemList1')}</li>
                <li>{t('problemList2')}</li>
                <li>{t('problemList3')}</li>
                <li>{t('problemList4')}</li>

                </ul>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .main {
          padding: 0;
        }

        .contact-hero {
          position: relative;
          text-align: center;
          padding: 6rem 2rem;
          background: url('/syncpod_landing/desktop-banner.jpg') no-repeat center center/cover;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .contact-hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-weight: bold;
          color: white;
        }

        .contact-hero p {
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto;
          color: white;
        }

        .faq {
          padding: 4rem 2rem;
          text-align: center;
        }

        .faq h2 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          font-weight: bold;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          max-width: 800px;
          margin: 2rem auto 0;
          text-align: left;
        }

        .faq-item {
          background-color: #f9f9f9;
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
        }

        .faq-item h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          font-weight: bold;
        }

        .contact-email-section {
          padding: 4rem 2rem;
          background-color: #f4f4f4;
        }

        .contact-card {
            max-width: 800px;
            margin: 0 auto 2rem auto;
            padding-top: 1.5rem;
            background-color: #e6f7ff;
            border-radius: 10px;
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .contact-card-header {
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
        }

        .contact-card-inner {
            background-color: white;
            padding: 2rem;
            border-radius: 10px;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }

        .report-card {
          background-color: #fcebeb;
        }

        .report-card h3 {
          color: #c9302c;
        }

        .report-card .email-icon {
          color: #c9302c;
        }

        .report-card .email-link {
          color: #c9302c;
          font-weight: bold;
        }

        .email-icon {
            margin-right: 1rem;
            color: #014055;
        }

        .contact-card h3 {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 0;
          color: #014055;
        }

        .contact-card p {
            font-size: 1.1rem;
            line-height: 1.7;
        }

        .email-link {
          color: #007bff;
          font-weight: bold;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .email-link:hover {
          color: #0056b3;
          text-decoration: underline;
        }

        .problem-list {
            list-style: none;
            padding: 0;
            margin-top: 1rem;
            display: inline-block;
            text-align: left;
        }

        .problem-list li {
            margin-bottom: 0.75rem;
            padding-left: 1.5rem;
            position: relative;
        }

        .problem-list li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: #c9302c;
            font-weight: bold;
        }
      `}</style>
    </div>
  );
}
