import React from "react";
import "./style.css";
import FunctionalComponent from "./FunctionalComponent";
import ClassComponent from "./ClassComponent"

export default function App() {
  return (
    <div>
      <h2>Функциональный компонент</h2>
      <FunctionalComponent />
      <hr />
      <h2>Классовый компонент</h2>
      <ClassComponent />
    </div>
  );
}
