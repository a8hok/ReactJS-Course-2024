import { useReducer } from "react";

function App() {
  const initialState = {
    count: 0,
    limit: 5,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "INC_COUNT":
        return { ...state, count: state.count + 1 };
      case "DEC_COUNT":
        return { ...state, count: state.count - 1 };
      case "RESET":
        return { ...state, count: 0 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const incCount = () => {
    dispatch({ type: "INC_COUNT" });
  };

  const decCount = () => {
    dispatch({ type: "DEC_COUNT" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div>
      <h1>App Component</h1>
      <div>
        <p>Count: {state.count}</p>
        <p>Limit: {state.limit}</p>
        <button onClick={incCount} disabled={state.count === state.limit}>
          Increment
        </button>
        <button onClick={decCount} disabled={state.count === 0}>
          Decrement
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;