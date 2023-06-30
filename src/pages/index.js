import Product from "../components/Product/Product";
import { ProductsArray } from "../utils/ProductsArray";
import css from "./index.module.scss";
import { useSelector } from "react-redux";
import cx from "classnames";
import SideMenu from "../components/SideMenu/SideMenu/SideMenu";

export default function Home() {
  // const { isCartOpen } = useSelector(({ commonOpening }) => commonOpening);
  return (
    <div
    // className={cx(isCartOpen && { body: { overflow: "hidden" } })}
    >
      <div className={css.space}></div>
      <div className={css.productsLayout}>
        <div>
          <SideMenu />
        </div>

        {/* {ProductsArray.map((element) => (
          <Product product={element} key={element.id} />
        ))} */}
      </div>
    </div>
  );
}
