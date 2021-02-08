import React, { useState } from 'react';
import './App.css';
import {ClassApp} from './classApp.js';

export default function App () {

  const [numberStateVariable, setNumberStateVariable]=useState(0);
  
  return (
    <div className="functionWrapper">
    <div className="functionIncrementor">
      <h2>Function Counter</h2>
      <button onClick = {() => {
    setNumberStateVariable(numberStateVariable - 1)

  }}>
       -
        </button>

    <h1>{numberStateVariable}</h1>
     

     <button onClick = { () => {
    setNumberStateVariable(numberStateVariable + 1)
  
  }}>
    +
  </button>

  <button onClick = {() => {
    setNumberStateVariable(0)
  }}>
    Reset
  </button>
  </div>
  <ClassApp />
    

    </div>
  );
}
