import React from "react";
import classes from "./ArtistItem.module.css";
import useResize from "../../hooks/use-resize";
import { useSelector } from "react-redux";
import HomeSkeleton from "../../skeleton/HomeSkeleton";

const ArtistItem = (props) => {
  const loadingState = useSelector((state) => state.home.loadingState);
  const { resizeState } = useResize();

  return (
    <>
      <div
        className={classes.ArtistItem}
        style={resizeState ? props.style : null}
      >
        {loadingState && <HomeSkeleton />}

        {!loadingState && (
          <>
            <div className={classes.ArtistItemImg}>
              <img src={props.data.artistPic} alt="song cover" />
            </div>
            <h3>{props.data.artist}</h3>
            <span>
              {Math.floor(Number(props.data.id) / 15).toLocaleString("en-us")}
            </span>{" "}
          </>
        )}
      </div>
    </>
  );
};

export default ArtistItem;
