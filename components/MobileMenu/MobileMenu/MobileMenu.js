import css from "../MobileMenu/MobileMenu.module.scss";
import LogoHeader from "../LogoHeader/LogoHeader.js";
import Authorization from "../Authorization/Authorization.js";

export default function MobileMenu() {
  return (
    <div className={css.overlay}>
      <div className={css.menu}>
        <LogoHeader />
        <Authorization />
      </div>
    </div>
  );
}

//
