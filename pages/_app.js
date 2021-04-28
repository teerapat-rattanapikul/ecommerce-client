import "../styles/globals.css";
import Navbar from "../components/layout/Navbar";
import { Fragment } from "react";
import { wrapper } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Navbar />
      <div id="background"></div>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default wrapper.withRedux(MyApp);
