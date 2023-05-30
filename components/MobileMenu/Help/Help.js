import css from "./Help.module.scss";
import Link from "next/link";

export default function Help() {
  return (
    <div className={css.container}>
      <div className={css.header}>Допомога</div>
      <Link href="/">
        <a className={css.link}>Доставка та оплата</a>
      </Link>
      <Link href="/">
        <a className={css.link}>Кредит</a>
      </Link>
      <Link href="/">
        <a className={css.link}>Гарантія</a>
      </Link>
      <Link href="/">
        <a className={css.link}>Повернення товару</a>
      </Link>
      <Link href="/">
        <a className={css.link}>Сервісні центри</a>
      </Link>
    </div>
  );
}
