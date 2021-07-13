import React from "react";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={classes.Nav}>
      <div className={classes.NavLogo}>
        <span className={classes.NavLogoIcon}>
          <i className="fab fa-spotify"></i>
        </span>
        <span>30sec</span>
      </div>

      <div className={classes.NavArrow}>
        <div>
          <i className="fas fa-chevron-left"></i>
        </div>
        <div>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>

      <form className={classes.NavForm}>
        <span>
          <i className="fas fa-search"></i>
        </span>
        <input type="text" placeholder="Artists, songs or podcasts" />
      </form>
    </div>
  );
};

export default Nav;
