import css from "./Catalog.module.scss";
import { AiOutlineShop } from "react-icons/ai";

export default function Catalog({ setIsPopUp, setPopUpMessage }) {
  const callPopUp = () => {
    setIsPopUp(true);
    setPopUpMessage("This is catalog page");
  };
  return (
    <div className={css.container} onClick={callPopUp}>
      <AiOutlineShop className={css.logo} />
      <div className={css.header}>Каталог товарів</div>
    </div>
  );
}
