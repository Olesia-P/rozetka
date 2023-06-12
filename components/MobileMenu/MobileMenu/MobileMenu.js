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
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeMobile } from "../../features/isMobileSlice";

export default function MobileMenu() {
  // const [isPopUp, setIsPopUp] = useState(false);
  // const [popUpType, setPopUpType] = useState("");
  const [authorizationPopUp, setAuthorizationPopUp] = useState(false);
  const [basketPopUp, setBasketPopUp] = useState(false);
  const [catalogPopUp, setCatalogPopUp] = useState(false);
  const [cityChoicePopUp, setCityChoicePopUp] = useState(false);

  // const PopUp = () => {
  //   switch (popUpType) {
  //     case "basket":
  //       return PopUpWrap(PopUpBasketFilling, setIsPopUp);
  //     case "city choice":
  //       return PopUpWrap(PopUpCityChoiceFilling, setIsPopUp);
  //     case "authorization":
  //       return PopUpWrap(PopUpAuthorizationFilling, setIsPopUp);
  //     case "catalog":
  //       return PopUpWrap(PopUpCatalogFilling, setIsPopUp);
  //   }
  // };

  // const PopUp = PopUpWrap();

  const isMobile = useSelector((state) => state.isMobile.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={cx(css.container, isMobile && css.open)}>
        <div
          className={cx(css.overlay)}
          onClick={() => {
            dispatch(changeMobile(false));
          }}
        ></div>
        <div className={cx(css.menu, css.scroll)}>
          <LogoHeader />
          <Authorization setAuthorizationPopUp={setAuthorizationPopUp} />
          <PrytulaFond />
          <Catalog setCatalogPopUp={setCatalogPopUp} />
          <ReferenceCenter />
          <Chat />
          <Basket setBasketPopUp={setBasketPopUp} />
          <ChooseLanguage />
          <ChooseCity setCityChoicePopUp={setCityChoicePopUp} />
          <CompanyInfo />
          <Help />
          <Services />
          <ForPartners />
          <DownloadApps />
          <SocialMedia />
        </div>
      </div>

      {/* <PopUp
        setPopUpState={setBasketPopUp}
        popUpState={basketPopUp}
        component={PopUpBasketFilling}
      /> */}
    </div>
  );
}
