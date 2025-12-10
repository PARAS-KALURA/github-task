import React, { useState } from "react";

const App = () => {

  const[city, setCity] = useState("");
  const[loading, setLoading] = useState(null);
  const[weather, setWeather] = useState(false);
  const[error, setError] = useState("");

    const API_KEY = "YOUR_API_KEY_HERE";

    async function getWeather() {
     
      if(!city) {
        setError("Please enter a city name");
        return;
      }

      setLoading(true);
      setError("");
      setWeather(null);

    }

  function handleClick(e) {
    setCity(e.target.value);
  }

  

  return (
    <>
      <h2
        style={{
          color: "white",
          textAlign: "center",
          fontSize: "40px",
          marginBottom: "20px",
        }}
      >
        Weather App
      </h2>

      <div
        style={{
          borderRadius: "10px",
          textAlign: "center",
          border: "2px solid gray",
          padding: "20px",
          width: "90vw",
          maxWidth: "400px",
          margin: "0 auto",
          backgroundColor: "#2a2a2a",
        }}
      >
        <input
        onChange={handleClick}
          placeholder="Search City..."
          style={{
            width: "80%",
            padding: "12px",
            borderRadius: "10px",
            color: "black",
            backgroundColor: "white",
            fontSize: "18px",
            border: "none",
            outline: "none",
          }}
          type="text"
        />

       <p
       style={{
        color: "white",
        marginTop: "20px",
       }}
       >You Typed: {city}</p>

      </div>
    </>
  );
};

export default App;
