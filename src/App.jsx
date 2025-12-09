import React, { useState } from "react";

const App = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    try {
      setError("");
      setLoading(true);

      const response = await fetch("https://picsum.photos/400");

      if (!response.ok) {
        throw new Error("Failed to fetch image. Try again.");
      }

      setImageUrl(response.url);

    } catch (err) {
      setImageUrl("");
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        marginTop: "10px",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "10px",
        background: "#111",
        color: "white",
      }}
    >
      <h1>Random Image Generator</h1>

      <button
        onClick={generateImage}
        style={{
          padding: "10px 18px",
          background: "#4CAF50",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
          color: "white",
        }}
      >
        {loading ? "Please wait..." : "Generate Image"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {imageUrl && !loading && (
        <img
          src={imageUrl}
          alt="Random"
          style={{
            width: "400px",
            borderRadius: "12px",
            border: "2px solid #888",
            padding: "10px",
          }}
        />
      )}
    </div>
  );
};

export default App;
