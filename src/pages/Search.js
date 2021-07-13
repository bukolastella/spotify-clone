import React from "react";
import Nav from "../components/Nav/Nav";
import ArtistRow from "../components/HomeRow/ArtistRow";
import SearchRow from "../components/SearchRow/SearchRow";
import classes from "./Search.module.css";

const Search = () => {
  return (
    <div>
      <Nav />
      <ArtistRow />
      <div className={classes.Search}>
        <div className={classes.SearchHeader}>
          <h1>songs</h1>
          <span>see all</span>
        </div>
        <SearchRow />
        <SearchRow />
        <SearchRow />
        <SearchRow />
        <SearchRow />
      </div>
    </div>
  );
};

export default Search;
