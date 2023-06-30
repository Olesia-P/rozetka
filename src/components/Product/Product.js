/* eslint-disable @next/next/no-img-element */
import css from "./Product.module.scss";
import cx from "classnames";
import { SlBasket } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { addToCart, updateProductCost } from "../../store/modules/cartSlice";
import { numberWithSpaces } from "../../utils/functions";

export default function Product({ product }) {
  const dispatch = useDispatch();

  return (
    <div className={cx(css.productCard)}>
      <div className={css.imgContainer}>
        <img src={product.img} alt="product picture" />
      </div>
      <div className={css.name}>{product.name}</div>
      <div
        className={cx(css.oldPrice, product.oldPrice === 0 && css.noOldPrice)}
      >
        {numberWithSpaces(product.oldPrice)} ₴
      </div>
      <div
        className={cx(
          css.currentPrice,
          product.oldPrice === 0 && css.noDiscount
        )}
      >
        {numberWithSpaces(product.currentPrice)} ₴
      </div>
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
