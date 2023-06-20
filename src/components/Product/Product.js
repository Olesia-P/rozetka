import css from "./Product.module.scss";
import cx from "classnames";
import { SlBasket } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/modules/cartSlice";
import { addToCost } from "../../store/modules/costSlice";
import { useSelector } from "react-redux";

export default function Product({ product }) {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.value);
  const cost = useSelector((state) => state.cost.value);
  console.log(cart);

  return (
    <div className={cx(css.productCard, "mobile-flex")}>
      <div className={css.imgContainer}>
        <img src={product.img} />
      </div>
      <div className={css.name}>{product.name}</div>
      <div className={css.oldPrice}>{product.oldPrice} ₴</div>
      <div className={css.currentPrice}>{product.currentPrice} ₴</div>
      <div
        className={cx(css.btn)}
        onClick={() => {
          dispatch(addToCart(product));

          // dispatch(addToCost(product1.currentPriceInt * product1.quantity));
        }}
      >
        <SlBasket className={css.cart} /> Купити
      </div>
    </div>
  );
}
