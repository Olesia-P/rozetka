import Product from "../components/Product/Product";
import { ProductsArray } from "../utils/ProductsArray";
import { bannerPictures } from "../utils/bannerPicturesArray";
import { bannerPicturesSmall } from "../utils/bannerPicturesArray";
import css from "./index.module.scss";
import { useSelector } from "react-redux";
import SideMenu from "../components/SideMenu/SideMenu/SideMenu";
import SliderBanner from "../components/SliderBanner/SliderBanner";

export default function Home() {
  const { isMobileMenuOpen } = useSelector(
    ({ commonOpening }) => commonOpening
  );
  return (
    <div>
      {isMobileMenuOpen && (
        <style jsx global>
          {`
            body {
              overflow: hidden;
            }
          `}
        </style>
      )}
      <div className={css.space}></div>
      <div className={css.productsLayout}>
        <div>
          <SideMenu />
        </div>
        <div>
          <SliderBanner
            pictures={bannerPictures}
            smallPictures={bannerPicturesSmall}
          />
        </div>
        <div>
          {/* {ProductsArray.map((element) => (
            <Product product={element} key={element.id} />
          ))} */}
        </div>
      </div>
    </div>
  );
}
