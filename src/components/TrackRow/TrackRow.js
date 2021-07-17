import React from "react";
import classes from "./TrackRow.module.css";
import { audioActions } from "../../store/audio-slice";
import { useDispatch } from "react-redux";

const TrackRow = (props) => {
  const dispatch = useDispatch();

  const trackPlayHandler = () => {
    dispatch(audioActions.currentMusic(props.data));
  };
  return (
    <div className={classes.TrackRow} onClick={trackPlayHandler}>
      <span className={classes.TrackRowNo}>
        <i className="fas fa-play"></i>
      </span>
      <span className={classes.TrackRowImg}>
        <img src={props.data.songPic} alt="song cover" />
      </span>
      <div className={classes.TrackRowTitle}>
        <h3>{props.data.songTitle}</h3>
        <span>{props.data.artist}</span>
      </div>
      <span className={classes.TrackRowAlbum}>{props.data.album}</span>
      <span className={classes.TrackRowTime}>0.30</span>
    </div>
  );
};

export default TrackRow;
