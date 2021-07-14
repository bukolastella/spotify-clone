import React from "react";
import classes from "./HomeSkeleton.module.css";
import Shimmer from "./Shimmer";
import Skeleton from "./Skeleton";

const HomeSkeleton = () => {
  return (
    <div className={classes.wrapper}>
      <div>
        <Skeleton type="square" />
        <Skeleton type="title" />
        <Skeleton type="text" />
      </div>
      <Shimmer />
    </div>
  );
};

export default HomeSkeleton;
