import React, { useState } from 'react'


const App = () => {

  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    const trimmed = input.trim();
     
    if(!trimmed) return;

    setTasks([...tasks, trimmed]);
    setInput('');
  

  }


  return (
    <div
    style={{
      width: "70%",
        minWidth: "300px",
        maxWidth: "800px",
         margin: "0 auto",
        marginTop: "50px",
    }}
    >
      <div
     style={{
    backgroundColor: "#161B21",
    margin: "0 auto",
    marginTop: "50px",
    padding: "20px",
    border: "1px solid gray",
    width: "100%",
    maxWidth: "800px",
    textAlign: "left",
    minHeight: "200px",
    borderRadius: "4px",
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  }}
      >
        <div
        style={{
           padding: "14px 16px",
            borderBottom: "1px solid #30363d",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            gap: "8px",
        }}
        >
          <div
          style={{
            color: "white",
            fontSize: "22px",
          }}
          >
            <span>❗</span>
            <span>GitHub's Theme</span>
          </div>

        </div>

        <div>
<input
  value={input}
  onChange={(e) => setInput(e.target.value)}
  
onKeyDown={(e) => {
  if(e.key === "Enter") {
    handleAddTask();
  }
}}

  style={{
    color: "white",
    padding: "12px",
    backgroundColor: "black",
    margin: "6px",
    border: "none",
    width: "90%",
    borderRadius: "7px",
    marginRight: "8px",
  }}
  type="text"
  placeholder="Create a new task..."
/>


        <button
        onClick={handleAddTask}
        style={{
          backgroundColor: "green",
          border: "none",
          color: "white",
          padding: '9px 6px',
          borderRadius: "4px",
          gap: "4px",
          cursor: "pointer",

        }}
        >Add</button>

        </div>

        <hr style={{ border: "1px solid #30363d", marginTop: "10px" }} />


       {tasks.length === 0? ( <p
       style={{
        textAlign: "center",
        color: "#6e7681",
        padding: "30px 0",   
       }}
       >
        No tasks yet — create one above.
       </p>): (
        <ul>
          {tasks.map((task,index)=> {
            <li key={index}>{task}</li>
          })}
        </ul>
       )}
       
      

      </div>
    </div>
  )
}

export default App