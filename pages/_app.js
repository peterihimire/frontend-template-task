import Head from "next/head";
import Script from "next/script";
import Router from "next/router";
import NProgress from "nprogress";
// import "swiper/css/pagination";
import "../styles/globals.scss";
// import "swiper/css";
// import "swiper/css/bundle";
import "nprogress/nprogress.css";
// import { wrapper } from "../store";
// import { PersistGate } from "redux-persist/integration/react";
// import { useStore } from "react-redux";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  // const store = useStore((state) => state);

  return getLayout(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Grow money on tree." />
        <title>Templates App</title>
      </Head>

      <Script src="/fontawesome.js" />

      {/* <PersistGate persistor={store.__persistor}> */}
      <Component {...pageProps} />
      {/* </PersistGate> */}
    </>
  );
}

// export default wrapper.withRedux(MyApp);
export default MyApp;
