import React from "react";
import { useSelector } from "react-redux";
import HomeRow from "./HomeRow";
import ArtistRow from "./ArtistRow";

const Hot10 = () => {
  const hotData = useSelector((state) => state.home);
  const arrayRes = Object.values(hotData)[0].slice(0, 5);
  const secondArrayRes = Object.values(hotData)[0].slice(5, 10);
  const arrayData = { ...arrayRes, topic: "Hot 5" };
  const secondArrayData = { ...secondArrayRes, topic: "Editor's pick" };
  return (
    <>
      <HomeRow data={arrayData} />
      <HomeRow data={secondArrayData} />
      <ArtistRow data={arrayData} />
    </>
  );
};

export default Hot10;
