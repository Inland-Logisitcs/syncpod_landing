
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {useTranslations} from 'next-intl';
import { getStaticProps } from '../lib/i18n';

export { getStaticProps };
const Navbar = () => {

  const router = useRouter();

  const handleLocaleChange = (e) => {
    router.push(router.pathname, router.asPath, { locale: e.target.value });
  };

  const t = useTranslations('NavbarComp');

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" legacyBehavior>
          <a className="logo">
            <Image src="/syncpod_icon.png" alt="Syncpod Logo" width={40} height={40} />
            <span className="logo-text">SyncPOD</span>
          </a>
        </Link>
        <div className="nav-links">
          <Link href="/" legacyBehavior>
            <a>{t('homeLink')}</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a>{t('aboutLink')}</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a>{t('contactLink')}</a>
          </Link>
          <Link href="/terms" legacyBehavior>
            <a>{t('termsLinks')}</a>
          </Link>

        </div>
          <div className="language-switcher">
          <select onChange={handleLocaleChange} defaultValue={router.locale}>
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
          </div>
      </div>
      <style jsx>{`
        .navbar {
          width: 100%;
          background-color: #014055;
          color: #ffffff;
          padding: 1rem 2rem;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          display: flex;
          align-items: center;
          font-size: 1.5rem;
          font-weight: bold;
          color: #ffffff;
          text-decoration: none;
        }
        .logo-text {
          margin-left: 0.5rem;
        }
        .nav-links a {
          color: #ffffff;
          text-decoration: none;
          margin-left: 2rem;
          font-size: 1rem;
          transition: color 0.3s ease;
        }
        .nav-links a:hover {
          color: #00bcd4;
        }
        .language-switcher select {
          background-color: #014055;
          color: #ffffff;
          border: 1px solid #ffffff;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
