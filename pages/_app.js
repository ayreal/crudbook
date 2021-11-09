import Head from 'next/head';
import { PageContainer } from '../components/ui';

// import '../styles/globals.css';
// import styles from '../styles/Home.module.css';
// import styled from 'styled-components';

const Layout = ({ children }) => {
  return <PageContainer>{children}</PageContainer>;
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Demo</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"></link>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
