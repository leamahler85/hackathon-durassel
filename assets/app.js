import React, { Component } from "react";
import ReactDom from "react-dom";
import logo from './img/fiverr.png'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LayoutBoard from "./components/LayoutBoard";
import Login from "./components/Login";
import GlobalContext from "./contexts/GlobalContext";

class App extends Component {
  render() {
    return (
      <>
        <GlobalContext>
          <Router>
            <div>
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>
              <Switch>
                <Route path="/board">
                  <LayoutBoard />
                </Route>
                <Route path="/">
                  <Login />
                </Route>
              </Switch>
            </div>
          </Router>
        </GlobalContext>
      </>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
