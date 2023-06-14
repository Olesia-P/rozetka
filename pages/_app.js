import "../styles/globals.scss";
import MobileMenu from "../components/MobileMenu/MobileMenu/MobileMenu.js";
import Header from "../components/Header/Header.js";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import isMobileReducer from "../store/modules/isMobileSlice";

const store = configureStore({
  reducer: {
    isMobile: isMobileReducer,
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <MobileMenu />

        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
