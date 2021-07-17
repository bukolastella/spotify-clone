import React from "react";
import classes from "./Error.module.css";

const ErrorModal = (props) => {
  return (
    <div className={classes.Error}>
      <span>{props.children}</span>
    </div>
  );
};

export default ErrorModal;
