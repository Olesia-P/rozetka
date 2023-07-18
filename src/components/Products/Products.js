/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import css from "./Products.module.scss";
import cx from "classnames";
import { SlBasket } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { addToCart, updateProductCost } from "../../store/modules/cartSlice";
import { numberWithSpaces } from "../../utils/functions";
import { useEffect, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function Product({ products, header }) {
  const dispatch = useDispatch();
  const [treatedProductsArray, setTreatedProductsArray] = useState([]);

  const isLaptop = useMediaQuery(1200);
  const isMobile = useMediaQuery(768);

  useEffect(() => {
    if (isLaptop) {
      setTreatedProductsArray(products.slice(0, 4));
    }

    if (isMobile) {
      setTreatedProductsArray(products.slice(0, 2));
    }
    if (!isLaptop && !isMobile) {
      setTreatedProductsArray(products);
    }
  }, [isMobile, isLaptop]);

  return (
    <div className={css.container}>
      <div className={css.header}>{header}</div>
      <div className={css.containerProducts}>
        {treatedProductsArray.map((element) => (
          <div className={cx(css.productCard)} key={element.id}>
            <div className={css.imgContainer}>
              <img src={element.img} alt="product picture" />
            </div>
            <div className={css.name}>{element.name}</div>
            {element.oldPrice > 0 && (
              <div className={css.oldPrice}>
                {numberWithSpaces(element.oldPrice)} ₴
              </div>
            )}
            {element.oldPrice === 0 && (
              <div className={css.noOldPrice}>{""}</div>
            )}

            <div
              className={cx(
                css.currentPrice,
                element.oldPrice === 0 && css.noDiscount
              )}
            >
              {numberWithSpaces(element.currentPrice)} ₴
            </div>
            <div
              className={cx(css.btn)}
              onClick={() => {
                dispatch(addToCart(element));
                dispatch(updateProductCost(element.id));
              }}
            >
              <SlBasket className={css.cart} /> Купити
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
