import { useState } from "react";
const App = () => {
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(5);

  const incCount = () => {
    setCount(count + 1);
  };

  const decCount = () => {
    setCount(prev => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>App Component</h1>
      <div>
        <p>Count: {count}</p>
        <p>Limit: {limit}</p>
        <button onClick={incCount} disabled={count === limit}>
          Increment
        </button>
        <button onClick={decCount} disabled={count === 0}>
          Decrement
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default App;
