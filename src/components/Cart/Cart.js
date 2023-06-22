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

  const dispatch = useDispatch();

  return (
    <div>
      <div className={cx(css.container, isCartOpen && css.opened)}>
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
        <div className={cx(css.contentContainer, css.scroll)}>
          <CardProduct />
          <CountOrder />
        </div>
      </div>
    </div>
  );
}
