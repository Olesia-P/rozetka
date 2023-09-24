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
      <h2>This project is visual only.</h2>
      <h2>Actions that you can do:</h2>
      <ul>
        <li>add products to the cart</li>
        <li>increase or decrease amount of products in the cart</li>
        <li>delete products from the cart</li>
      </ul>
      <div className={css.button} onClick={() => props.onClose()}>
        X
      </div>
    </div>
  );
};

export default withPopUp;
