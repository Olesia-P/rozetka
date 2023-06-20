import "../styles/globals.scss";
import MobileMenu from "../components/MobileMenu/MobileMenu/MobileMenu.js";
import Header from "../components/Header/Header.js";
import { Provider } from "react-redux";
import { store } from "../store";
import Cart from "../components/Cart/Cart";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <MobileMenu />
        <Cart />

        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
