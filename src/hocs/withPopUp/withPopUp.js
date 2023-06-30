/* eslint-disable react/display-name */
import React from "react";
import css from "./withPopUp.module.scss";
import cx from "classnames";

const withPopUp = (Component) => (props) => {
  return (
    <div className={cx(css.card, props.isOpen && css.opened)}>
      <div className={css.title}>
        <Component />
      </div>
      <div className={css.button} onClick={() => props.onClose()}>
        X
      </div>
    </div>
  );
};

export default withPopUp;
