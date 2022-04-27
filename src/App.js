import './App.css';
import Button from './components/button.jsx'
import Input from './components/Input.jsx'
import Clear from './components/Clear.jsx'
import { useState } from 'react'

function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
  }

  return (
    <div className='App'>
      <div className='calculator-container'>
        <Input screen={input}/>
        <div className='fila'>
          <Button  manageClick={addInput}>1</Button>
          <Button  manageClick={addInput}>2</Button>
          <Button  manageClick={addInput}>3</Button>
          <Button  manageClick={addInput}>+</Button>
        </div>
        <div className='fila'>
          <Button manageClick={addInput}>4</Button>
          <Button manageClick={addInput}>5</Button>
          <Button manageClick={addInput}>6</Button>
          <Button manageClick={addInput}>-</Button>
        </div>
        <div className='fila'>
          <Button manageClick={addInput}>7</Button>
          <Button manageClick={addInput}>8</Button>
          <Button manageClick={addInput}>9</Button>
          <Button manageClick={addInput}>*</Button>
        </div>
        <div className='fila'>
          <Button manageClick={addInput}>=</Button>
          <Button manageClick={addInput}>0</Button>
          <Button manageClick={addInput}>.</Button>
          <Button manageClick={addInput}>/</Button>
        </div>
        <div className='fila'>
          <Clear>Clear</Clear>
        </div>
      </div>
    </div>
  );
}

export default App;
