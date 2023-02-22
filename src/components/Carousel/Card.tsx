import React, { forwardRef, ForwardedRef } from "react";
import { cardComponentType } from "../../config/types";
import style from "./style.module.scss";

interface CardProps {
  data: cardComponentType[];
  number: number;
  handleNumber: (num: number) => number;
}

const Card = (props: CardProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { number, data, handleNumber } = props;
  return (
    <div
      ref={ref}
      className={`${data[handleNumber(number)]?.className} ${style.Box}`}
      onClick={data[handleNumber(number)]?.onClick}
    >
      <div>{handleNumber(number)}</div>
      <div className={style.AlignedFlex}>
        <div className={style.ImageContainer}>
          <img src={`${data[handleNumber(number)]?.image}`} alt="" />
        </div>
        <div className={`${style.Mr_12} ${style.Info} ${style.columnCenter}`}>
          <p className={style.Title}>{data[handleNumber(number)]?.title}</p>
          <p className={style.Description}>
            {data[handleNumber(number)]?.description}
          </p>
        </div>
      </div>
      {data[handleNumber(number)]?.detail ? (
        <div className={style.Detail}>{data[handleNumber(number)]?.detail}</div>
      ) : null}
    </div>
  );
};

export default forwardRef<HTMLDivElement, CardProps>(Card);
