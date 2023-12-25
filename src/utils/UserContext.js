import { createContext } from "react";

const UserContext = createContext({
  loggerInUser: "Default User",
});

export default UserContext;
