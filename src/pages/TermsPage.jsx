import React from 'react';
import { useTranslation } from 'react-i18next';
import './TermsPage.css';

const TermsPage = () => {
  const { t } = useTranslation();

  const terms = Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    title: t(`TermsPage.term${i + 1}_title`),
    content: t(`TermsPage.term${i + 1}_content`),
  }));

  const privacyPolicies = Array.from({ length: 4 }, (_, i) => ({
    id: i + 1,
    title: t(`TermsPage.privacy${i + 1}_title`),
    content: t(`TermsPage.privacy${i + 1}_content`),
  }));

  const appStoreCompliance = Array.from({ length: 4 }, (_, i) => ({
    id: i + 1,
    title: t(`TermsPage.compliance${i + 1}_title`),
    content: t(`TermsPage.compliance${i + 1}_content`),
  }));

  return (
    <>
      <br></br>
        <main className="main-content">
          <div className="section-card">
            <div className="section-header">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              <h1>{t('TermsPage.mainTitle')}</h1>
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
                <h1>{t('TermsPage.privacyTitle')}</h1>
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
                <h1>{t('TermsPage.complianceTitle')}</h1>
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
 
    </>
  );
};

export default TermsPage;
