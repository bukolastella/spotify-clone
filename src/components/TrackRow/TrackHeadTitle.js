import React from "react";
import classes from "./TrackHeadTitle.module.css";

const TrackHeadTitle = () => {
  return (
    <div className={classes.TrackHeadTitle}>
      <span>#</span>
      <span>title</span>
      <span></span>
      <span>album</span>
      <span>
        <i className="far fa-clock"></i>
      </span>
    </div>
  );
};

export default TrackHeadTitle;
