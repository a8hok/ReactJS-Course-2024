import { createContext } from "react";

const user = {
  name: "John Doe",
  email: "JG8v8@example.com",
  phone: "123-456-7890",
};

// UserContext.Provider
// UserContext.Consumer

// const UserContext = createContext();


const UserContext = createContext(user);


export default UserContext;
