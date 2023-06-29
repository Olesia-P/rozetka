import Product from "../components/Product/Product";
import { ProductsArray } from "../utils/ProductsArray";
import css from "./index.module.scss";
import { useSelector } from "react-redux";
import cx from "classnames";

export default function Home() {
  // const { isCartOpen } = useSelector(({ commonOpening }) => commonOpening);
  return (
    <div
    // className={cx(isCartOpen && { body: { overflow: "hidden" } })}
    >
      <div className={css.space}></div>
      <h1 className="defaultCaption">THIS SITE HAS THE MOBILE VERSION ONLY</h1>
      <div className={css.productsLayout}>
        {ProductsArray.map((element) => (
          <Product product={element} key={element.id} />
        ))}
      </div>
    </div>
  );
}
