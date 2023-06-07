import css from "./Basket.module.scss";
import { SlBasket } from "react-icons/sl";

export default function Basket({ setIsPopUp, setPopUpType }) {
  return (
    <div
      className={css.container}
      onClick={() => {
        setIsPopUp(true);
        setPopUpType("basket");
      }}
    >
      <SlBasket className={css.logo} />
      <div className={css.link}>Кошик</div>
    </div>
  );
}
