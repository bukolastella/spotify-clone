import React, { useEffect, useState } from "react";
import Nav from "../components/Nav/Nav";
import Hot10 from "../components/HomeRow/Hot10";
import { useDispatch } from "react-redux";
import { homeActions } from "../store/home-slice";
import { audioActions } from "../store/audio-slice";
import AudioPlayer from "../components/audio/AudioPlayer";
import ErrorModal from "../components/errorModal/ErrorModal";

const Home = () => {
  const [errorState, setErrorState] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(homeActions.setLoading(true));
      const response = await fetch(
        `https://spotify-clone-cdba7-default-rtdb.firebaseio.com/data.json`
      );
      if (!response.ok) throw new Error("Something went wrong. Try again");
      const data = await response.json();
      const arrayData = Object.values(data)[0];
      dispatch(audioActions.currentMusic(arrayData[0]));
      dispatch(homeActions.replaceData(arrayData));
      dispatch(homeActions.setLoading(false));
    };
    fetchData().catch((err) => setErrorState(err.message));
  }, [dispatch]);
  return (
    <>
      <Nav />
      <Hot10 />
      <AudioPlayer />
      {errorState && <ErrorModal>{errorState} </ErrorModal>}
    </>
  );
};

export default Home;
