import css from "./Authorization.module.scss";
import { BiUser } from "react-icons/bi";

export default function Authorization() {
  return (
    <div className={css.container}>
      <div className={css.profileWrap}>
        <BiUser className={css.profile} />
      </div>
      <div className={css.entrance}>
        <div className={css.links}>
          <a>Вхід</a>
          <div> | </div>
          <a>Реєстрація</a>
        </div>
        <div className={css.caption}>
          Авторизуйтесь для отримання розширених можливостей
        </div>
      </div>
    </div>
  );
}
