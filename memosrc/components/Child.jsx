import React from "react";
import SubChild from "./SubChild";
function Child() {
  console.log("child render");
  return (
    <>
      <div>Child</div>
      <SubChild />
    </>
  );
}

export default React.memo(Child);

// Props level
// component level
// diff check