import css from "./LogoHeader.module.scss";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { changeMobile } from "../../../store/modules/isMobileSlice";

export default function LogoHeader() {
  const dispatch = useDispatch();
  return (
    <div className={css.logoBar}>
      <img
        className={css.logo}
        src="https://content2.rozetka.com.ua/widget_logotype/full/original/229862237.svg"
      />
      <div
        className={css.crossContainer}
        onClick={() => dispatch(changeMobile(false))}
      >
        <RxCross2 className={css.exitCross} />
      </div>
    </div>
  );
}
