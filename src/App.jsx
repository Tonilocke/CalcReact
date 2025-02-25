import { useState } from 'react';
import './App.css';
import freeCodeCamp from './assets/freecodecamp-logo.png';
import Button from './components/Button';
import Display from './components/Display';
import Clear from './components/Clear';
function App() {
  const [input, setInput] = useState(0);

  return (
    <div className='App'>
      <div className="logo-container">
      <img src={ freeCodeCamp } alt="freecodecamp logo" />
      </div>
      <div className='calculator-container'>
        <Display input={ input } />
        <div className='row'>
          <Button id="one"   input = { input } setInput={ setInput }>1</Button>
          <Button id="two"   input = { input } setInput={ setInput }>2</Button>
          <Button id="three" input = { input } setInput={ setInput }>3</Button>
          <Button id="sum">+</Button>
        </div>
        <div className='row'>
          <Button id="four" input = { input } setInput={ setInput }>4</Button>
          <Button id="five" input = { input } setInput={ setInput }>5</Button>
          <Button id="six"  input = { input } setInput={ setInput }>6</Button>
          <Button id="subtract">-</Button>
        </div>
        <div className='row'>
          <Button id="seven" input = { input } setInput={ setInput }>7</Button>
          <Button id="eight" input = { input } setInput={ setInput }>8</Button>
          <Button id="nine"  input = { input } setInput={ setInput }>9</Button>
          <Button id="multpily">*</Button>
        </div>
        <div className='row'>
          <Button id="zero" input = { input } setInput={ setInput }>0</Button>
          <Button id="equals">=</Button>
          <Button id="decimal" input = { input } setInput={ setInput }>.</Button>
          <Button id="divide">/</Button></div> 
        <div className='row'></div>
      </div>
    </div>
   
  )
}

export default App
