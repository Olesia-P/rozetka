import "../styles/globals.scss";
import MobileMenu from "../components/MobileMenu/MobileMenu/MobileMenu.js";
import Hamburger from "../components/Hamburger/Hamburger.js";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [openedMobile, setOpenedMobile] = useState(false);

  return (
    <div>
      <MobileMenu
        setOpenedMobile={setOpenedMobile}
        openedMobile={openedMobile}
      />
      <Hamburger setOpenedMobile={setOpenedMobile} />

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
