import css from "./CatalogList.module.scss";
import { catalogListArray } from "../../../utils/catalogListArray";

export default function CatalogList() {
  return (
    <div className={css.container}>
      {catalogListArray.map((element) => (
        <div key={element.caption} className={css.listItem}>
          <div className={css.icon}>{element.icon}</div>
          <div className={css.caption}>{element.caption}</div>
        </div>
      ))}
    </div>
  );
}
