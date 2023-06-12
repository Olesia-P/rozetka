import css from "./Authorization.module.scss";
import { BiUser } from "react-icons/bi";

export default function Authorization({ setAuthorizationPopUp }) {
  const callPopUp = () => {
    setAuthorizationPopUp(false);
  };
  return (
    <div className={css.container}>
      <div className={css.profileWrap}>
        <BiUser className={css.profile} />
      </div>
      <div className={css.entrance}>
        <div className={css.links}>
          <a onClick={callPopUp}>Вхід</a>
          <div> | </div>
          <a onClick={callPopUp}>Реєстрація</a>
        </div>
        <div className={css.caption}>
          Авторизуйтесь для отримання розширених можливостей
        </div>
      </div>
    </div>
  );
}
