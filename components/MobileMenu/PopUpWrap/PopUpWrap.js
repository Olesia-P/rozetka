import React from "react";
import css from "./PopUpWrap.module.scss";

export default function PopUpWrap({ Component, setPopUpState }) {
  return (
    <div className={css.card}>
      <div className={css.title}>
        <Component />
      </div>
      <div
        className={css.button}
        onClick={() => {
          setPopUpState(false);
        }}
      >
        X
      </div>
    </div>
  );
}
