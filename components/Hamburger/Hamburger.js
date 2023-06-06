import css from "./Hamburger.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import cx from "classnames";

export default function Hamburger({ setOpenedMobile }) {
  return (
    <div className={cx(css.hamburgerWrap)}>
      <GiHamburgerMenu
        className={css.hamburger}
        onClick={() => {
          setOpenedMobile(true);
        }}
      />
    </div>
  );
}
