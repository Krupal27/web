import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  let Increment = () => {
    setCount((prevcount) => prevcount + 1)
  }
  let Decrement = () => {
    setCount((prevcount) => prevcount + 1)
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </>
  )
}

export default App
