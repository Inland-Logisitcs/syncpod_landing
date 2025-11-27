
import Head from 'next/head';

const Terms = () => {
  const terms = [
    {
      id: 1,
      title: '1. Introduction',
      content:
        'These Terms and Conditions govern your use of the Syncpod app delivery platform. The Syncpod app is an independent application providing delivery services. By using our services, you agree to be bound by these terms.',
    },
    {
      id: 2,
      title: '2. The Services',
      content:
        "The Services constitute a technology platform that enables users of the Syncpod app's mobile applications or websites to arrange and schedule transportation and/or logistics services provided by the Syncpod app. The Syncpod app provides transportation and logistics services and functions as a transportation carrier.",
    },
    {
      id: 3,
      title: '3. User Accounts',
      content:
        'To use most aspects of the Services, you must register for and maintain an active personal user Services account. You must be at least 18 years of age to obtain an Account. You agree to maintain accurate, complete, and up-to-date information in your Account.',
    },
    {
      id: 4,
      title: '4. Prohibited Items',
      content:
        'You are prohibited from shipping any items that are illegal, hazardous, or dangerous. This includes, but is not limited to, explosives, gases, flammable liquids, and toxic substances. For a full list of prohibited items, please refer to the guidelines provided by the Syncpod app.',
    },
    {
      id: 5,
      title: '5. Liability and Disclaimers',
      content:
        "The Syncpod app is not liable for any damages, liability or losses arising out of your use of the services or your reliance on the services or your inability to access or use the services. The services are provided 'as is' and 'as available.'.",
    },
    {
      id: 6,
      title: '6. Intellectual Property',
      content:
        "The Services and all rights therein are and shall remain the Syncpod app's property. Neither these Terms nor your use of the Services convey or grant to you any rights in or related to the Services except for the limited license granted above.",
    },
    {
      id: 7,
      title: '7. Other Provisions',
      content:
        "Claims of copyright infringement should be sent to the Syncpod app's designated agent. Please visit the Syncpod app's web page at https://www.syncpodapp.com/legal for the designated address and additional information.",
    },
  ];

  const privacyPolicies = [
    {
        id: 1,
        title: '1. Data Collection',
        content: 'We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, postal address, profile picture, payment method, items requested (for delivery services), and other information you choose to provide.',
    },
    {
        id: 2,
        title: '2. Data Usage',
        content: 'We use the information we collect to provide, maintain, and improve our services, including to facilitate payments, send receipts, provide products and services you request (and send related information), develop new features, provide customer support to users, develop safety features, authenticate users, and send product updates and administrative messages.',
    },
    {
        id: 3,
        title: '3. Data Security',
        content: 'Your personal data is important to us. We use encryption to protect your data, including your password, which is stored in an encrypted format. We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.',
    },
    {
        id: 4,
        title: '4. Account Deletion',
        content: 'You have the right to delete your account at any time. If you choose to delete your account, we will delete all of your personal information from our systems. You can request to delete your account by contacting our customer support team.',
    }
  ];

  const appStoreCompliance = [
    {
        id: 1,
        title: '1. General Compliance',
        content: 'The Syncpod app is designed to be compliant with the guidelines of the app stores where it is distributed, including the Apple App Store and Google Play Store.',
    },
    {
        id: 2,
        title: '2. In-App Purchases',
        content: "All in-app purchases are processed through the respective app store's payment system. The Syncpod app does not collect or store your payment information directly.",
    },
    {
        id: 3,
        title: '3. Content and Conduct',
        content: "Users are expected to adhere to the content and conduct policies of the app stores. Any user-generated content that violates these policies may be removed, and the user's account may be suspended.",
    },
    {
        id: 4,
        title: '4. Privacy',
        content: 'Our privacy practices are designed to be in line with the privacy requirements of the app stores. Please refer to our Privacy Policy for more details.',
    }
  ];

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
              <h1>Terms</h1>
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
                <h1>Privacy Policy</h1>
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
                <h1>App Store Guideline Compliance</h1>
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
