import Layout from "@component/components/Layout";
import "/styles/globals.css";


import Navbar from "@component/components/Navbar/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
