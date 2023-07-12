import css from "./CatalogList.module.scss";
import { catalogListArray } from "../../../utils/catalogListArray";
import { FiChevronRight } from "react-icons/fi";

export default function CatalogList({ listType }) {
  return (
    <div>
      {listType === "desktop" && (
        <div className={css.containerDesktop}>
          {catalogListArray.map((element) => (
            <div key={element.caption} className={css.listItem}>
              <div className={css.icon}>{element.icon}</div>
              <div className={css.caption}>{element.caption}</div>
            </div>
          ))}
        </div>
      )}
      {listType === "laptop" && (
        <div>
          <div className={css.header}>Каталог товарів</div>
          <div className={css.containerLaptop}>
            {catalogListArray.map((element) => (
              <div key={element.caption} className={css.listItem}>
                <div className={css.icon}>{element.icon}</div>
                <div className={css.caption}>{element.caption}</div>
                <FiChevronRight className={css.chevron} />
              </div>
            ))}
            <div className={css.listItem}>
              <div className={css.icon}></div>
              <div className={css.caption}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
