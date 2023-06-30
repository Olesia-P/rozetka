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
import PopUpCityChoiceFilling from "../PopUpFillings/PopUpCityChoiceFilling";
import withPopUp from "../../../hocs/withPopUp/withPopUp";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  changeIsMobileMenuOpen,
  changeIsAuthorizOpen,
  changeIsCatalogOpen,
} from "../../../store/modules/commonOpeningSlice";

export default function MobileMenu() {
  const [isCityChoicePopUp, setIsCityChoicePopUp] = useState(false);

  const { isMobileMenuOpen, isAuthorizOpen, isCatalogOpen } = useSelector(
    ({ commonOpening }) => commonOpening
  );

  const dispatch = useDispatch();

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
          <DownloadApps header="Завантажуйте наші додатки" />
          <SocialMedia />
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
    </div>
  );
}
