import css from "./ChooseCity.module.scss";
import { FiChevronRight } from "react-icons/fi";

export default function ChooseCity({ setIsPopUp, setPopUpMessage }) {
  return (
    <div className={css.container}>
      <div className={css.caption}>Місто</div>
      <div
        className={css.cityWrap}
        onClick={() => {
          setIsPopUp(true);
          setPopUpMessage("This is city choice page");
        }}
      >
        <div className={css.city}>Київ</div>
        <FiChevronRight className={css.chevron} />
      </div>
      <div></div>
    </div>
  );
}
