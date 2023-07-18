import { useEffect, useState } from "react";
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
} from "../../../utils/mobileMenuListObjects";
import PopUpAuthorizationFilling from "../PopUpFillings/PopUpAuthorizationFilling";
import PopUpCatalogFilling from "../PopUpFillings/PopUpCatalogFilling";
import PopUpCityChoiceFilling from "../PopUpFillings/PopUpCityChoiceFilling";
import PopUpReferenceCenterFilling from "../PopUpFillings/PopUpReferenceCenterFilling";
import PopUpPrytulaFondFilling from "../PopUpFillings/PopUpPrytulaFondFilling";
import withPopUp from "../../../hocs/withPopUp/withPopUp";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  changeIsMobileMenuOpen,
  changeIsAuthorizOpen,
  changeIsCatalogOpen,
  changeIsOverlayDisplayed,
  changeIsReferenceCenterOpen,
  changeIsPrytulaFondOpen,
} from "../../../store/modules/commonOpeningSlice";

export default function MobileMenu() {
  const [isCityChoicePopUp, setIsCityChoicePopUp] = useState(false);
  // const [isOverlay, setIsOverlay] = useState(false);

  // useEffect(() => {
  //   isMobileMenuOpen
  //     ? setTimeout(() => {
  //         setIsOverlay(true);
  //       }, 300)
  //     : setTimeout(() => {
  //         setIsOverlay(false);
  //       }, 300);
  // }, [isMobileMenuOpen]);

  const {
    isMobileMenuOpen,
    isAuthorizOpen,
    isCatalogOpen,
    isOverlayDisplayed,
    isReferenceCenterOpen,
    isPrytulaFondOpen,
  } = useSelector(({ commonOpening }) => commonOpening);

  const dispatch = useDispatch();

  const PopUpCatalog = withPopUp(PopUpCatalogFilling);
  const PopUpAuthorizationPopUp = withPopUp(PopUpAuthorizationFilling);
  const PopUpCityChoice = withPopUp(PopUpCityChoiceFilling);
  const PopUpReferenceCenter = withPopUp(PopUpReferenceCenterFilling);
  const PopUpPrytulaFond = withPopUp(PopUpPrytulaFondFilling);

  return (
    <div>
      <div className={cx(css.container, isMobileMenuOpen && css.open)}>
        <div
          className={cx(
            css.overlay,
            !isOverlayDisplayed && css.displayNone
            // isOverlayDisplayed && css.displayBlock
          )}
          onClick={() => {
            dispatch(changeIsMobileMenuOpen(false));
            setTimeout(() => {
              dispatch(changeIsOverlayDisplayed(false));
            }, 700);
          }}
        ></div>
        <div className={cx(css.menu)}>
          <LogoBar />
          <Authorization />
          <PrytulaFond />
          <Catalog />
          <ReferenceCenter />
          <Chat />
          <CartLink />
          <ChooseLanguage />
          <ChooseCity setIsCityChoicePopUp={setIsCityChoicePopUp} />
          <MobileMenuList object={companyInfo} isAccordion={false} />
          <MobileMenuList object={help} isAccordion={false} />
          <MobileMenuList object={services} isAccordion={true} />
          <MobileMenuList object={forPartners} isAccordion={true} />
          <DownloadApps header="Завантажуйте наші додатки" size="mobileMenu" />
          <SocialMedia size="mobileMenu" />
        </div>
      </div>

      <PopUpCatalog
        isOpen={isCatalogOpen}
        onClose={() => {
          dispatch(changeIsCatalogOpen(false));
        }}
      />
      <PopUpAuthorizationPopUp
        isOpen={isAuthorizOpen}
        onClose={() => dispatch(changeIsAuthorizOpen(false))}
      />
      <PopUpCityChoice
        isOpen={isCityChoicePopUp}
        onClose={() => setIsCityChoicePopUp(false)}
      />
      <PopUpReferenceCenter
        isOpen={isReferenceCenterOpen}
        onClose={() => dispatch(changeIsReferenceCenterOpen(false))}
      />
      <PopUpPrytulaFond
        isOpen={isPrytulaFondOpen}
        onClose={() => dispatch(changeIsPrytulaFondOpen(false))}
      />
    </div>
  );
}
