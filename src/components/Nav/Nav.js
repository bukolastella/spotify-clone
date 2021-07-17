import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./Nav.module.css";

const Nav = () => {
  const [inputState, setInputState] = useState("");
  const [inputErrorState, setInputErrorState] = useState(false);
  const history = useHistory();
  const submitHandler = (event) => {
    event.preventDefault();
    if (inputState === " ") {
      console.log(inputState);
      setInputState("");
      setInputErrorState(true);
      return;
    }
    setInputErrorState(false);
    history.push(`/search/${inputState}/tracks`);
  };
  return (
    <div className={classes.Nav}>
      <div className={classes.NavLogo}>
        <span className={classes.NavLogoIcon}>
          <i className="fab fa-spotify"></i>
        </span>
        <span>30sec</span>
      </div>

      <div className={classes.NavArrow}>
        <div onClick={() => window.history.back()}>
          <i className="fas fa-chevron-left"></i>
        </div>
        <div onClick={() => window.history.forward()}>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>

      <form className={classes.NavForm} onSubmit={submitHandler}>
        <span onClick={submitHandler}>
          <i className="fas fa-search"></i>
        </span>
        <input
          type="text"
          placeholder="Artists, songs or podcasts"
          value={inputState}
          onChange={(ev) => setInputState(ev.target.value)}
          style={{
            backgroundColor: inputErrorState ? "#ffdddd" : null,
          }}
        />
      </form>
    </div>
  );
};

export default Nav;
