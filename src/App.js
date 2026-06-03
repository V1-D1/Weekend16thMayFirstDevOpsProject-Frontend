import React, { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  const [reply, setReply] = useState("");

  // GET request
useEffect(() => {
  fetch("http://a72e3e08f48164773bbbbb17ffb2c7b2-2116167387.ap-south-1.elb.amazonaws.com/api/hello")
    .then(res => res.json())
    .then(data => setMsg(data.message));
}, []);

  // POST request
  const sendData = async () => {
    const res = await fetch("http://localhost:5000/api/greet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    const data = await res.json();
    setReply(data.message);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Simple Full Stack App</h2>

      <p><b>Backend says:</b> {msg}</p>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={sendData}>Send</button>

      <p>{reply}</p>
    </div>
  );
}

export default App;
