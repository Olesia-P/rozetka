/* eslint-disable @next/next/no-img-element */
import css from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={css.container}>
      <div className={css.imgWrap}>
        <a>
          <img
            alt="mastercard"
            src="https://xl-static.rozetka.com.ua/assets/img/design/mastercard-logo.svg"
          />
        </a>
        <a>
          <img
            alt="visa"
            src="https://xl-static.rozetka.com.ua/assets/img/design/visa-logo.svg"
          />
        </a>
      </div>
      <div className={css.copyright}>
        ТМ використовується на підставі ліцензії правовласника RozetkaLTD
      </div>
      <div className={css.license}>
        © 2001–2023 Інтернет-магазин «Розетка™» — Щоразу що треба
      </div>
    </div>
  );
}
