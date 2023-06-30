import css from "./SideMenu.module.scss";
import CatalogList from "../CatalogList/CatalogList";

export default function SideMenu() {
  return (
    <div className={css.container}>
      <CatalogList />
    </div>
  );
}
