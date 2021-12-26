import Head from 'next/head';
import { PageContainer } from '../components/ui';

const Layout = ({ children }) => <PageContainer>{children}</PageContainer>;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Bookshelf</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap"
          rel="stylesheet"></link>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
