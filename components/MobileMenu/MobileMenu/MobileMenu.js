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
import PopUpAuthorizationFilling from "../PopUpFillings/PopUpAuthorizationFilling";
import PopUpCatalogFilling from "../PopUpFillings/PopUpCatalogFilling";
import PopUpBasketFilling from "../PopUpFillings/PopUpBasketFilling";
import PopUpCityChoiceFilling from "../PopUpFillings/PopUpCityChoiceFilling";
import PopUpWrap from "../PopUpWrap/PopUpWrap";

export default function MobileMenu({ setOpenedMobile, openedMobile }) {
  const [isPopUp, setIsPopUp] = useState(false);
  const [popUpType, setPopUpType] = useState("");

  const PopUp = () => {
    switch (popUpType) {
      case "basket":
        return PopUpWrap(PopUpBasketFilling, setIsPopUp);
      case "city choice":
        return PopUpWrap(PopUpCityChoiceFilling, setIsPopUp);
      case "authorization":
        return PopUpWrap(PopUpAuthorizationFilling, setIsPopUp);
      case "catalog":
        return PopUpWrap(PopUpCatalogFilling, setIsPopUp);
    }
  };

  return (
    <div>
      {!isPopUp && (
        <div className={css.container}>
          <div
            className={cx(css.overlay, openedMobile && css.openedOverlay)}
            onClick={() => {
              setOpenedMobile(false);
            }}
          ></div>
          <div
            className={cx(css.menu, css.scroll, openedMobile && css.openedMenu)}
          >
            <LogoHeader setOpenedMobile={setOpenedMobile} />
            <Authorization
              setIsPopUp={setIsPopUp}
              setPopUpType={setPopUpType}
            />
            <PrytulaFond />
            <Catalog setIsPopUp={setIsPopUp} setPopUpType={setPopUpType} />
            <ReferenceCenter />
            <Chat />
            <Basket setIsPopUp={setIsPopUp} setPopUpType={setPopUpType} />
            <ChooseLanguage />
            <ChooseCity setIsPopUp={setIsPopUp} setPopUpType={setPopUpType} />
            <CompanyInfo />
            <Help />
            <Services />
            <ForPartners />
            <DownloadApps />
            <SocialMedia />
          </div>
        </div>
      )}
      {isPopUp && <PopUp />}
    </div>
  );
}
