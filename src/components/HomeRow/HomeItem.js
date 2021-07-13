import React from "react";
import classes from "./HomeItem.module.css";
import useResize from "../../hooks/use-resize";

const HomeItem = (props) => {
  const { resizeState } = useResize();
  return (
    <div className={classes.HomeItem} style={resizeState ? props.style : null}>
      <div className={classes.HomeItemImg}>
        <img
          src="https://i.scdn.co/image/ab67616d0000b273caf82abb2338880577e472be"
          alt="song cover"
        />
      </div>
      <div className={classes.HomeItemTitle}>
        <h3>jealous</h3>
        <span>fireboy</span>
      </div>
      <div className={classes.HomeItemPlay}>
        <span>
          <i className="fas fa-play"></i>
        </span>
      </div>
    </div>
  );
};

export default HomeItem;
