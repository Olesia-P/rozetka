import css from "./SideMenu.module.scss";
import CatalogList from "../CatalogList/CatalogList";
import MixedPurposeList from "../MixedPurposeList/MixedPurposeList";
import WelcomeBlock from "../WelcomeBlock/WelcomeBlock";
import DownloadApps from "../../MobileMenu/DownloadApps/DownloadApps";

export default function SideMenu() {
  return (
    <div className={css.container}>
      <CatalogList />
      <MixedPurposeList />
      <WelcomeBlock />
      <div className={css.downApps}>
        <DownloadApps header="Встановлюйте наші додатки" />
      </div>
    </div>
  );
}
