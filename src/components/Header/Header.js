/* eslint-disable @next/next/no-img-element */
import css from "./Header.module.scss";
import cx from "classnames";
import Hamburger from "../Hamburger/Hamburger.js";
import { FaMicrophone } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { changeIsCartOpen } from "../../store/modules/commonOpeningSlice";

export default function Header() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { products } = useSelector(({ cart }) => cart);

  return (
    <div className={cx(css.container, "mobile-block")}>
      <div className={css.layout}>
        <Hamburger />
        <img
          src="https://content2.rozetka.com.ua/widget_logotype/light/original/342999092.svg"
          alt="logo"
        />
        <div className={css.searchForm}>
          <input
            type="text"
            placeholder="Я шукаю..."
            className={css.input}
            autoComplete="off"
            autoFocus="off"
          />
          <div className={css.micBtn}>
            <FaMicrophone className={css.mic} />
          </div>
        </div>
        <div
          className={css.cartContainer}
          onClick={() => {
            dispatch(changeIsCartOpen(true));
          }}
        >
          <SlBasket className={css.cart} />
          <div className={css.itemsCounter}>{products.length}</div>
        </div>
      </div>
    </div>
  );
}
