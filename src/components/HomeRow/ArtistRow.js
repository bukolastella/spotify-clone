import React from "react";
import ArtistItem from "./ArtistItem";
import classes from "./ArtistRow.module.css";

const ArtistRow = () => {
  let slides = [];
  for (let index = 0; index < 5; index++) {
    slides.push(
      <ArtistItem
        key={index}
        style={{
          transform: `translateX(${index * 110}%)`,
        }}
      />
    );
  }
  return (
    <div className={classes.ArtistRow}>
      <h1>Artist pick</h1>
      <div className={classes.ArtistRowItem}>{slides}</div>
    </div>
  );
};

export default ArtistRow;
