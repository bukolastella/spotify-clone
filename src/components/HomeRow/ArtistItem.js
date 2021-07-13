import React from "react";
import classes from "./ArtistItem.module.css";
import useResize from "../../hooks/use-resize";

const ArtistItem = (props) => {
  const { resizeState } = useResize();

  return (
    <div
      className={classes.ArtistItem}
      style={resizeState ? props.style : null}
    >
      <div className={classes.ArtistItemImg}>
        <img
          src="https://i.scdn.co/image/ab6761610000e5eb7422fa2e9ce4b66a733c5476"
          alt="song cover"
        />
      </div>
      <h3>davido</h3>
      <span>308,934 followers</span>
    </div>
  );
};

export default ArtistItem;
