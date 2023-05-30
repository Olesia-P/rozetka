import css from "./Catalog.module.scss";
import { AiOutlineShop } from "react-icons/ai";

export default function Catalog() {
  return (
    <div className={css.container}>
      <AiOutlineShop className={css.logo} />
      <div className={css.header}>Каталог товарів</div>
    </div>
  );
}
