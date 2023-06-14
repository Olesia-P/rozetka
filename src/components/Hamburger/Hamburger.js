import css from "./Hamburger.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import cx from "classnames";
import { useDispatch } from "react-redux";
import { changeMobile } from "../../store/modules/isMobileSlice";

export default function Hamburger() {
  const dispatch = useDispatch();
  return (
    <div className={cx(css.hamburgerWrap)}>
      <AiOutlineMenu
        className={css.hamburger}
        onClick={() => {
          dispatch(changeMobile(true));
        }}
      />
    </div>
  );
}
