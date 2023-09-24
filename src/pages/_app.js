import "../styles/globals.scss";
import MobileMenu from "../components/MobileMenu/MobileMenu/MobileMenu.js";
import Navbar from "../components/Navbar/Navbar.js";
import { Provider } from "react-redux";
import { store } from "../store";
import Cart from "../components/Cart/Cart";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <MobileMenu />
        <Cart />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
