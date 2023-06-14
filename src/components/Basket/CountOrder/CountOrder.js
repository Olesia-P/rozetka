import css from "./CountOrder.module.scss";

export default function CountOrder() {
  return (
    <div className={css.container}>
      <div className={css.card}>
        <div className={css.receiptSum}>
          <div className={css.title}>Разом</div>
          <div className={css.sum}>12 999₴</div>
        </div>
        <div className={css.submitBtnContainer}>
          <div className={css.submitBtn}>Оформити замовлення</div>
        </div>
      </div>
    </div>
  );
}
