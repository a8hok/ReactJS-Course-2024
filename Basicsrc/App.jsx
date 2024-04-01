import Props from "./components/props";
import State from "./components/state";

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
      <State />
      <Props details={details} callfromChild={callfromChild} />
    </>
  );
}

export default App;
