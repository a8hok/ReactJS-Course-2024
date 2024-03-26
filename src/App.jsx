// import "./App.css";
// // import Header from "./components/ClassHeader";
// // import Mouting from "./components/Mounting";
// // import Updating from "./components/Updating";
// import Unmounting from "./components/Unmounting";

// function App() {
//   return (
//     <>
//       <p className="read-the-docs">
//         {/* <Header /> */}
//         {/* <Mouting /> */}
//         {/* <Updating />   */}
//         <Unmounting />
//       </p>
//     </>
//   );
// }

// export default App;

import ErrorBoundary from "./components/Error";

// Child component that may throw an error
const ChildComponent = () => {
  throw new Error("An error occurred in ChildComponent");
};

// Parent component that renders the ErrorBoundary and the ChildComponent
const ParentComponent = () => {
  return (
    <ErrorBoundary>
      <div>
        <h1>Parent Component</h1>
        <ChildComponent />
      </div>
    </ErrorBoundary>
  );
};

// App component that renders the ParentComponent
const App = () => {
  return (
    <div>
      <h1>App Component</h1>
      <ParentComponent />
    </div>
  );
};

export default App;
