import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../../pages/Home";
import logo from "../../assets/img/logo.png";
import Tracks from "../../pages/Tracks";
import "./styles.css";
function NavBar() {
  return (
    <div>
      <Router>
        <div className="row navBar">
          <div className="col-2">
            <img src={logo} className="logo" />
          </div>
          <div className="row nav-links">
            <div className="col-2 ">
              <Link to="/" className="nav-title">
                Home
              </Link>
            </div>
            <div className="col-2">
              <Link to="/tracks" className="nav-title">
                Tracks
              </Link>
            </div>
          </div>
        </div>

        <Switch>
          <Route path="/tracks">
            <Tracks />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default NavBar;
