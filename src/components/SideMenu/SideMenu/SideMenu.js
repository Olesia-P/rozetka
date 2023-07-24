import css from "./SideMenu.module.scss";
import CatalogList from "../CatalogList/CatalogList";
import MixedPurposeList from "../MixedPurposeList/MixedPurposeList";
import WelcomeBlock from "../WelcomeBlock/WelcomeBlock";
import DownloadApps from "../../MobileMenu/DownloadApps/DownloadApps";
import SocialMedia from "../../MobileMenu/SocialMedia/SocialMedia";
import MobileMenuList from "../../MobileMenu/MobileMenuList/MobileMenuList";
import Footer from "../../Footer/Footer";
import {
  companyInfo,
  help,
  forPartners,
  services,
} from "../../../utils/mobileMenuListObjects";

export default function SideMenu() {
  return (
    <>
      <div className={css.containerDesktop}>
        <CatalogList listType="desktop" />
        <MixedPurposeList />
        <WelcomeBlock />
        <DownloadApps header="Встановлюйте наші додатки" size="sideMenu" />
        <SocialMedia size="sideMenu" />
        <div className={css.menuList}>
          <MobileMenuList object={companyInfo} isAccordion={false} />
          <MobileMenuList object={help} isAccordion={false} />
          <MobileMenuList object={services} isAccordion={false} />
          <MobileMenuList object={forPartners} isAccordion={false} />
        </div>
        <Footer />
      </div>
      <div className={css.containerLaptop}>
        <CatalogList listType="laptop" />
      </div>
    </>
  );
}
