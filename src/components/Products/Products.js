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
  const [treatedProductsArray, setTreatedProductsArray] = useState(products);

  const isMobile = useMediaQuery(768);
  const isLaptop = useMediaQuery(1200);

  useEffect(() => {
    if (isMobile) {
      setTreatedProductsArray(products.slice(0, 4));
    }

    if (isLaptop) {
      setTreatedProductsArray(products.slice(0, 2));
    }
  }, [isMobile, isLaptop]);

  console.log(treatedProductsArray);
  return (
    <div className={css.container}>
      <div className={css.header}>{header}</div>
      <div className={css.containerProducts}>
        {treatedProductsArray?.map((element, index) => (
          <div
            className={cx(css.productCard)}
            key={treatedProductsArray[index].id}
          >
            <div className={css.imgContainer}>
              <img
                src={treatedProductsArray[index].img}
                alt="product picture"
              />
            </div>
            <div className={css.name}>{treatedProductsArray[index].name}</div>
            {treatedProductsArray[index].oldPrice > 0 && (
              <div className={css.oldPrice}>
                {numberWithSpaces(treatedProductsArray[index].oldPrice)} ₴
              </div>
            )}
            {treatedProductsArray[index].oldPrice === 0 && (
              <div className={css.noOldPrice}>{""}</div>
            )}

            <div
              className={cx(
                css.currentPrice,
                treatedProductsArray[index].oldPrice === 0 && css.noDiscount
              )}
            >
              {numberWithSpaces(treatedProductsArray[index].currentPrice)} ₴
            </div>
            <div
              className={cx(css.btn)}
              onClick={() => {
                dispatch(addToCart(treatedProductsArray[index]));
                dispatch(updateProductCost(treatedProductsArray[index].id));
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
