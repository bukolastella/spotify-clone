import React from "react";
import HomeItem from "./HomeItem";
import classes from "./HomeRow.module.css";
import { useSelector } from "react-redux";
import Skeleton from "../../skeleton/Skeleton";

const HomeRow = (props) => {
  const loadingState = useSelector((state) => state.home.loadingState);

  let slides = [];
  for (let index = 0; index < 5; index++) {
    if (!props.data) break;

    slides.push(
      <HomeItem
        key={index}
        data={props.data[index]}
        style={{
          transform: `translateX(${index * 110}%)`,
        }}
      />
    );
  }
  return (
    <div className={classes.HomeRow}>
      {loadingState ? <Skeleton type="title" /> : <h1>{props.data?.topic}</h1>}

      <div className={classes.HomeRowItem}>{slides}</div>
    </div>
  );
};

export default HomeRow;
