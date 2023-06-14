import css from "./Header.module.scss";
import Hamburger from "../Hamburger/Hamburger.js";
import { FaMicrophone } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";

export default function Header() {
  return (
    <div className={css.container}>
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
      <div className={css.basketContainer}>
        <SlBasket className={css.basket} />
      </div>
    </div>
  );
}
