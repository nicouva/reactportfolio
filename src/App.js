import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Porfolio from './pages/Portfolio'
import Contact from './pages/Contact'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/reactportfolio/">
            <Home />
          </Route>
          <Route exact path="/reactportfolio/portfolio">
            <Porfolio />
          </Route>
          <Route exact path="/reactportfolio/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}


export default App
