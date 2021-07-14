import React from "react";
import classes from "./HomeItem.module.css";
import useResize from "../../hooks/use-resize";
import { useSelector, useDispatch } from "react-redux";
import { audioActions } from "../../store/audio-slice";
import HomeSkeleton from "../../skeleton/HomeSkeleton";

const HomeItem = (props) => {
  const loadingState = useSelector((state) => state.home.loadingState);

  const { resizeState } = useResize();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.home.apiData);

  const playHandler = () => {
    const currentSong = state.find((ev) => ev.id === props.data.id);
    dispatch(audioActions.currentMusic(currentSong));
  };
  return (
    <>
      <div
        className={classes.HomeItem}
        style={resizeState ? props.style : null}
        onClick={playHandler}
      >
        {loadingState && <HomeSkeleton />}
        {!loadingState && (
          <>
            <div className={classes.HomeItemImg}>
              <img src={props.data.songPic} alt="song cover" />
            </div>
            <div className={classes.HomeItemTitle}>
              <h3>{props.data.songTitle}</h3>
              <span>{props.data.artist}</span>
            </div>
            <div className={classes.HomeItemPlay}>
              <span>
                <i className="fas fa-play"></i>
              </span>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default HomeItem;
