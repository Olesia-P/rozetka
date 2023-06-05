import React from "react";
import css from "./PopUp.module.scss";

export default function PopUp({ setIsPopUp, message }) {
  return (
    <div className={css.card}>
      <div className={css.title}>{message}</div>
      <div
        className={css.button}
        onClick={() => {
          setIsPopUp(false);
        }}
      >
        X
      </div>
    </div>
  );
}
