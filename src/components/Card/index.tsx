import React from "react";
import { cardComponentType } from "../../config/types";
import style from "./style.module.scss";

const EmptyCard = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <div className={style.Box}>
      <div
        className={`${isLoading ? style.Skeleton : ""} ${style.Empty} ${
          style.EmptyImage
        }`}
      />
      <div className={`${style.Mr_12} ${style.Info}`}>
        <div
          className={`${isLoading ? style.Skeleton : ""} ${style.Empty} ${
            style.EmptyTitle
          }`}
        />
        <div
          className={`${isLoading ? style.Skeleton : ""} ${style.Empty} ${
            style.EmptyDescription
          } ${style.Mt_12}`}
        />
      </div>
      {isLoading ? (
        <div
          className={`${style.Skeleton} ${style.Empty} ${style.EmptyDetail}`}
        />
      ) : null}
    </div>
  );
};

const Card = ({
  image,
  title,
  description,
  detail,
  className = "",
  loading,
  onClick,
}: cardComponentType) => {
  if (loading) {
    return <EmptyCard isLoading={loading} />;
  } else {
    return (
      <div className={`${className} ${style.Box}`} onClick={onClick}>
        <div className={style.AlignedFlex}>
          <div className={style.ImageContainer}>{image}</div>
          <div className={`${style.Mr_12} ${style.Info}`}>
            <p className={style.Title}>{title}</p>
            <p className={style.Description}>{description}</p>
          </div>
        </div>
        {detail ? <div className={style.Detail}>{detail}</div> : null}
      </div>
    );
  }
};

export default Card;
