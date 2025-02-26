import { useState } from 'react';
import './App.css';
import freeCodeCamp from './assets/freecodecamp-logo.png';
import Button from './components/Button';
import Display from './components/Display';
import Clear from './components/Clear';
import { evaluate } from 'mathjs';
function App() {
  const [input, setInput] = useState('');
  const addInput = (val)=>{
    setInput(input + val);
  }

  const clearInput = ()=>{
    setInput('');
  }

  const calculate= ()=>{
    if(input){
      setInput(evaluate(input));
    }else{
      alert("Please insert values");
    }
    
  }
  return (
    <div className='App'>
      <div className="logo-container">
      <img src={ freeCodeCamp } alt="freecodecamp logo" />
      </div>
      <div className='calculator-container'>
        <Display input={ input } id="display"/>
        <div className='row'>
          <Button id="one"   addInput={ addInput }>1</Button>
          <Button id="two"   addInput={ addInput }>2</Button>
          <Button id="three" addInput={ addInput }>3</Button>
          <Button id="sum"   addInput={ addInput }>+</Button>
        </div>
        <div className='row'>
          <Button id="four"   addInput={ addInput }>4</Button>
          <Button id="five"   addInput={ addInput }>5</Button>
          <Button id="six"    addInput={ addInput }>6</Button>
          <Button id="subtract"  addInput={ addInput }>-</Button>
        </div>
        <div className='row'>
          <Button id="seven"   addInput={ addInput }>7</Button>
          <Button id="eight"   addInput={ addInput }>8</Button>
          <Button id="nine"    addInput={ addInput }>9</Button>
          <Button id="multpily"  addInput={ addInput }>*</Button>
        </div>
        <div className='row'>
          <Button id="zero"    addInput={ addInput }>0</Button>
          <Button id="equals"  addInput={ calculate }>=</Button>
          <Button id="decimal" addInput={ addInput }>.</Button>
          <Button id="divide"  addInput={ addInput }>/</Button></div> 
        <div className='row'>
          <Clear clearInput= { clearInput } > Clear </Clear>
        </div>
      </div>
    </div>
   
  )
}

export default App
