import css from "./OrderDetails.module.scss";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function OrderDetails() {
  return (
    <div className={css.orderDetailsCard}>
      <div className={css.counterContainer}>
        <div className={css.counterBtn}>
          <AiOutlineMinus className={css.minusBtn} />
        </div>
        <div className={css.counter}>1</div>
        <div className={css.counterBtn}>
          <AiOutlinePlus className={css.plusBtn} />
        </div>
      </div>
      <div className={css.priceContainer}>
        <div className={css.oldPrice}>22 499 ₴</div>
        <div className={css.newPrice}>12 999 ₴</div>
      </div>
    </div>
  );
}
