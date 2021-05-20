import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import Login from "./components/Login.component";
import Home from "./components/Home.component";
import CommunityShow from "./components/CommunityShow.component";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/community/:handle">
            <CommunityShow />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
