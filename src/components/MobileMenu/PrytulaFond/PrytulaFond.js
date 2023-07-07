/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
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

      <div className={css.link}>ФОНД СЕРГІЯ ПРИТУЛИ</div>
      <div className={css.chevronContainer}>
        <FiChevronRight className={css.chevron} />
      </div>
    </div>
  );
}
