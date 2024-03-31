import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [anotherCount, setAnotherCount] = useState(0);

  // it takes two parameters
  // 1. callback function
  // 2. dependency array (optional)
  useEffect(
    // callback function
    () => {
      console.log("App");
    },
    // dependency array
    // optional parameter
    []
  );

  useEffect(() => {
    console.log("Count", count);
  }, [count]);

  useEffect(() => {
    console.log("another Count", anotherCount);
  }, [anotherCount]);

  const incCount = () => {
    console.log("Increment");
    setCount(count + 1);
  };
  const incAnotherCount = () => {
    console.log("another Increment");
    setAnotherCount(anotherCount + 1);
  };

  return (
    <>
      <h1>Count{count}</h1>
      <h1>another Count{anotherCount}</h1>

      <button onClick={incCount}>Increment</button>
      <button onClick={incAnotherCount}>another Increment</button>
    </>
  );
}

export default App;
