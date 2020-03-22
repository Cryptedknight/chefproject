import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home"
import Login from './components/loginpage';
import Dashboard from "./components/Dashboard"
import Problems from "./components/problems"

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
            <Route exact path ="/">
              <Home/>
            </Route>
            <Route exact path = "/login">
              <Login/>
            </Route>
            <Route exact path = "/dashboard">
              <Dashboard/>
            </Route>
            <Route exact path = "/problems">
              <Problems/>
            </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
