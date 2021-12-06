import "../styles/globals.css";
import Head from "next/head";

import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Next Events</title>
        {/* This is a comment and this title will be replaced by the individual titles of other pages because Next.js takes the latest title and renders it for a page only, however if there's any page that does not have a title then this title will be displayed for that page, same is the case for meta tage below*/}
        <meta name="description" content="NextJS Events" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
