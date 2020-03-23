import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home"
import Dashboard from "./components/Dashboard";
import Problems from "./components/problems";
import ContestPage from "./components/contest";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
            <Route exact path ="/">
              <Home/>
            </Route>
            <Route exact path = "/dashboard">
              <Dashboard/>
            </Route>
            <Route exact path = "/problems">
              <Problems/>
            </Route>
            <Route exact path = "/contest">
              <ContestPage/>
            </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
