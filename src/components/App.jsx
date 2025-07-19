import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    setNum(name);
    e.preventDefault();
  };
  return (
    <div className="container">
      <form>
        <h1>Hello {num}</h1>
        <input
          type="text"
          placeholder="What's your name?"
          value={name}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
