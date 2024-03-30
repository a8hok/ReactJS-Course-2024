import React from "react";
import Props from "./props";

function App() {
  const details = {
    myName: "React",
    age: 18,
    address: "Hyderabad",
  };
  function callfromChild() {
    alert("Hello from child");
  }
  return (
    <>
      <Props details={details} callfromChild={callfromChild} />
    </>
  );
}

export default App;
