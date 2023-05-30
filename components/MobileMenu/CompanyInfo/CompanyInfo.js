import css from "./CompanyInfo.module.scss";
import Link from "next/link";

export default function CompanyInfo() {
  return (
    <div className={css.container}>
      <div className={css.header}>Інформація про компанію</div>
      <Link href="/">
        <a className={css.link}>Про нас</a>
      </Link>
      <Link href="/">
        <a className={css.link}>Умови використання сайту</a>
      </Link>
      <Link href="/">
        <a className={css.link}>Вакансії</a>
      </Link>
      <Link href="/">
        <a className={css.link}>Контакти</a>
      </Link>
      <Link href="/">
        <a className={css.link}>Усі категорії</a>
      </Link>
      <Link href="/">
        <a className={css.link}>ROZETKA.PL</a>
      </Link>
    </div>
  );
}
