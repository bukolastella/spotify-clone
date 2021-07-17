import Home from "./pages/Home";
// import Search from "./pages/Search";
import Tracks from "./pages/Tracks";
import classes from "./App.module.css";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className={classes.App}>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        {/* <Route path="/search/:query" exact>
          <Search />
        </Route> */}
        <Route path={`/search/:query`}>
          <Tracks />
        </Route>
        <Route path="*">
          {/* <p
            style={{
              color: "white",
              textAlign: "center",
              paddingTop: "3rem",
              margin: "auto",
              width: "200px",
            }}
          >
            Page not found
          </p> */}
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
