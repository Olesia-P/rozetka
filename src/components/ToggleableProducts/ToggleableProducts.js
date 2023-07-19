import css from "./ToggleableProducts.module.scss";
import { AiOutlineArrowDown } from "react-icons/ai";
import Products from "../Products/Products";
import cx from "classnames";

export default function ToggleableProducts({
  showAllItems,
  setShowAllItems,
  header,
  products,
}) {
  return (
    <div>
      <Products
        products={products}
        header={header}
        showAllItems={showAllItems}
        setShowAllItems={setShowAllItems}
      />
      <div
        className={cx(
          !showAllItems && css.showMoreButton,
          showAllItems && css.NOshowMoreButton
        )}
        onClick={() => setShowAllItems(true)}
      >
        Показати ще
        <div className={css.arrow}>
          <AiOutlineArrowDown />
        </div>
      </div>
    </div>
  );
}
