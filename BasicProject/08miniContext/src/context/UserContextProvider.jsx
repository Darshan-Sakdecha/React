import React, { useState } from "react";
import UserContext from "./UserContext";

// In React, {children} is a special prop that represents whatever JSX (or components) you wrap inside another component when you use it.
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
