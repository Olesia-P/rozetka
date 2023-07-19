import Products from "../components/Products/Products";
import ToggleableProducts from "../components/ToggleableProducts/ToggleableProducts";
import { productsArray1, productsArray2 } from "../utils/productsArray";
import {
  bannerPictures,
  bannerPicturesSmall,
} from "../utils/bannerPicturesArray";
import css from "./index.module.scss";
import { useSelector } from "react-redux";
import SideMenu from "../components/SideMenu/SideMenu/SideMenu";
import SliderBanner from "../components/SliderBanner/SliderBanner";
import useMediaQuery from "../hooks/useMediaQuery";
import { AiOutlineShop } from "react-icons/ai";
import { useState } from "react";

export default function Home() {
  const isLaptop = useMediaQuery(1200);
  const [showAllItems1, setShowAllItems1] = useState(false);
  const [showAllItems2, setShowAllItems2] = useState(false);

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

      {!isLaptop && (
        <div className={css.productsLayout}>
          <div>
            <SideMenu />
          </div>
          <div>
            <SliderBanner
              pictures={bannerPictures}
              smallPictures={bannerPicturesSmall}
            />
            <Products products={productsArray1} header="Гарячі новинки" />
            <Products products={productsArray2} header="Рекомендовані товари" />
          </div>
        </div>
      )}

      {isLaptop && (
        <div className={css.productsLayout}>
          <SliderBanner
            pictures={bannerPictures}
            smallPictures={bannerPicturesSmall}
          />
          <SideMenu />
          <div className={css.catalogButton}>
            <AiOutlineShop className={css.catalogLogo} />
            <div className={css.catalogCaption}>Каталог товарів</div>
          </div>
          <ToggleableProducts
            showAllItems={showAllItems1}
            setShowAllItems={setShowAllItems1}
            header="Гарячі новинки"
            products={productsArray1}
          />
          <div style={{ margin: 20 }}></div>
          <ToggleableProducts
            showAllItems={showAllItems2}
            setShowAllItems={setShowAllItems2}
            header="Рекомендовані товари"
            products={productsArray2}
          />
        </div>
      )}
    </div>
  );
}
