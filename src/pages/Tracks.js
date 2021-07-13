import React from "react";
import TrackRow from "../components/TrackRow/TrackRow";
import Nav from "../components/Nav/Nav";
import TrackHead from "../components/TrackRow/TrackHead";
import TrackHeadTitle from "../components/TrackRow/TrackHeadTitle";
import classes from "./Tracks.module.css";

const Tracks = () => {
  return (
    <div>
      <Nav />
      <div className={classes.Tracks}>
        <TrackHead />
        <TrackHeadTitle />
        <TrackRow />
        <TrackRow />
        <TrackRow />
        <TrackRow />
        <TrackRow />
        <TrackRow />
        <TrackRow />
        <TrackRow />
        <TrackRow />
        <TrackRow />
        <TrackRow />
        <TrackRow />
        <TrackRow />
        <TrackRow />
        <TrackRow />
      </div>
    </div>
  );
};

export default Tracks;
