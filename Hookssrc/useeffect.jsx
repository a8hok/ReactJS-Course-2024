import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

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

  const incCount = () => {
    console.log("Increment");
    setCount(count + 1);
  };

  return (
    <>
      <h1>Count{count}</h1>

      <button onClick={incCount}>Increment</button>
    </>
  );
}

export default App;
