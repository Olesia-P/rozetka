import "../styles/globals.scss";
import MobileMenu from "../components/MobileMenu/MobileMenu/MobileMenu.js";
import Hamburger from "../components/Hamburger/Hamburger.js";
import { useState } from "react";
// import cx from "classnames";

function MyApp({ Component, pageProps }) {
  const [opened, setOpened] = useState(false);
  console.log(opened);

  return (
    <div>
      <MobileMenu
        onClick={() => {
          setOpened(true);
        }}
      />
      <Hamburger
        onClick={() => {
          setOpened(true);
        }}
      />

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
