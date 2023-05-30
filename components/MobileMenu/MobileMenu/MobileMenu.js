import css from "./MobileMenu.module.scss";
import cx from "classnames";
import LogoHeader from "../LogoHeader/LogoHeader.js";
import Authorization from "../Authorization/Authorization.js";
import PrytulaFond from "../PrytulaFond/PrytulaFond";
import Catalog from "../Catalog/Catalog";
import ReferenceCenter from "../ReferenceСenter/ReferenceCenter";
import Chat from "../Chat/Chat";
import Basket from "../Basket/Basket";
import ChooseLanguage from "../ChooseLanguage/ChooseLanguage";
import ChooseCity from "../ChooseCity/ChooseCity";

export default function MobileMenu() {
  return (
    <div className={css.overlay}>
      <div className={cx(css.menu, css.scroll)}>
        <LogoHeader />
        <Authorization />
        <PrytulaFond />
        <Catalog />
        <ReferenceCenter />
        <Chat />
        <Basket />
        <ChooseLanguage />
        <ChooseCity />
      </div>
    </div>
  );
}

//
