/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import css from "./LogoBar.module.scss";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import {
  changeIsMobileMenuOpen,
  changeIsOverlayDisplayed,
} from "../../../store/modules/commonOpeningSlice";

export default function LogoBar() {
  const dispatch = useDispatch();
  return (
    <div className={css.logoBar}>
      <img
        className={css.logo}
        src="https://content2.rozetka.com.ua/widget_logotype/full/original/229862237.svg"
      />
      <div
        className={css.crossContainer}
        onClick={() => {
          dispatch(changeIsMobileMenuOpen(false));
          setTimeout(() => {
            dispatch(changeIsOverlayDisplayed(false));
          }, 700);
        }}
      >
        <RxCross2 className={css.exitCross} />
      </div>
    </div>
  );
}
