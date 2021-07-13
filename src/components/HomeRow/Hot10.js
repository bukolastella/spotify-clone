import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import HomeRow from "./HomeRow";

const Hot10 = () => {
  const hotData = useSelector((state) => state.home);
  console.log(hotData);
  return (
    <div>
      <HomeRow />
    </div>
  );
};

export default Hot10;
