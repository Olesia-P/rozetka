/* eslint-disable @next/next/no-img-element */
import { useDispatch } from "react-redux";
import css from "./PrytulaFond.module.scss";
import { FiChevronRight } from "react-icons/fi";
import { changeIsPrytulaFondOpen } from "../../../store/modules/commonOpeningSlice";

export default function PrytulaFond() {
  const dispatch = useDispatch();
  return (
    <div
      className={css.container}
      onClick={() => dispatch(changeIsPrytulaFondOpen(true))}
    >
      <img
        className={css.logo}
        alt="rozetka logo"
        src="https://xl-static.rozetka.com.ua/assets/img/design/logos/prytula_foundation.svg"
      />

      <div className={css.link}>ФОНД СЕРГІЯ ПРИТУЛИ</div>
      <div className={css.chevronContainer}>
        <FiChevronRight className={css.chevron} />
      </div>
    </div>
  );
}
