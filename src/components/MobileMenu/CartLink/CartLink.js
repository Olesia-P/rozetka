import css from "./CartLink.module.scss";
import { SlBasket } from "react-icons/sl";

export default function CartLink({ setIsCartPopUp }) {
  return (
    <div
      className={css.container}
      onClick={() => {
        setIsCartPopUp(true);
      }}
    >
      <SlBasket className={css.logo} />
      <div className={css.link}>Кошик</div>
    </div>
  );
}
