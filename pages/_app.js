
// import '../styles/globals.css';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import {NextIntlClientProvider} from 'next-intl';

// function MyApp({ Component, pageProps }) {
//   const { locale, messages } = pageProps;
//   return (
//      <NextIntlClientProvider locale={locale} messages={messages}>
//       <Navbar />
//       <main>
        
//         <Component {...pageProps} />
//       </main>
//       <Footer />
//     </NextIntlClientProvider>
//   );
// }

// export default MyApp;
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {NextIntlClientProvider} from 'next-intl';
import {useRouter} from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <NextIntlClientProvider
      locale={router.locale}
      messages={pageProps.messages}
    >
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </NextIntlClientProvider>
  );
}

export default MyApp;

