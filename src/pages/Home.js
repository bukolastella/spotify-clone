import React, { useEffect } from "react";
import Nav from "../components/Nav/Nav";
import Hot10 from "../components/HomeRow/Hot10";
import { useDispatch } from "react-redux";
import { homeActions } from "../store/home-slice";
import { audioActions } from "../store/audio-slice";
import AudioPlayer from "../components/audio/AudioPlayer";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(homeActions.setLoading(true));
      const response = await fetch(
        `https://spotify-clone-cdba7-default-rtdb.firebaseio.com/data.json`
      );
      const data = await response.json();
      const arrayData = Object.values(data)[0];
      dispatch(audioActions.currentMusic(arrayData[0]));
      dispatch(homeActions.replaceData(arrayData));
      dispatch(homeActions.setLoading(false));
    };
    fetchData();
  }, [dispatch]);
  return (
    <>
      <Nav />
      <Hot10 />
      <AudioPlayer />
    </>
  );
};

export default Home;
