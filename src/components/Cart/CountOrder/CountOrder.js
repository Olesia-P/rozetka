import css from "./CountOrder.module.scss";
import { useSelector } from "react-redux";

export default function CountOrder() {
  const cost = useSelector((state) => state.cost.value);
  const initialValue = 0;
  const sum = cost.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  return (
    <div className={css.containerCount}>
      <div className={css.card}>
        <div className={css.receiptSum}>
          <div className={css.title}>Разом</div>
          <div className={css.sum}>{sum}₴</div>
        </div>
        <div className={css.submitBtnContainer}>
          <div className={css.submitBtn}>Оформити замовлення</div>
        </div>
      </div>
    </div>
  );
}
