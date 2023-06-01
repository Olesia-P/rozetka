import css from "./Services.module.scss";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

export default function Services() {
  return (
    <div className={css.container}>
      <div className={css.headerWrap}>
        <div className={css.header}>Сервіси</div>
        <div className={css.chevronWrap}>
          <FiChevronRight className={css.chevron} />
        </div>
      </div>

      <Link href="/">
        <a className={css.link}>Бонусний рахунок</a>
      </Link>
      <Link href="/">
        <a className={css.link}>Rozetka Premium</a>
      </Link>
      <Link href="/">
        <a className={css.link}>Подарункові сертифікати</a>
      </Link>
      <Link href="/">
        <a className={css.link}>Rozetka обмін</a>
      </Link>
    </div>
  );
}
