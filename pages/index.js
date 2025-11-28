
import Head from 'next/head';
import Image from 'next/image';
import StoreButtons from '../components/StoreButtons';
import {useTranslations} from 'next-intl';
import { getStaticProps } from '../lib/i18n';

export { getStaticProps };

export default function Home() {
  const t = useTranslations('IndexPage');
  const services = [
    {
      icon: 'delivery.svg',
      title: t('service1_title'),
      description: t('service1_description')
    },
    {
      icon: 'package.svg',
      title: t('service2_title'),
      description: t('service2_description')
    },
    {
      icon: 'route.svg',
      title: t('service3_title'),
      description: t('service3_description')
    },
  ];

  return (
    <div className="container">
      <Head>
        <title>{t('pageTitle')}</title>
        <meta name="description" content={t('pageDescription')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1>{t('heroTitle')}</h1>
              <p>
                {t('heroSubtitle')}
              </p>
              <StoreButtons />
            </div>
            <div className="hero-mockup">
              <Image src="/mockup-app.png" alt="SyncPOD App Mockup" layout="responsive" width={800} height={900} />
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="feature-section">
          <h2 className="section-title">{t('servicesTitle')}</h2>
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
          <h2 className="section-title">{t('testimonialsTitle')}</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>{t('testimonial1_text')}</p>
              <span>- John Doe</span>
            </div>
            <div className="testimonial-card">
              <p>{t('testimonial2_text')}</p>
              <span>- Jane Smith</span>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .container {
          background-color: #FFFFFF;
          color: #212529;
        }

        main {
          /* Styles removed to allow full-width sections */
        }

        .hero {
          background-color: #014055;
          padding: 4rem 2rem;
          margin-bottom: 4rem;
        }

        .hero-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 4rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .hero-text {
          flex: 1;
        }

        .hero-text h1 {
          font-size: 3.5rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 1.5rem;
        }

        .hero-text p {
          font-size: 1.2rem;
          line-height: 1.6;
          color: #FFFFFF;
          margin-bottom: 2rem;
        }

        .hero-mockup {
          flex: 1;
        }

        .feature-section {
          background-color: #f0f4f8;
          padding: 4rem;
          border-radius: 16px;
          max-width: 1200px;
          margin: 4rem auto;
          box-shadow: 0 15px 30px rgba(0,0,0,0.08);
        }

        .testimonials {
          padding: 4rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .section-title {
            text-align: center;
            font-size: 2.5rem;
            font-weight: 700;
            color: #212529;
            margin-bottom: 3rem;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .feature-card {
            background-color: #FFFFFF;
            padding: 2.5rem;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 10px 25px rgba(0,0,0,0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }
        
        .feature-icon {
            height: 60px;
            width: 60px;
            margin-bottom: 1.5rem;
            filter: none;
        }

        .feature-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #212529;
          margin-bottom: 1rem;
        }

        .feature-card p {
          color: #6c757d;
        }

        .testimonials {
            background-color: #FFFFFF;
        }
        
        .testimonial-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 2rem;
        }

        .testimonial-card {
            background-color: #f8f9fa;
            padding: 2.5rem;
            border-radius: 12px;
        }
        
        .testimonial-card p {
            font-style: italic;
            color: #6c757d;
            margin-bottom: 1.5rem;
        }

        .testimonial-card span {
            font-weight: 600;
            color: #212529;
        }

      `}</style>
    </div>
  );
}
