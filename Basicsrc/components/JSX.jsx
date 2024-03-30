import React from "react";

function App() {
  const myName = "Hello my name React";
  // const sayMyName = () => {
  //   alert("my name is react");
  // };
  function sayMyName() {
    alert("my name is react");
  }

  const isValid = false;

  const progLang = ["HTML", "CSS", "JS"];

  const basicExample = () => (
    <>
      <div>
        {/* Intro to app */}
        App
        {isValid && <h1>Hello World {myName}</h1>}
      </div>
      <div>
        <p>jsdbvjhsd vsdkjvbskdv skjdvks{sayMyName()}</p>
      </div>
      {progLang.map((lang, index) => {
        return <p key={index}>{lang}</p>;
      })}
    </>
  );

  return (
    // React fragment
    // <>{basicExample()}</>
    <>
      <div className={"App"} style={{ color: "red" }}>
        {/* <button onClick={() => alert("my name is react from internal ")}>
          Click me
        </button> */}
        <button onClick={sayMyName}>Click me</button>
      </div>
    </>
  );
}

export default App;
