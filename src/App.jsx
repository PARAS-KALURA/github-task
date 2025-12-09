import React from "react";

const App = () => {
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
      </div>
    </>
  );
};

export default App;
