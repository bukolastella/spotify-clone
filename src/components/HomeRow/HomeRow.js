import React from "react";
import HomeItem from "./HomeItem";
import classes from "./HomeRow.module.css";

const HomeRow = () => {
  let slides = [];
  for (let index = 0; index < 5; index++) {
    slides.push(
      <HomeItem
        key={index}
        style={{
          transform: `translateX(${index * 110}%)`,
        }}
      />
    );
  }
  return (
    <div className={classes.HomeRow}>
      <h1>hot 10</h1>
      <div className={classes.HomeRowItem}>{slides}</div>
    </div>
  );
};

export default HomeRow;
