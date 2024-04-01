import { useContext } from "react";

import UserContext from "../Context/UserContext";

const useUser = () => {
  return useContext(UserContext);
};

export default useUser;
