// DOM level manipulation
// useRef => no re-render => any update in useRef will not trigger render
// state variable => to store prev state value inside useRef
// import { useRef } from "react";
// same obj refer ever render
// initial value => useRef(null)

// Class component
// React.createRef()  // to create reference in class components
// each render each new ref obj
// no initial value

import { useRef } from "react";

function useRefComp() {
  const inputRef = useRef(null);
  // const [stateVal, setStateVal] = useState(null);

  const handleValue = () => {
    // inputRef.current.focus();
    console.log(inputRef.current.value);
  };

  return (
    <>
      <input ref={inputRef} />
      {/* <input value={stateVal} onChange={(e) => setStateVal(e.target.value)} /> */}
      <button onClick={handleValue}>Focus</button>
    </>
  );
}

export default useRefComp;
