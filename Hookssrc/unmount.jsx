import { useEffect, useState } from "react";

function ChildComponent() {
  return <div>Child Component</div>;
}

function App() {
  const [showChild, setShowChild] = useState(true);

  useEffect(() => {
    console.log("App render");

    return () => {
      console.log("App unmount");
    };
  });

  return (
    <>
      {showChild && <ChildComponent text="name" />}
      <button onClick={() => setShowChild(!showChild)}>Toggle Child</button>
    </>
  );
}

export default App;
