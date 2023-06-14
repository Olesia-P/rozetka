import css from "./Authorization.module.scss";
import { BiUser } from "react-icons/bi";

export default function Authorization({ setIsAuthorizationPopUp }) {
  const callPopUp = () => {
    setIsAuthorizationPopUp(true);
  };
  return (
    <div className={css.container}>
      <div className={css.profileWrap}>
        <BiUser className={css.profile} onClick={callPopUp} />
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
