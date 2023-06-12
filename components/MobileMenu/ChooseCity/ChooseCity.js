import css from "./ChooseCity.module.scss";
import { FiChevronRight } from "react-icons/fi";

export default function ChooseCity({ setCityChoicePopUp }) {
  return (
    <div className={css.container}>
      <div className={css.caption}>Місто</div>
      <div
        className={css.cityWrap}
        onClick={() => {
          setCityChoicePopUp(true);
        }}
      >
        <div className={css.city}>Київ</div>
        <FiChevronRight className={css.chevron} />
      </div>
      <div></div>
    </div>
  );
}
