
import Head from 'next/head';
import {useTranslations} from 'next-intl';
import { getStaticProps } from '../lib/i18n';

export { getStaticProps };

const Terms = () => {
  const t = useTranslations('TermsPage');

  const terms = Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    title: t(`term${i + 1}_title`),
    content: t(`term${i + 1}_content`),
  }));

  const privacyPolicies = Array.from({ length: 4 }, (_, i) => ({
    id: i + 1,
    title: t(`privacy${i + 1}_title`),
    content: t(`privacy${i + 1}_content`),
  }));

  const appStoreCompliance = Array.from({ length: 4 }, (_, i) => ({
    id: i + 1,
    title: t(`compliance${i + 1}_title`),
    content: t(`compliance${i + 1}_content`),
  }));

  return (
    <>
      <Head>
        <title>Terms and Privacy Policy - Syncpod app</title>
      </Head>
      <div className="container">
        <main className="main-content">
          <div className="section-card">
            <div className="section-header">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              <h1>{t('mainTitle')}</h1>
            </div>
            <div className="inner-content">
              {terms.map((term) => (
                <section key={term.id} className="item-card">
                  <h2>{term.title}</h2>
                  <p>{term.content}</p>
                </section>
              ))}
            </div>
          </div>

          <div className="section-card">
            <div className="section-header">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                <h1>{t('privacyTitle')}</h1>
            </div>
            <div className="inner-content">
              {privacyPolicies.map((policy) => (
                <section key={policy.id} className="item-card">
                  <h2>{policy.title}</h2>
                  <p>{policy.content}</p>
                </section>
              ))}
            </div>
          </div>

          <div className="section-card">
            <div className="section-header">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <h1>{t('complianceTitle')}</h1>
            </div>
             <div className="inner-content">
              {appStoreCompliance.map((rule) => (
                <section key={rule.id} className="item-card">
                  <h2>{rule.title}</h2>
                  <p>{rule.content}</p>
                </section>
              ))}
            </div>
          </div>
        </main>
      </div>
      <style jsx>{`
        .container {
          background-color: #f0f4f8;
          min-height: 100vh;
          padding: 2rem 0;
        }
        .main-content {
          max-width: 900px;
          margin: 0 auto;
        }
        .section-card {
          background-color: #ffffff;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          margin-bottom: 3rem;
          overflow: hidden; /* To contain the child elements */
        }
        .section-header {
          display: flex;
          align-items: center;
          padding: 1.5rem 2rem;
          border-bottom: 1px solid #e9ecef;
          color: #014055;
        }
        .section-header h1 {
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 0 1rem;
        }
        .inner-content {
            padding: 2rem;
        }
        .item-card {
          background-color: #f8f9fa;
          border: 1px solid #dee2e6;
          border-radius: 8px;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .item-card:last-child {
            margin-bottom: 0;
        }
        .item-card h2 {
          font-size: 1.3rem;
          font-weight: 600;
          color: #343a40;
          margin: 0 0 0.75rem 0;
        }
        .item-card p {
          font-size: 1rem;
          line-height: 1.6;
          color: #495057;
          margin: 0;
        }
      `}</style>
    </>
  );
};

export default Terms;
