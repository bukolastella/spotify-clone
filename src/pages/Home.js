import React from "react";
import Nav from "../components/Nav/Nav";
import Hot10 from "../components/HomeRow/Hot10";
import HomeRow from "../components/HomeRow/HomeRow";
import ArtistRow from "../components/HomeRow/ArtistRow";
import { useDispatch } from "react-redux";
import { homeActions } from "../store/home-slice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://spotify-clone-cdba7-default-rtdb.firebaseio.com/data.json`
      );
      const data = await response.json();
      const arrayData = Object.values(data)[0];
      console.log(arrayData);
      dispatch(homeActions.replaceData(arrayData));
    };
    fetchData();
  }, []);
  return (
    <>
      <Nav />
      <Hot10 />
      <HomeRow />
      <ArtistRow />
    </>
  );
};

export default Home;
