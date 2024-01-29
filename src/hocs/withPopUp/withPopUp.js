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
      <div>
        <div className={css.comment}>This project is visual only.</div>
        <div className={css.comment}>Actions that you can do:</div>
      </div>
      <div className={css.listWrap}>
        <p> - add products to the cart</p>
        <p> - increase or decrease amount of products in the cart</p>
        <p> - delete products from the cart</p>
      </div>
      <div className={css.button} onClick={() => props.onClose()}>
        X
      </div>
    </div>
  );
};

export default withPopUp;
