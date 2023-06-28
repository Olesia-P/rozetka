import Product from "../components/Product/Product";
import { ProductsArray } from "../utils/ProductsArray";
import css from "./index.module.scss";
import { useSelector } from "react-redux";

export default function Home() {
  // const { isCartOpen } = useSelector(({ commonOpening }) => commonOpening);
  return (
    <div>
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
