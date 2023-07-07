/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import css from "./SliderBanner.module.scss";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import cx from "classnames";

export default function SliderBanner({ pictures }) {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  //   console.log(pictures[currentPictureId].img);

  useEffect(() => {
    setIsLoaded(false);
    setTimeout(() => setIsLoaded(true), 300);
  }, [currentPictureIndex]);

  const increaseIndex = () => {
    currentPictureIndex === pictures.length - 1
      ? setCurrentPictureIndex(0)
      : setCurrentPictureIndex(currentPictureIndex + 1);
  };

  const decreaseIndex = () => {
    currentPictureIndex === 0
      ? setCurrentPictureIndex(pictures.length - 1)
      : setCurrentPictureIndex(currentPictureIndex - 1);
  };

  const nextPictureIndex = (currentIndex) => {
    return currentIndex === pictures.length - 1 ? 0 : currentIndex + 1;
  };

  const previousPictureIndex = (currentIndex) => {
    return currentIndex === 0 ? pictures.length - 1 : currentIndex - 1;
  };

  console.log(currentPictureIndex);

  return (
    <div className={css.container}>
      <div className={css.picturesContainer}>
        <img
          className={cx(isLoaded && css.movePrevious)}
          src={pictures[previousPictureIndex(currentPictureIndex)].img}
          alt={pictures[previousPictureIndex(currentPictureIndex)].alt}
        />

        <img
          className={cx(isLoaded && css.moveCurrent)}
          src={pictures[currentPictureIndex].img}
          alt={pictures[currentPictureIndex].alt}
        />

        <img
          className={cx(isLoaded && css.moveNext)}
          src={pictures[nextPictureIndex(currentPictureIndex)].img}
          alt={pictures[nextPictureIndex(currentPictureIndex)].alt}
        />

        {/* {pictures.map((element) => (
          <img
            key={element.id}
            src={pictures[pictures.indexOf(element)].img}
            alt={pictures[[pictures.indexOf(element)]].alt}
          />
        ))} */}
      </div>
      <div className={css.arrowLeft}>
        <BsChevronLeft className={css.arrow} onClick={() => decreaseIndex()} />
      </div>
      <div className={css.arrowRight}>
        <BsChevronRight className={css.arrow} onClick={() => increaseIndex()} />
      </div>
    </div>
  );
}
