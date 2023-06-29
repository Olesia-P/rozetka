/* eslint-disable @next/next/no-img-element */
import css from "./Header.module.scss";
import cx from "classnames";
import Hamburger from "../Hamburger/Hamburger.js";
import { FaMicrophone } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { AiOutlineShop, AiOutlineSearch } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { changeIsCartOpen } from "../../store/modules/commonOpeningSlice";
import { useState } from "react";

export default function Header() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { products } = useSelector(({ cart }) => cart);
  const [language, setLanguage] = useState("UA");

  return (
    <div className={cx(css.container)}>
      <div className={css.layout}>
        <div className={css.hamburger}>
          <Hamburger />
        </div>
        <img
          className={css.mobileLogo}
          src="https://content2.rozetka.com.ua/widget_logotype/light/original/342999092.svg"
          alt="logo"
        />
        <img
          className={css.desktopLogo}
          src="https://content2.rozetka.com.ua/widget_logotype/full/original/229862237.svg"
          alt="logo"
        />

        <div className={css.catalogContainer}>
          <AiOutlineShop className={css.catalogLogo} />
          <div className={css.catalogCaption}>Каталог</div>
        </div>

        <div className={css.searchForm}>
          <div className={css.searchIconContainer}>
            <AiOutlineSearch className={css.searchIcon} />
          </div>
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
          <div className={css.searchBtn}>Знайти</div>
        </div>

        <div className={css.iconsBlock}>
          <div className={css.languageChoiceContainer}>
            <div
              className={cx(css.ru, language === "UA" && css.notChosenLang)}
              onClick={() => setLanguage("RU")}
            >
              RU
            </div>
            <div className={css.UAflag}>
              <img
                src="https://xl-static.rozetka.com.ua/assets/icons/flag-ua.svg"
                alt="UAflag"
              />
            </div>
            <div
              className={cx(css.ua, language === "RU" && css.notChosenLang)}
              onClick={() => setLanguage("UA")}
            >
              UA
            </div>
          </div>

          <BiUser className={css.profile} />

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
    </div>
  );
}
