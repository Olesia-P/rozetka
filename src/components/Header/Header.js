import css from "./Header.module.scss";
import Hamburger from "../Hamburger/Hamburger.js";
import { FaMicrophone } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeIsBasket } from "../../store/modules/isBasketSlice";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
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
          <div className={css.itemsCounter}>1</div>
        </div>
      </div>
    </div>
  );
}
