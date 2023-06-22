import { useState } from "react";
import css from "./MobileMenu.module.scss";
import cx from "classnames";
import LogoBar from "../LogoBar/LogoBar.js";
import Authorization from "../Authorization/Authorization.js";
import PrytulaFond from "../PrytulaFond/PrytulaFond";
import Catalog from "../Catalog/Catalog";
import ReferenceCenter from "../ReferenceСenter/ReferenceCenter";
import Chat from "../Chat/Chat";
import CartLink from "../CartLink/CartLink";
import ChooseLanguage from "../ChooseLanguage/ChooseLanguage";
import ChooseCity from "../ChooseCity/ChooseCity";
import DownloadApps from "../DownloadApps/DownloadApps";
import SocialMedia from "../SocialMedia/SocialMedia";
import MobileMenuList from "../MobileMenuList/MobileMenuList";
import {
  companyInfo,
  help,
  forPartners,
  services,
} from "../../../utils/MobileMenuListObjects";
import PopUpAuthorizationFilling from "../PopUpFillings/PopUpAuthorizationFilling";
import PopUpCatalogFilling from "../PopUpFillings/PopUpCatalogFilling";
import PopUpCartFilling from "../PopUpFillings/PopUpCartFilling";
import PopUpCityChoiceFilling from "../PopUpFillings/PopUpCityChoiceFilling";
import withPopUp from "../../../hocs/withPopUp/withPopUp";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeIsMobileMenuOpen } from "../../../store/modules/commonOpeningSlice";

export default function MobileMenu() {
  const [isAuthorizationPopUp, setIsAuthorizationPopUp] = useState(false);
  const [isCartPopUp, setIsCartPopUp] = useState(false);
  const [isCatalogPopUp, setIsCatalogPopUp] = useState(false);
  const [isCityChoicePopUp, setIsCityChoicePopUp] = useState(false);

  const { isMobileMenuOpen } = useSelector(
    ({ commonOpening }) => commonOpening
  );
  const dispatch = useDispatch();

  const PopUpCart = withPopUp(PopUpCartFilling);
  const PopUpCatalog = withPopUp(PopUpCatalogFilling);
  const PopUpAuthorizationPopUp = withPopUp(PopUpAuthorizationFilling);
  const PopUpCityChoice = withPopUp(PopUpCityChoiceFilling);

  return (
    <div>
      <div className={cx(css.container, isMobileMenuOpen && css.open)}>
        <div
          className={cx(css.overlay)}
          onClick={() => {
            dispatch(changeIsMobileMenuOpen(false));
          }}
        ></div>
        <div className={cx(css.menu, css.scroll)}>
          <LogoBar />
          <Authorization setIsAuthorizationPopUp={setIsAuthorizationPopUp} />
          <PrytulaFond />
          <Catalog setIsCatalogPopUp={setIsCatalogPopUp} />
          <ReferenceCenter />
          <Chat />
          <CartLink setIsCartPopUp={setIsCartPopUp} />
          <ChooseLanguage />
          <ChooseCity setIsCityChoicePopUp={setIsCityChoicePopUp} />
          <MobileMenuList object={companyInfo} isAccordion={false} />
          <MobileMenuList object={help} isAccordion={false} />
          <MobileMenuList object={services} isAccordion={true} />
          <MobileMenuList object={forPartners} isAccordion={true} />
          <DownloadApps />
          <SocialMedia />
        </div>
      </div>
      <PopUpCart open={isCartPopUp} setOpenState={setIsCartPopUp} />
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
