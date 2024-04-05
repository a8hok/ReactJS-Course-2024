import CallbackChild from "./components/CallbackChild";

import React, { useCallback } from "react";

function App() {
  console.log("parent render");

  const [count, setCount] = React.useState(0);
  const [num, setNum] = React.useState([]);

  const incCount = () => {
    setCount(count + 1);
  };

  const generateRandomNumber = useCallback(() => {
    const ranNum = parseInt(1000 * Math.random(), 10);
    setNum([...num, ranNum]);
  }, [num]);

  return (
    <>
      <h1>Parent</h1>
      <button onClick={incCount}>Increment</button>
      <CallbackChild num={num} generateRandomNumber={generateRandomNumber} />
    </>
  );
}

export default App;
