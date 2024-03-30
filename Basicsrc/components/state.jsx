// Component level
// mutable -> user actions, api level, events
// hooks -> useState

import { useState } from "react";

function state() {
  const [name, setName] = useState("my name is ReactJS");

  function changeName() {
    setName("my name is got changed");
  }

  return (
    <>
      <div>{name}</div>
      <button onClick={changeName}>Change Name</button>
    </>
  );
}

export default state;
