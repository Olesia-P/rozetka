import css from "./CartLink.module.scss";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { changeIsCartOpen } from "../../../store/modules/commonOpeningSlice";

export default function CartLink() {
  const dispatch = useDispatch();
  const { products } = useSelector(({ cart }) => cart);
  return (
    <div
      className={css.container}
      onClick={() => {
        dispatch(changeIsCartOpen(true));
      }}
    >
      <SlBasket className={css.logo} />
      <div className={css.link}>Кошик</div>
      <div className={css.itemsCounter}>{products.length}</div>
    </div>
  );
}
