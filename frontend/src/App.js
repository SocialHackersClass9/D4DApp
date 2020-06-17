import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './views/Home.js';
import About from './views/About.js';
import AccesibleRegistration from './views/AccesibleRegistration.js';
import InstructorProfile from './views/InstructorProfileContact.js';
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
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/AccesibleRegistration">Accesible Registration</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/InstructorProfileContact">Instructor Profile</Link>
        </li>
      </ul>

      <h1>Greeting: {greeting} </h1>

      <main role="main" className="container">
        <Switch>
          <Route path="/AccesibleRegistration">
            <AccesibleRegistration />
          </Route>
          <Route path="/InstructorProfileContact">
            <InstructorProfile />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;