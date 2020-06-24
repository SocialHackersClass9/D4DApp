import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './views/Home';
import About from './views/About.js';
import Search from './views/Search.js';
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
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
        </Switch>
      </main>

      
    </Router>
  );
}

export default App;
