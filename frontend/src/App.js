import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './views/Home';
import About from './views/About.js';
import Search from './views/Search';
import AccessibleRegistrationForm from './views/AccessibleRegistrationForm'
import InstructorProfileContact from './views/InstructorProfileContact.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [greeting, setGreeting] = useState('No greeting');
  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL)
      .then(res => res.json())
      .then(data => {
        setGreeting(data.greeting);
      })
  });
  return (
    <Router>


      <main role="main">
        <Switch>

          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/accessibleregistration">
            <AccessibleRegistrationForm />
          </Route>
          <Route exact path="/instructor">
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