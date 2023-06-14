import css from "./Catalog.module.scss";
import { AiOutlineShop } from "react-icons/ai";

export default function Catalog({ setIsCatalogPopUp }) {
  const callPopUp = () => {
    setIsCatalogPopUp(true);
  };
  return (
    <div className={css.container} onClick={callPopUp}>
      <AiOutlineShop className={css.logo} />
      <div className={css.header}>Каталог товарів</div>
    </div>
  );
}
