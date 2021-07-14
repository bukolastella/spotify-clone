import React from "react";
import classes from "./Skeleton.module.css";

const Skeleton = ({ type }) => {
  const css = !type ? `Skeleton` : `${type}`;
  return <div className={classes[css]}></div>;
};

export default Skeleton;
