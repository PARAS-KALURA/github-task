import React, { useEffect, useState } from 'react'
import { useFormStatus } from 'react-dom'

const App = () => {
  
  const [count, setCount] = useState(0);

  useEffect(() => {
     document.title = `Your Count Count: ${count}`;
  },[count])

  return (
    <div>
      <h1
      style={{
        color: "white",
      }}
      >Count:{count}</h1>
      <button
      onClick={() => setCount(count+1)}
      >Increase</button>
    </div>
  )
}

export default App