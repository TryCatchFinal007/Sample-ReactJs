import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="m-5 p-5 text-4xl font-semibold text-center bg-sky-300 border-2 border-sky-500 hover:bg-amber-800 hover:text-yellow-400">You are welcome. For visiting our website.</div>
    </>
  )
}

export default App
