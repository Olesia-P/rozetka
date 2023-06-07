import React from "react";
import css from "./PopUpWrap.module.scss";

export default function PopUpWrap(PopUpFillingComponent, setPopUpState) {
  return (
    <div className={css.card}>
      <div className={css.title}>
        <PopUpFillingComponent />
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
