import { useState } from "react";
import Child from "./components/Child";

function App() {
  console.log("parent render");
  const [count, setCount] = useState(0);
  const incCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>Parent</div>
      <div>Count: {count}</div>
      <button onClick={incCount}>Increment</button>
      <Child />
    </>
  );
}

export default App;
