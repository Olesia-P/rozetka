/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import css from "./SliderBanner.module.scss";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import cx from "classnames";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function SliderBanner({ pictures, smallPictures }) {
  console.log(smallPictures);
  const nextArrow = (clickHandler, isNextItem, accessibilityLabel) => {
    return (
      <div className={css.arrowRight} onClick={clickHandler}>
        <BsChevronRight className={css.arrow} />
      </div>
    );
  };

  const prevArrow = (clickHandler, isNextItem, accessibilityLabel) => {
    return (
      <div className={css.arrowLeft} onClick={clickHandler}>
        <BsChevronLeft className={css.arrow} />
      </div>
    );
  };

  const showIndicators = (
    clickHandler,
    isSelected,
    itemIndex,
    accessibilityLabel
  ) => {
    return (
      <div
        className={cx(css.indicator, isSelected && css.active)}
        style={{ transform: `translateX(${itemIndex * 20}px)` }}
      >
        ●
      </div>
    );
  };

  return (
    <div className={css.container}>
      <div className={css.desktop}>
        <Carousel
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          stopOnHover={false}
          renderArrowNext={nextArrow}
          renderArrowPrev={prevArrow}
          renderIndicator={showIndicators}
          swipeable={true}
          width={"97%"}
          dynamicHeight={true}
        >
          {pictures.map((element, index) => (
            <img
              key={element.id}
              src={pictures[index].img}
              alt={pictures[index].alt}
            />
          ))}
        </Carousel>
      </div>
      <div className={css.mobile}>
        <Carousel
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          stopOnHover={false}
          showArrows={false}
          renderIndicator={showIndicators}
          swipeable={true}
          width={"97%"}
          dynamicHeight={true}
        >
          {smallPictures.map((element, index) => (
            <img
              key={element.id}
              src={smallPictures[index].img}
              alt={smallPictures[index].alt}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

//  {
//    pictures.map((element, index) => (
//      <Carousel key={element.id} infiniteLoop={true} showThumbs={false}>
//        <img src={pictures[index].img} alt={pictures[index].alt} />
//      </Carousel>
//    ));
//  }
