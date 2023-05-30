import css from "./Basket.module.scss";
import { SlBasket } from "react-icons/sl";

export default function Basket() {
  return (
    <div className={css.container}>
      <SlBasket className={css.logo} />
      <div className={css.link}>Кошик</div>
    </div>
  );
}
