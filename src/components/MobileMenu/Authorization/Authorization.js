import { useDispatch } from "react-redux";
import css from "./Authorization.module.scss";
import { BiUser } from "react-icons/bi";
import { changeIsAuthorizOpen } from "../../../store/modules/commonOpeningSlice";

export default function Authorization({}) {
  const dispatch = useDispatch();

  const callPopUp = () => {
    dispatch(changeIsAuthorizOpen(true));
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
