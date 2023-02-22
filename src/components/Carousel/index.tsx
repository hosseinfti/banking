import React, { useState } from "react";
import { cardComponentType } from "../../config/types";
import style from "./style.module.scss";

interface CarouselProps {
  data: cardComponentType[];
}

const Carousel = ({ data }: CarouselProps) => {
  const [currentCard, setCurrentCard] = useState<number>(0);

  const handleNextClick = () => {
    setCurrentCard((currentCard + 1) % data.length);
  };

  const handlePrevClick = () => {
    setCurrentCard((currentCard - 1 + data.length) % data.length);
  };

  const card = (number: number) => {
    return (
      <div
        className={`${data[currentCard + number].className} ${style.Box}`}
        onClick={data[currentCard + number].onClick}
      >
        <div className={style.AlignedFlex}>
          <div className={style.ImageContainer}>
            <img src={`${data[currentCard + number].image}`} alt="" />
          </div>
          <div className={`${style.Mr_12} ${style.Info}`}>
            <p className={style.Title}>{data[currentCard + number].title}</p>
            <p className={style.Description}>
              {data[currentCard + number].description}
            </p>
          </div>
        </div>
        {data[currentCard + number].detail ? (
          <div className={style.Detail}>
            {data[currentCard + number].detail}
          </div>
        ) : null}
        <div className={style.button_container}>
          <button onClick={handleNextClick} className={style.carousel_button}>
            Next
          </button>
          <button onClick={handlePrevClick} className={style.carousel_button}>
            Prev
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={style.carousel}>
      {card(-1)}
      {card(0)}
      {card(+1)}
    </div>
  );
};

export default Carousel;
