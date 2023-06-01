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
import CompanyInfo from "../CompanyInfo/CompanyInfo";
import Help from "../Help/Help";
import Services from "../Services/Services";
import ForPartners from "../ForPartners/ForPartners";
import DownloadApps from "../DownloadApps/DownloadApps";
import SocialMedia from "../SocialMedia/SocialMedia";
import { GiHamburgerMenu } from "react-icons/gi";

export default function MobileMenu({}) {
  return (
    <div className={cx(css.container)}>
      <div className={cx(css.overlay)}>
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
          <CompanyInfo />
          <Help />
          <Services />
          <ForPartners />
          <DownloadApps />
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}

//
