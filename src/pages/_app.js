import "../styles/globals.scss";
import MobileMenu from "../components/MobileMenu/MobileMenu/MobileMenu.js";
import Header from "../components/Header/Header.js";
import { Provider } from "react-redux";
import { store } from "../store";
import Basket from "../components/Basket/Basket";
import Product from "../components/Product/Product";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <MobileMenu />
        <Basket />
        <Product />

        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
