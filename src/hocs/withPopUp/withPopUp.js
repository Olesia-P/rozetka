import React from "react";
import css from "./withPopUp.module.scss";

const withPopUp = (Component) => (props) => {
  return props.open ? (
    <div className={css.card}>
      <div className={css.title}>
        <Component />
      </div>
      <div
        className={css.button}
        onClick={() => {
          props.setOpenState(false);
        }}
      >
        X
      </div>
    </div>
  ) : (
    <></>
  );
};

export default withPopUp;
