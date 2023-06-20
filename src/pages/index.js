import Product from "../components/Product/Product";
import { product1, product2 } from "../utils/Products";
import css from "./index.module.scss";

export default function Home() {
  return (
    <div>
      <div className={css.space}></div>
      <h1 className="defaultCaption">THIS SITE HAS THE MOBILE VERSION ONLY</h1>
      <div className={css.productsLayout}>
        <Product product={product1} />
        <Product product={product2} />
      </div>
    </div>
  );
}
