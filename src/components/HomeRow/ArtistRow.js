import React from "react";
import ArtistItem from "./ArtistItem";
import classes from "./ArtistRow.module.css";
import Skeleton from "../../skeleton/Skeleton";
import { useSelector } from "react-redux";

const ArtistRow = (props) => {
  const loadingState = useSelector((state) => state.home.loadingState);

  let slides = [];
  for (let index = 0; index < 5; index++) {
    if (!props.data) break;

    slides.push(
      <ArtistItem
        key={index}
        data={props.data[index]}
        style={{
          transform: `translateX(${index * 110}%)`,
        }}
      />
    );
  }
  return (
    <div className={classes.ArtistRow}>
      {loadingState ? <Skeleton type="title" /> : <h1>Artist pick</h1>}
      <div className={classes.ArtistRowItem}>{slides}</div>
    </div>
  );
};

export default ArtistRow;
