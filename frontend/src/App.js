import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>Greeting: { greeting } </h1>
    </div>
  );
}

export default App;
