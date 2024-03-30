import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// JSX syntax
// const myElement = <h1 className="heading">Hello</h1>;

// babel transpiler
// const myElement = React.createElement("h1", { class = "heading"}, "Hello");

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
