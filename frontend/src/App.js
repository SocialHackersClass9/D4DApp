import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './views/Home';
import About from './views/About.js';
import Search from './views/Search';
import AccessibleRegistrationForm from './views/AccessibleRegistrationForm'
import InstructorProfileContact from './views/InstructorProfileContact.js';
import InstructorsRegistration from './views/Instructors_registration/Instructors_registration.js';
import StudentSignUp from "./views/StudentSignUp/StudentSignUp"
import Navigation from "./Components/Navigation";

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

function App() {
  const [context_, setContext_] = useState(initialContext);
  const setContext = function (ctx) {
      setContext_(ctx)
  }
  const context = Object.assign({}, context_, {setContext: setContext});
  return (
    <AppContext.Provider value={context}>
    <Router>
      <Navigation />

      <main role="main">
        <Switch>

          <Route exact path="/ping">
            <Ping />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/accessibleregistration">
            <AccessibleRegistrationForm />
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

        </Switch>
      </main>


    </Router>
    </AppContext.Provider>
  );
}

export default App;
