import React, { useState, useEffect } from "react";

const ConditionalEffect = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("Componenta s-a montat prima dată!");
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{message}</h1>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Crește counter</button>
    </div>
  );
};

export default ConditionalEffect;
