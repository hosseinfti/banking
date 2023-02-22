import React, { useState, createRef } from "react";
import { cardComponentType } from "../../config/types";
import Card from "./Card";
import style from "./style.module.scss";

interface CarouselProps {
  data: cardComponentType[];
  isDarkTheme: boolean;
}

const boxRef = createRef<HTMLInputElement>();
const Carousel = ({ data, isDarkTheme }: CarouselProps) => {
  const [currentCard, setCurrentCard] = useState<number>(0);

  const handleNextClick = () => {
    setCurrentCard((currentCard + 1) % data.length);
  };

  const handlePrevClick = () => {
    setCurrentCard((currentCard - 1 + data.length) % data.length);
  };

  const handleNumber = (number: number) => {
    let positive;
    if (currentCard + number < 0) {
      positive = currentCard + number + data.length;
    } else {
      positive = (currentCard + number) % data.length;
    }
    return positive;
  };

  return (
    <div>
      <div className={style.carousel}>
        <Card
          data={data}
          handleNumber={() => handleNumber(-1)}
          number={-1}
          ref={boxRef}
          isActive={false}
        />
        <Card
          data={data}
          handleNumber={() => handleNumber(0)}
          number={0}
          ref={boxRef}
          isActive={true}
        />
        <Card
          data={data}
          handleNumber={() => handleNumber(1)}
          number={1}
          ref={boxRef}
          isActive={false}
        />
      </div>
      <div className={style.button_container}>
        <button
          onClick={handlePrevClick}
          className={`${
            isDarkTheme ? style.carousel_button : style.carousel_button_dark
          } `}
        >
          Prev
        </button>
        <button
          onClick={handleNextClick}
          className={`${
            isDarkTheme ? style.carousel_button : style.carousel_button_dark
          } `}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
