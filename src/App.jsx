import { useState } from 'react';
import './App.css';
import freeCodeCamp from './assets/freecodecamp-logo.png';
import Button from './components/Button';
function App() {
  

  return (
    <div className='App'>
      <div className="logo-container">
      <img src={ freeCodeCamp } alt="freecodecamp logo" />
      </div>
      <div className='calculator-container'>
        <div className='row'>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className='row'></div>
        <div className='row'></div>
        <div className='row'></div> 
        <div className='row'></div>
      </div>
    </div>
   
  )
}

export default App
