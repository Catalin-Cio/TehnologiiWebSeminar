import React, { useState } from "react";

const ConditionalComponent = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Conditional Rendering Example</h1>
      <button onClick={() => setIsToggled(!isToggled)}>
        {isToggled ? "Arată Varianta A" : "Arată Varianta B"}
      </button>

      {isToggled ? (
        <div style={{ color: "green", marginTop: "20px" }}>
          <h2>Varianta A</h2>
          <p>Această variantă este afișată când isToggled este true!</p>
        </div>
      ) : (
        <div style={{ color: "blue", marginTop: "20px" }}>
          <h2>Varianta B</h2>
          <p>Această variantă este afișată când isToggled este false!</p>
        </div>
      )}
    </div>
  );
};

export default ConditionalComponent;
