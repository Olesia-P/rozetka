/* eslint-disable @next/next/no-img-element */
import css from "./Cart.module.scss";
import cx from "classnames";
import { RxCross2 } from "react-icons/rx";
import CardProduct from "./CardProduct/CardProduct";
import CountOrder from "./CountOrder/CountOrder";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeIsCartOpen } from "../../store/modules/commonOpeningSlice";

export default function Cart() {
  const { isCartOpen } = useSelector(({ commonOpening }) => commonOpening);
  const { products } = useSelector(({ cart }) => cart);

  const dispatch = useDispatch();

  return (
    <>
      <div
        className={cx(css.overlay, isCartOpen && css.opened)}
        onClick={() => {
          dispatch(changeIsCartOpen(false));
        }}
      ></div>
      <div className={cx(css.borderRadiusContainer, isCartOpen && css.opened)}>
        <div className={cx(css.container)}>
          <div className={css.header}>
            <div className={css.title}>Кошик</div>
            <div
              className={css.crossContainer}
              onClick={() => {
                dispatch(changeIsCartOpen(false));
              }}
            >
              <RxCross2 className={css.cross} />
            </div>
          </div>

          {products.length > 0 ? (
            <div className={cx(css.contentContainer)}>
              <CardProduct />
              <CountOrder />
            </div>
          ) : (
            <div className={cx(css.contentContainer, css.emptyCart)}>
              <img src="/modal-cart-dummy.svg" alt="empty cart" />
              <h4>Кошик порожній</h4>
              <p>Але це ніколи не пізно виправити :)</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
