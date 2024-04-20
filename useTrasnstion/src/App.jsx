import { useEffect, useLayoutEffect } from "react";

function App() {
  useEffect(() => {
    console.log("useEffect");
  });
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  });
  return <div>App</div>;
}

export default App;
