import React, { useEffect, useState } from 'react'

const App = () => {
 
  const[text,setText] = useState("");

   useEffect(() => {
    const saved = localStorage.getItem("savedItem");
    if(saved) {
      setText(saved);
    }
  });

    useEffect(() => {
    localStorage.setItem("savedText", text);
    
  },[text]);


  return (
    <div>
      <input type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  )
}

export default App