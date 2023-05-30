import css from "./ForPartners.module.scss";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

export default function ForPartners() {
  return (
    <div className={css.container}>
      <div className={css.headerWrap}>
        <div className={css.header}>Партнерам</div>
        <FiChevronRight className={css.chevron} />
      </div>

      <Link href="/">
        <a className={css.link}>Продавати на Розетці</a>
      </Link>
      <Link href="/">
        <a className={css.link}>Співпраця з нами</a>
      </Link>
      <Link href="/">
        <a className={css.link}>Франчайзинг</a>
      </Link>
      <Link href="/">
        <a className={css.link}>Оренда приміщень</a>
      </Link>
    </div>
  );
}
