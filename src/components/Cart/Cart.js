import css from "./Cart.module.scss";
import cx from "classnames";
import { RxCross2 } from "react-icons/rx";
import CardProduct from "./CardProduct/CardProduct";
import CountOrder from "./CountOrder/CountOrder";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeIsCart } from "../../store/modules/isCartSlice";

export default function Cart() {
  const isCart = useSelector((state) => state.isCart.value);
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={cx(css.container, isCart && css.opened)}>
        <div className={css.header}>
          <div className={css.title}>Кошик</div>
          <div
            className={css.crossContainer}
            onClick={() => {
              dispatch(changeIsCart(false));
            }}
          >
            <RxCross2 className={css.cross} />
          </div>
        </div>
        <div className={cx(css.contentContainer, css.scroll)}>
          <CardProduct cart={cart} />
          <CountOrder />
        </div>
      </div>
    </div>
  );
}
