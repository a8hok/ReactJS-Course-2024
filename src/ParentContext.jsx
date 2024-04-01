// Props drilling
// Context API

// Provider, Consumer

// User data handling
// JWT token
// Theming

// large application

// redux, Zustand

// import UserContext from "./Context/UserContext";

// import { useContext } from "react";

import BasicContextComp from "./BasicContextComp";

import useUser from "./CustomHook/useUser";

function App() {
  // const user = {
  //   name: "from compoenent",
  //   email: "JG8v8@example.com",
  //   phone: "123-456-7890",
  // }

  // const user = useContext(UserContext);

  return (
    // <UserContext.Provider value={useUser()}>
    // </UserContext.Provider>
    <BasicContextComp user={useUser()} />
  );
}

export default App;
