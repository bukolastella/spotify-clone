import React from "react";
import classes from "./TrackHead.module.css";

const TrackHead = (props) => {
  return (
    <div className={classes.TrackHead}>
      <h3>All songs for "{props.query}"</h3>
    </div>
  );
};

export default TrackHead;
