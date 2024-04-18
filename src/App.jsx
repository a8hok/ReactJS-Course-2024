import { Suspense } from "react";

// A component that fetches data asynchronously
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data loaded successfully");
    }, 2000);
  });
};

// A component that displays the fetched data
const DataDisplay = async () => {
  const data = await fetchData();
  console.log(data);
  return <div>{data}</div>;
};

// App component that uses Suspense to wait for data fetching
const App = () => {
  return (
    <div>
      <h1>React Suspense Example</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <DataDisplay />
      </Suspense>
    </div>
  );
};

export default App;
