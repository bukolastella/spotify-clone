import React, { useState } from "react";
import TrackRow from "../components/TrackRow/TrackRow";
import Nav from "../components/Nav/Nav";
import TrackHead from "../components/TrackRow/TrackHead";
import TrackHeadTitle from "../components/TrackRow/TrackHeadTitle";
import classes from "./Tracks.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import AudioPlayer from "../components/audio/AudioPlayer";
import { useDispatch, useSelector } from "react-redux";
import { homeActions } from "../store/home-slice";
import ErrorModal from "../components/errorModal/ErrorModal";
import Lds from "../ui/Lds";

const Tracks = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const musicState = useSelector((state) => state.audio.audioData);
  const [trackState, setTrackState] = useState([]);
  const [errorState, setErrorState] = useState(false);
  const [trackLoadingState, setTrackLoadingErrorState] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(homeActions.setLoading(true));
      setTrackLoadingErrorState(true);
      const response = await fetch(
        `https://unsa-unofficial-spotify-api.p.rapidapi.com/search?query=${param.query}&type=tracks`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key": process.env.REACT_APP_KEY,
            "x-rapidapi-host": process.env.REACT_APP_HOST,
          },
        }
      );
      if (!response.ok) throw new Error("Something went wrong, Try again");
      const data = await response.json();
      if (data.Results === "No results Found")
        throw new Error("No results Found");
      if (typeof data.Results === "string")
        throw new Error(
          "Maximum API limit reached for the day, Try again later"
        );

      const finalData = data.Results.map((ev) => ({
        songTitle: ev.name,
        artist: ev.artists.map((ev) => ev.name).join(" "),
        songPic: ev.album.images[0].url,
        album: ev.album.name,
        preview_url: ev.preview_url,
        id: ev.id,
      }));
      setTrackState(finalData);
      dispatch(homeActions.setLoading(false));
      setTrackLoadingErrorState(false);
    };
    fetchData().catch((error) => setErrorState(error.message));
  }, [param.query, dispatch]);
  const reveal = trackState.map((ev, i) => (
    <TrackRow data={trackState[i]} key={ev.id} />
  ));

  return (
    <>
      <Nav />
      {trackLoadingState && (
        <div className={classes.Loader}>
          <Lds />
        </div>
      )}
      {!trackLoadingState && (
        <div className={classes.Tracks}>
          <TrackHead query={param.query} />
          <TrackHeadTitle />
          {trackState && reveal}
        </div>
      )}
      {musicState.preview_url && <AudioPlayer />}
      {errorState && <ErrorModal>{errorState} </ErrorModal>}
    </>
  );
};

export default Tracks;
