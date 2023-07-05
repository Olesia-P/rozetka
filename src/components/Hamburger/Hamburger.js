import css from "./Hamburger.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import cx from "classnames";
import { useDispatch } from "react-redux";
import {
  changeIsMobileMenuOpen,
  changeIsOverlayDisplayed,
} from "../../store/modules//commonOpeningSlice";

export default function Hamburger() {
  const dispatch = useDispatch();
  return (
    <div className={cx(css.hamburgerWrap)}>
      <AiOutlineMenu
        className={css.hamburger}
        onClick={() => {
          dispatch(changeIsMobileMenuOpen(true));
          dispatch(changeIsOverlayDisplayed(true));
        }}
      />
    </div>
  );
}
