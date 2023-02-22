import React, { useState, createRef } from "react";
import { cardComponentType } from "../../config/types";
import Card from "./Card";
import style from "./style.module.scss";

interface CarouselProps {
  data: cardComponentType[];
}

const boxRef = createRef<HTMLInputElement>();
const Carousel = ({ data }: CarouselProps) => {
  const [currentCard, setCurrentCard] = useState<number>(0);

  const handleNextClick = () => {
    setCurrentCard((currentCard + 1) % data.length);
    // if (boxRef.current) {
    //   boxRef.current.style.transform = "translateX(-100px)";
    // }
  };

  const handlePrevClick = () => {
    setCurrentCard((currentCard - 1 + data.length) % data.length);
    // if (boxRef.current) {
    //   boxRef.current.style.transform = "translateX(-100px)";
    // }
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
        />
        <Card
          data={data}
          handleNumber={() => handleNumber(0)}
          number={0}
          ref={boxRef}
        />
        <Card
          data={data}
          handleNumber={() => handleNumber(1)}
          number={1}
          ref={boxRef}
        />
      </div>
      <div className={style.button_container}>
        <button onClick={handlePrevClick} className={style.carousel_button}>
          Prev
        </button>
        <button onClick={handleNextClick} className={style.carousel_button}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
