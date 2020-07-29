import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './views/Home';
import About from './views/About.js';
import Search from './views/Search';
import InstructorProfileContact from './views/InstructorProfileContact.js';
import InstructorsRegistration from './views/Instructors_registration/Instructors_registration.js';
import StudentSignUp from "./views/StudentSignUp/StudentSignUp"
import Navigation from "./Components/Navigation";
import SportParalympics from './views/SportParalympics';
import Ping from './views/Ping.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import AppContext from './context';



const initialContext = {
    user: null,
    setContext: function (content) {
        alert('setContent');
    }
}

const loadContext = function () {
    var ctx = localStorage.getItem('AppContext');
    console.log(ctx);
    if (ctx == null) {
        return initialContext;
    }
    return JSON.parse(ctx);

}

function App() {
  const [context_, setContext_] = useState(loadContext);
  const setContext = function (ctx) {
      localStorage.setItem('AppContext', JSON.stringify(ctx));
      setContext_(ctx)
  }
  const context = Object.assign({}, context_, {setContext: setContext});
  return (
    <Router>
      <Navigation />

      <main role="main">
        <Switch>
            <AppContext.Provider value={context}>

          <Route exact path="/ping">
            <Ping />
          </Route>
          
          <Route exact path="/search">
            <Search />
          </Route>

          <Route exact path="/search">
            <Search />
          </Route>

          <Route exact path="/SportParalympics">
            <SportParalympics />
          </Route>
          <Route exact path="/instructor/:id">
            <InstructorProfileContact />
          </Route>
          <Route exact path="/instructors_registration">
            <InstructorsRegistration />
          </Route>
          <Route exact path="/student_sign_up">
            <StudentSignUp />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
            </AppContext.Provider>

        </Switch>
      </main>


    </Router>
  );
}

export default App;
