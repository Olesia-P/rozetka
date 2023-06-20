import css from "./Basket.module.scss";
import cx from "classnames";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import CardProduct from "./CardProduct/CardProduct";
import CountOrder from "./CountOrder/CountOrder";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeIsCart } from "../../store/modules/isCartSlice";

export default function Basket() {
  const isCart = useSelector((state) => state.isCart.value);
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const [isOpenDelete, setIsOpenDelete] = useState(false);

  return (
    <div>
      <div
        className={cx(css.overlay, isOpenDelete && css.openDelete)}
        onClick={() => {
          if (isOpenDelete) {
            setIsOpenDelete(false);
          }
        }}
      ></div>
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
          <CardProduct
            cart={cart}
            isOpenDelete={isOpenDelete}
            setIsOpenDelete={setIsOpenDelete}
          />

          <CountOrder />
        </div>
      </div>
    </div>
  );
}
