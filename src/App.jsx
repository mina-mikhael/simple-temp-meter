import "./App.css";
import React, { useState } from "react";

function App() {
  const [temp, setTemp] = useState(20);
  return (
    <div className="wrapper">
      <div className="main__container">
        <div className={temp >= 20 ? "temp red" : "temp blue"}>{temp}&#8451;</div>
        <div className="btns__container">
          <button
            className="btn plus"
            onClick={() => {
              setTemp(temp + 1);
            }}>
            +
          </button>
          <button
            className="btn minus"
            onClick={() => {
              setTemp(temp - 1);
            }}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
