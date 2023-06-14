import { useState } from "react";
import css from "./ChooseLanguage.module.scss";
import cx from "classnames";

export default function ChooseLanguage() {
  const [selected, setSelected] = useState("UA");

  return (
    <div className={css.container}>
      <div className={css.caption}>Мова</div>
      <div className={css.buttonWrap}>
        <div
          className={cx(css.button, selected === "RU" && css.selectedButton)}
          onClick={() => {
            setSelected("RU");
          }}
        >
          RU
        </div>
        <div
          className={cx(css.button, selected === "UA" && css.selectedButton)}
          onClick={() => {
            setSelected("UA");
          }}
        >
          <img src="https://xl-static.rozetka.com.ua/assets/icons/flag-ua.svg" />
          <div>UA</div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
