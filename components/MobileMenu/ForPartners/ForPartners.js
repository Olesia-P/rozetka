import css from "./ForPartners.module.scss";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

export default function ForPartners() {
  return (
    <div className={css.container}>
      <div className={css.headerWrap}>
        <div className={css.header}>Партнерам</div>
        <div className={css.chevronWrap}>
          <FiChevronRight className={css.chevron} />
        </div>
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
