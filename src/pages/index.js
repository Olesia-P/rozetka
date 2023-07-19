import Products from "../components/Products/Products";
import { productsArray } from "../utils/productsArray";
import {
  bannerPictures,
  bannerPicturesSmall,
} from "../utils/bannerPicturesArray";
import css from "./index.module.scss";
import { useSelector } from "react-redux";
import SideMenu from "../components/SideMenu/SideMenu/SideMenu";
import SliderBanner from "../components/SliderBanner/SliderBanner";
import useMediaQuery from "../hooks/useMediaQuery";
import { AiOutlineShop, AiOutlineArrowDown } from "react-icons/ai";
import { useState } from "react";
import cx from "classnames";

export default function Home() {
  const isLaptop = useMediaQuery(1200);
  const [showAllItems1, setShowAllItems1] = useState(false);

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
            <Products products={productsArray} header="Гарячі новинки" />
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
          <Products
            products={productsArray}
            header="Гарячі новинки"
            showAllItems={showAllItems1}
            setShowAllItems={setShowAllItems1}
          />

          <div
            className={cx(
              !showAllItems1 && css.showMoreButton,
              showAllItems1 && css.NOshowMoreButton
            )}
            onClick={() => setShowAllItems1(true)}
          >
            Показати ще
            <div className={css.arrow}>
              <AiOutlineArrowDown />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
