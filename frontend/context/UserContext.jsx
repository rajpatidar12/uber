import React, { createContext, useState } from "react";

export const UserDataContext = createContext();

const UserContext = ({ children }) => {
  const [user, setuser] = useState({
    email: "",
    fullName: "",
    lastName: "",
  });

  return (
    <UserDataContext.Provider value={user}>{children}</UserDataContext.Provider>
  );
};

export default UserContext;
