import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

let [counter, setCounter] = useState(0)

const addValue = () => {
  //counter=counter+1;
  if(counter<20){
  setCounter(counter+1);
}
}

const removeValue = () => {
  //counter=counter-1;
  if(counter>0){
  setCounter(counter-1);
  }
}

  return (
    <>
      <br/>
      <h1>Counter App</h1>

      <h2>Count: {counter}</h2>

  
      <button onClick={addValue}>Add value {counter}</button>
      <br/>
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
