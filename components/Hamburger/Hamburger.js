import css from "./Hamburger.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import cx from "classnames";
import { useDispatch } from "react-redux";
import { changeMobile } from "../../store/modules/isMobileSlice";

export default function Hamburger() {
  const dispatch = useDispatch();
  return (
    <div className={cx(css.hamburgerWrap)}>
      <GiHamburgerMenu
        className={css.hamburger}
        onClick={() => {
          dispatch(changeMobile(true));
        }}
      />
    </div>
  );
}
