import css from "./CountOrder.module.scss";
import { useSelector } from "react-redux";
import { countOrderCost } from "../../../utils/functions";
import { numberWithSpaces } from "../../../utils/functions";

export default function CountOrder() {
  const { products } = useSelector(({ cart }) => cart);
  const sum = countOrderCost(products);
  return (
    <div className={css.containerCount}>
      <div className={css.card}>
        <div className={css.receiptSum}>
          <div className={css.title}>Разом</div>
          <div className={css.sum}>{numberWithSpaces(sum)}₴</div>
        </div>
        <div className={css.submitBtnContainer}>
          <div className={css.submitBtn}>Оформити замовлення</div>
        </div>
      </div>
    </div>
  );
}
