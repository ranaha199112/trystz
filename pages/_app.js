import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Log in | Tryst.link: Find independent escorts</title>
        <meta
          name="description"
          content="Tryst.link - Find a companion for that intimate rendezvous you've been dreaming about on the fastest growing independent escort directory."
        />
      </Head>

      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
