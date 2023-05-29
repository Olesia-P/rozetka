import "../styles/globals.scss";
import MobileMenu from "../components/MobileMenu/MobileMenu/MobileMenu.js";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <MobileMenu />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
