import css from "./Basket.module.scss";
import { SlBasket } from "react-icons/sl";

export default function Basket({ setIsPopUp, setPopUpMessage }) {
  return (
    <div
      className={css.container}
      onClick={() => {
        setIsPopUp(true);
        setPopUpMessage("This is basket page");
      }}
    >
      <SlBasket className={css.logo} />
      <div className={css.link}>Кошик</div>
    </div>
  );
}
