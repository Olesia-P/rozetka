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
import DownloadApps from "../DownloadApps/DownloadApps";
import SocialMedia from "../SocialMedia/SocialMedia";
import { useState } from "react";
import PopUpAuthorizationFilling from "../PopUpFillings/PopUpAuthorizationFilling";
import PopUpCatalogFilling from "../PopUpFillings/PopUpCatalogFilling";
import PopUpBasketFilling from "../PopUpFillings/PopUpBasketFilling";
import PopUpCityChoiceFilling from "../PopUpFillings/PopUpCityChoiceFilling";
import withPopUp from "../withPopUp/withPopUp";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeMobile } from "../../../store/modules/isMobileSlice.js";
import MenuList from "../MenuList/MenuList";

export default function MobileMenu() {
  const [isAuthorizationPopUp, setIsAuthorizationPopUp] = useState(false);
  const [isBasketPopUp, setIsBasketPopUp] = useState(false);
  const [isCatalogPopUp, setIsCatalogPopUp] = useState(false);
  const [isCityChoicePopUp, setIsCityChoicePopUp] = useState(false);

  const isMobile = useSelector((state) => state.isMobile.value);
  const dispatch = useDispatch();

  const PopUpBasket = withPopUp(PopUpBasketFilling);
  const PopUpCatalog = withPopUp(PopUpCatalogFilling);
  const PopUpAuthorizationPopUp = withPopUp(PopUpAuthorizationFilling);
  const PopUpCityChoice = withPopUp(PopUpCityChoiceFilling);

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
          <Authorization setIsAuthorizationPopUp={setIsAuthorizationPopUp} />
          <PrytulaFond />
          <Catalog setIsCatalogPopUp={setIsCatalogPopUp} />
          <ReferenceCenter />
          <Chat />
          <Basket setIsBasketPopUp={setIsBasketPopUp} />
          <ChooseLanguage />
          <ChooseCity setIsCityChoicePopUp={setIsCityChoicePopUp} />
          <MenuList objectName="companyInfo" isAccordion={false} />
          <MenuList objectName="help" isAccordion={false} />
          <MenuList objectName="services" isAccordion={true} />
          <MenuList objectName="forPartners" isAccordion={true} />
          <DownloadApps />
          <SocialMedia />
        </div>
      </div>
      <PopUpBasket open={isBasketPopUp} setOpenState={setIsBasketPopUp} />
      <PopUpCatalog open={isCatalogPopUp} setOpenState={setIsCatalogPopUp} />
      <PopUpAuthorizationPopUp
        open={isAuthorizationPopUp}
        setOpenState={setIsAuthorizationPopUp}
      />
      <PopUpCityChoice
        open={isCityChoicePopUp}
        setOpenState={setIsCityChoicePopUp}
      />
    </div>
  );
}
