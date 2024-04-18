import { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";

const fallBackComponent = <h1>Loading...</h1>;
const List = lazy(() => import("./List")); // ouside component

function App() {
  return (
    <>
      <ErrorBoundary fallback={<h2>Something went wrong</h2>}>
        <Suspense falback={fallBackComponent}>
          <List />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
