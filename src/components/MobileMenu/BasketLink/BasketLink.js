import css from "./BasketLink.module.scss";
import { SlBasket } from "react-icons/sl";

export default function BasketLink({ setIsBasketPopUp }) {
  return (
    <div
      className={css.container}
      onClick={() => {
        setIsBasketPopUp(true);
      }}
    >
      <SlBasket className={css.logo} />
      <div className={css.link}>Кошик</div>
    </div>
  );
}
