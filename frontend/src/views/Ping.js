import React, { useState, useEffect } from 'react';


function Ping() {
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
        Header
      </header>
      <h1>Greeting: { greeting } </h1>
      <div>
      
      </div>
    </div>
  );
}

export default Ping;
