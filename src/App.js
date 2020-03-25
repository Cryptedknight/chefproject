import React, { Component } from 'react'
import Home from './pages/home/Home'
import Selector from './pages/selection/Selector'
import ContestPage from './pages/contest/ContestPage'
import ProblemSection from './pages/problem/problem_section/ProblemSection'
import Problem from './pages/problem/Problem'
import SuccessSection from './pages/problem/success_section/SuccessSection'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  
  render() {
    return (
      <>
      <Router>
        <Switch>
          <Route exact path = "/">
            <Home/>
          </Route>
          <Route exact path = "/contest">
            <ContestPage/>
          </Route>
          <Route exact path = "/success">
            <SuccessSection/>
          </Route>
          <Route exact path = "/problem">
            <Problem/>
          </Route>
          <Route exact path = "/probsec">
            <ProblemSection/>
          </Route>
          <Route exact path = "/select">
            <Selector/>
          </Route>
        </Switch>
      </Router>
      </>
    )
  }
}

