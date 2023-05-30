import css from "./ChooseLanguage.module.scss";
import cx from "classnames";

export default function ChooseLanguage() {
  return (
    <div className={css.container}>
      <div className={css.caption}>Мова</div>
      <div className={css.buttonWrap}>
        <div className={css.button}>RU</div>
        <div className={cx(css.button, css.selectedButton)}>
          <img src="https://xl-static.rozetka.com.ua/assets/icons/flag-ua.svg" />
          <div>UA</div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
