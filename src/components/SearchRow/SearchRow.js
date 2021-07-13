import React from "react";
import classes from "./SearchRow.module.css";

const SearchRow = () => {
  return (
    <div className={classes.SearchRow}>
      <span className={classes.SearchRowImg}>
        <img
          src="https://i.scdn.co/image/ab67616d0000b273caf82abb2338880577e472be"
          alt="song cover"
        />
      </span>
      <div className={classes.SearchRowTitle}>
        <h3>jealous</h3>
        <span>fire</span>
      </div>
      <span className={classes.SearchRowTime}>0.30</span>
    </div>
  );
};

export default SearchRow;
