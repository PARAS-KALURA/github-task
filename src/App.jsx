import React, { useState } from 'react'

const App = () => {

   const[imageUrl, setImageUrl] = useState("");

   const generateImage = async() => {
    const response = await fetch("https://picsum.photos/400");
    setImageUrl(response.url);
   }

  return (
    <div
    style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      marginTop: "10px",
      alignItems: "center",
      color: "white",
      gap: "10px",
      flexDirection: "column",
    }}
    >
     <h1
     >Random Image Generator</h1>
     <button
     onClick={generateImage}
     style={{
      padding: "7px",
      borderRadius: "5px",
      border: "none",
     }}
     >Generate Image</button>

     <img src="{imageUrl}" alt="img" />

    </div>
  )
}

export default App