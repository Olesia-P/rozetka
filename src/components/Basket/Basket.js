import css from "./Basket.module.scss";
import cx from "classnames";
import { RxCross2 } from "react-icons/rx";
import CardProduct from "./CardProduct/CardProduct";
import OrderDetails from "./OrderDetails/OrderDetails";
import CountOrder from "./CountOrder/CountOrder";

export default function Basket() {
  return (
    <div className={css.container}>
      <div className={css.header}>
        <div className={css.title}>Кошик</div>
        <div className={css.crossContainer}>
          <RxCross2 className={css.cross} />
        </div>
      </div>
      <div className={cx(css.contentContainer, css.scroll)}>
        <CardProduct />
        <OrderDetails />
        <CountOrder />
      </div>
    </div>
  );
}
