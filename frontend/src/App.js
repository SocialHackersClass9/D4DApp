import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './views/Home';
import About from './views/About.js';
import Search from './views/Search';
import InstructorProfileContact from './views/InstructorProfileContact.js';
import Ping from './views/Ping.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>


      <main role="main">
        <Switch>

          <Route exact path="/ping">
            <Ping />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/instructor/:id">
            <InstructorProfileContact />

          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>

        </Switch>
      </main>


    </Router>
  );
}

export default App;
