import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const increMent = () => {
    // setCount(count + 1);

    // setCount((prevCount) => prevCount + 1);
    // recommended way to update the state
    // contextAPI => native approach
    // redux => most used
    // Zustand => modern

    setCount(function (prevCount) {
      console.log(prevCount);
      return prevCount + 1;
    });
  };
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={increMent}>Increment</button>
    </>
  );
}

export default App;
