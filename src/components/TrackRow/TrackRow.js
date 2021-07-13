import React from "react";
import classes from "./TrackRow.module.css";

const TrackRow = () => {
  return (
    <div className={classes.TrackRow}>
      <span className={classes.TrackRowNo}>1</span>
      <span className={classes.TrackRowImg}>
        <img
          src="https://i.scdn.co/image/ab67616d0000b273caf82abb2338880577e472be"
          alt="song cover"
        />
      </span>
      <div className={classes.TrackRowTitle}>
        <h3>jealous</h3>
        <span>fire</span>
      </div>
      <span className={classes.TrackRowAlbum}>sour</span>
      <span className={classes.TrackRowTime}>0.30</span>
    </div>
  );
};

export default TrackRow;
