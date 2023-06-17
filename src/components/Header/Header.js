import css from "./Header.module.scss";
import cx from "classnames";
import Hamburger from "../Hamburger/Hamburger.js";
import { FaMicrophone } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { changeIsBasket } from "../../store/modules/isBasketSlice";

export default function Header() {
  const dispatch = useDispatch();
  const basketObject = useSelector((state) => state.basketObject.value);

  return (
    <div className={cx(css.container, "mobile")}>
      <div className={css.layout}>
        <Hamburger />
        <img src="https://content2.rozetka.com.ua/widget_logotype/light/original/342999092.svg" />
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
          className={css.basketContainer}
          onClick={() => {
            dispatch(changeIsBasket(true));
          }}
        >
          <SlBasket className={css.basket} />
          <div className={css.itemsCounter}>{basketObject.length}</div>
        </div>
      </div>
    </div>
  );
}
