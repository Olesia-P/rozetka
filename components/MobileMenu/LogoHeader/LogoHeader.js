import css from "./LogoHeader.module.scss";
import { RxCross2 } from "react-icons/rx";

export default function LogoHeader() {
  return (
    <div className={css.logoBar}>
      <img
        className={css.logo}
        src="https://content2.rozetka.com.ua/widget_logotype/full/original/229862237.svg"
      />
      <RxCross2 className={css.exitCross} />
    </div>
  );
}
