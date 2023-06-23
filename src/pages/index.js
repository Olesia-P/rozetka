import Product from "../components/Product/Product";
import { product1, product2 } from "../utils/Products";
import css from "./index.module.scss";
import PopUpCatalogFilling from "../components/MobileMenu/PopUpFillings/PopUpCatalogFilling";
import withPopUp from "../hocs/withPopUp/withPopUp";
import { useState } from "react";

export default function Home() {
  const [isCatalogPopUp, setIsCatalogPopUp] = useState(false);
  const PopUpCatalog = withPopUp(PopUpCatalogFilling);

  return (
    <div>
      <div className={css.space}></div>
      <h1 className="defaultCaption">THIS SITE HAS THE MOBILE VERSION ONLY</h1>
      <div className={css.productsLayout}>
        <Product product={product1} />
        <Product product={product2} />
      </div>

      <div className={css.testingPopUp} onClick={() => setIsCatalogPopUp(true)}>
        Testing pop-up
      </div>
      <PopUpCatalog open={isCatalogPopUp} setOpenState={setIsCatalogPopUp} />
    </div>
  );
}
