import React from 'react';
import Ninjas from './Ninjas';

function App() {
  return (
    <div className="App">
    <h1> My first react app </h1>
    <Ninjas name = "Ryu" age = "25" belt = "black"/> 
    <Ninjas name = "Yoshi" age = "30" belt = "green"/>
    </div>
  );
}

export default App;
