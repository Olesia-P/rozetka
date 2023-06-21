import css from "./CountOrder.module.scss";
import { useSelector } from "react-redux";
import { countCost } from "../../../store/modules/cartSlice";
import { useDispatch } from "react-redux";

export default function CountOrder() {
  const dispatch = useDispatch();
  const sum = dispatch(countCost());
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
