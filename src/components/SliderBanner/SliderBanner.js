/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import css from "./SliderBanner.module.scss";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import cx from "classnames";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function SliderBanner({ pictures }) {
  return (
    <div className={css.container}>
      <div className={css.picturesContainer}>
        <Carousel
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          showArrows={true}
          stopOnHover={false}
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
