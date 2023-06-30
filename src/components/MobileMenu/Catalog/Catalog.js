import css from "./Catalog.module.scss";
import { AiOutlineShop } from "react-icons/ai";
import { changeIsCatalogOpen } from "../../../store/modules/commonOpeningSlice";
import { useDispatch } from "react-redux";

export default function Catalog({}) {
  const dispatch = useDispatch();
  const callPopUp = () => {
    dispatch(changeIsCatalogOpen(true));
  };
  return (
    <div className={css.container} onClick={callPopUp}>
      <AiOutlineShop className={css.logo} />
      <div className={css.header}>Каталог товарів</div>
    </div>
  );
}
