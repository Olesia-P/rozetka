import css from "./Product.module.scss";
import cx from "classnames";
import { SlBasket } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { addToCart, updateProductCost } from "../../store/modules/cartSlice";
import { useSelector } from "react-redux";

export default function Product({ product }) {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.value);

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
          dispatch(updateProductCost(product.id));
        }}
      >
        <SlBasket className={css.cart} /> Купити
      </div>
    </div>
  );
}
