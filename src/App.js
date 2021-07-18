import Home from "./pages/Home";
// import Search from "./pages/Search";
import Tracks from "./pages/Tracks";
import classes from "./App.module.css";
import { Route, Switch, Redirect, HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter basename="/">
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
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
