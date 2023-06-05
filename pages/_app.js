import "../styles/globals.scss";
import MobileMenu from "../components/MobileMenu/MobileMenu/MobileMenu.js";
import Hamburger from "../components/Hamburger/Hamburger.js";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [opened, setOpened] = useState(false);

  return (
    <div>
      {opened && <MobileMenu setOpened={setOpened} />}
      {!opened && <Hamburger setOpened={setOpened} />}

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
