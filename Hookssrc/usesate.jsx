// hooks 16.8
// functional component
// react hooks
// usestate

// when ever state changes component will be re-render

// setCount async function

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decCount = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>Count: {count}</h1>

      <button onClick={increaseCount}>Increment</button>
      <button onClick={decCount}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
