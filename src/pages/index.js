import Products from "../components/Products/Products";
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

export default function Home() {
  const isLaptop = useMediaQuery(1200);

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
          <div className={css.main}>
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
          <Products header="Гарячі новинки" products={productsArray1} />
          <Products header="Рекомендовані товари" products={productsArray2} />
        </div>
      )}
    </div>
  );
}
