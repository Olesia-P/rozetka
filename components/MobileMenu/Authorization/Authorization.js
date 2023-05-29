import css from "../Authorization/Authorization.module.scss";
import { BiUser } from "react-icons/bi";
import Link from "next/link";

export default function Authorization() {
  return (
    <div className={css.card}>
      <div className={css.profileWrap}>
        <BiUser className={css.profile} />
      </div>
      <div className={css.entrance}>
        <div className={css.links}>
          <Link href="/">
            <a>Вхід</a>
          </Link>
          <div> | </div>
          <Link href="/">
            <a>Реєстрація</a>
          </Link>
        </div>
        <div className={css.caption}>
          Авторизуйтесь для отримання розширених можливостей
        </div>
      </div>
    </div>
  );
}
