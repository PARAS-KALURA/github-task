import React, { useEffect, useRef, useState } from 'react'



const App = () => {

 const[number, setNumber] = useState(0);


 const renderCount = useRef(1);



function handleClick() {
  setNumber(n => n + 1);
  
} 

 useEffect(() => {
   console.log("Renrenders");

  renderCount.current = renderCount.current + 1;

  console.log("Render Count:", renderCount.current);   
 })


  return (
    <div>
      <button
      onClick={handleClick}
      >Click me!</button>
     
     <p>{number}</p>
     <p>Component Rendered: {renderCount.current} times</p>

    </div>
  )
}

export default App