import css from "./Basket.module.scss";
import { SlBasket } from "react-icons/sl";

export default function Basket({ setBasketPopUp }) {
  return (
    <div
      className={css.container}
      onClick={() => {
        setBasketPopUp(true);
      }}
    >
      <SlBasket className={css.logo} />
      <div className={css.link}>Кошик</div>
    </div>
  );
}
