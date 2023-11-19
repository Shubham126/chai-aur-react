import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(0)

  // let counter = 26?

  const addValue =() => {
    // counter = counter + 1
    if(counter<20)
    {setCounter(counter + 1)}
    else{
      console.error("cannot increase the value above 20")
    }
  }

  const removeValue =() => {
    if(counter>0)
    {setCounter(counter - 1)}
    else{
      console.error("cannot decrease the value below 0")
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button 
      onClick={addValue}> Add Value </button>
      <br />
      <button
      onClick={removeValue}> Remove value</button>
    </>
  )
}

export default App
