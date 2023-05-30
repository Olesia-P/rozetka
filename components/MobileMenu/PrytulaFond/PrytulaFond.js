import css from "./PrytulaFond.module.scss";
// import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

export default function PrytulaFond() {
  return (
    <div className={css.container}>
      <img
        className={css.logo}
        src="https://xl-static.rozetka.com.ua/assets/img/design/logos/prytula_foundation.svg"
      />

      <a
        href="https://www.liqpay.ua/uk/checkout/card/checkout_1685468596509562_55639874_L5F5fn1tUf7s5SMkg4h3"
        className={css.link}
      >
        ФОНД СЕРГІЯ ПРИТУЛИ
      </a>
      <a href="https://www.liqpay.ua/uk/checkout/card/checkout_1685468596509562_55639874_L5F5fn1tUf7s5SMkg4h3">
        <FiChevronRight className={css.chevron} />
      </a>
    </div>
  );
}
