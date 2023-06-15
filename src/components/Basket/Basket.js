import css from "./Basket.module.scss";
import cx from "classnames";
import { RxCross2 } from "react-icons/rx";
import CardProduct from "./CardProduct/CardProduct";
import OrderDetails from "./OrderDetails/OrderDetails";
import CountOrder from "./CountOrder/CountOrder";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeIsBasket } from "../../store/modules/isBasketSlice";

export default function Basket() {
  const isBasket = useSelector((state) => state.isBasket.value);
  const dispatch = useDispatch();
  console.log(isBasket);
  return (
    <div className={cx(css.container, isBasket && css.opened)}>
      <div className={css.header}>
        <div className={css.title}>Кошик</div>
        <div
          className={css.crossContainer}
          onClick={() => {
            dispatch(changeIsBasket(false));
          }}
        >
          <RxCross2 className={css.cross} />
        </div>
      </div>
      <div className={cx(css.contentContainer, css.scroll)}>
        <CardProduct />
        <OrderDetails />
        <CountOrder />
      </div>
    </div>
  );
}
