import css from "./WelcomeBlock.module.scss";

export default function WelcomeBlock() {
  return (
    <div className={css.container}>
      <h3 className={css.header}>Ласкаво просимо!</h3>
      <p className={css.caption}>
        Увійдіть, щоб отримувати рекомендації, персональні бонуси і знижки.
      </p>
      <button className={css.btn}>Увійдіть в особистий кабінет</button>
    </div>
  );
}
