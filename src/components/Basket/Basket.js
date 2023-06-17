import css from "./Basket.module.scss";
import cx from "classnames";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import CardProduct from "./CardProduct/CardProduct";
import CountOrder from "./CountOrder/CountOrder";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeIsBasket } from "../../store/modules/isBasketSlice";

export default function Basket() {
  const isBasket = useSelector((state) => state.isBasket.value);
  const basketObject = useSelector((state) => state.basketObject.value);
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
          <CardProduct
            basketObject={basketObject}
            isOpenDelete={isOpenDelete}
            setIsOpenDelete={setIsOpenDelete}
          />
          {/* <OrderDetails basketObject={basketObject} /> */}
          <CountOrder />
        </div>
      </div>
    </div>
  );
}
