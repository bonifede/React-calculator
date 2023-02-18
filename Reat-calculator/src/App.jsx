import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState("")

  const handleclick = (e) => {
     setResult (result.contcat)(e.tarjet.id)
  };

  const clear = () => {
    setResult("")
  };

  const deleteElement = () => {
    setResult(result.slice(0,-1))
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString())
    } catch (error) {
        setResult("Invalid")
    }
  };


  return (
    <div className="calculator">
      <input type="text" value={result} disabled />

      <div className="buttons">
        <button className='operator' onClick={clear}>AC</button>
        <button className='operator' onClick={deleteElement}>DE</button>
        <button id='.' className='operator' onClickCapture={handleclick}>.</button>
        <button id='/' className='operator' onClick={handleclick}>/</button>

        <button className="number">7</button>
        <button className="number">8</button>
      </div>
    </div>


   
  );
}

export default App
