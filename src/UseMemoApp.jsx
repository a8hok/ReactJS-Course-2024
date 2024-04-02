import React, { useMemo } from "react";

function App() {
  console.log("parent render");

  const [count, setCount] = React.useState(0);
  const [num, setNum] = React.useState([]);

  const incCount = () => {
    setCount(count + 1);
  };

  const generateRandomNumber = () => {
    console.log("generate random number");
    const ranNum = parseInt(1000 * Math.random(), 10);
    setNum([...num, ranNum]);
  };

  function calculateExpensiveLogic(n) {
    console.log("calculateExpensiveLogic called");
    for (let i = 0; i < 1000000000; i++) {
      n += 12131313;
    }
    return parseInt(n * 1289, 10);
  }

  const bigNum = useMemo(() => calculateExpensiveLogic(count), [count]);
  //   const bigNum = calculateExpensiveLogic(count);

  return (
    <>
      <h1>Count {count} </h1>
      <h1>Big Number {bigNum} </h1>
      <button onClick={incCount}>Increment</button>

      <div>
        Random number:
        {num.map((num, index) => {
          return <p key={index}>{num}</p>;
        })}
      </div>
      <button onClick={generateRandomNumber}>Generate Random</button>
    </>
  );
}

export default App;
