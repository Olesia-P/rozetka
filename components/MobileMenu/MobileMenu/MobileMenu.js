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
import { useState } from "react";
import PopUp from "../PopUp/PopUp";

export default function MobileMenu({ setOpenedMobile, openedMobile }) {
  const [isPopUp, setIsPopUp] = useState(false);
  const [popUpMessage, setPopUpMessage] = useState("");
  return (
    <div>
      {!isPopUp && (
        <div className={cx(css.overlay)}>
          <div
            className={cx(css.menu, css.scroll, openedMobile && css.openedMenu)}
          >
            <LogoHeader setOpenedMobile={setOpenedMobile} />
            <Authorization
              setIsPopUp={setIsPopUp}
              isPopUp={isPopUp}
              setPopUpMessage={setPopUpMessage}
            />
            <PrytulaFond />
            <Catalog
              setIsPopUp={setIsPopUp}
              isPopUp={isPopUp}
              setPopUpMessage={setPopUpMessage}
            />
            <ReferenceCenter />
            <Chat />
            <Basket
              setIsPopUp={setIsPopUp}
              isPopUp={isPopUp}
              setPopUpMessage={setPopUpMessage}
            />
            <ChooseLanguage />
            <ChooseCity
              setIsPopUp={setIsPopUp}
              isPopUp={isPopUp}
              setPopUpMessage={setPopUpMessage}
            />
            <CompanyInfo />
            <Help />
            <Services />
            <ForPartners />
            <DownloadApps />
            <SocialMedia />
          </div>
        </div>
      )}
      {isPopUp && <PopUp setIsPopUp={setIsPopUp} message={popUpMessage} />}
    </div>
  );
}
