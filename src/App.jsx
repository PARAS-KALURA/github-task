import React, { useState } from 'react'

const App = () => {

  const[city, setCity] = useState("");

 

  return (
    <div >
      <div
      style={{
        border: "2px solid blue",
        padding: "10px",
        borderRadius: "20px",
        textAlign: "center",
         maxHeight: "400px", maxWidth: "600px",
      }}
      >
           <h2
           style={{color: "white", }}
           >Weather App</h2>

           <input
           style={{
            borderRadius: "4px",
            border: "none",
            padding: "16px",
           }}
           onChange={setCity}
           type="text" placeholder='Search City' />

           <button
           style={{
            marginLeft: "4px",
            border: "none",
            padding: "13px",
            borderRadius: "4px",
           }}
           >👉</button>

           <p
           style={{
            textAlign: "center",
            border: "2px solid blue",
            borderRadius: "5px",
            minWidth: "200px",
            padding: "5px",

           }}
           >
            
            City: {city}</p>


      </div>

    </div>
  )
}

export default App