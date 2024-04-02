import React from "react";
function CallbackChild({ num, generateRandomNumber }) {
  console.log("callback child render");
  return (
    <>
      <div>Callback Child</div>
      {num.map((num, index) => {
        return <p key={index}>{num}</p>;
      })}
      <button onClick={generateRandomNumber}>Generate Random</button>
    </>
  );
}

export default React.memo(CallbackChild);
