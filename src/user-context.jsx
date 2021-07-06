import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const ContextWrapper = (props) => {
  const setDefaultVaule = () => {
    const user = localStorage.getItem("user");

    if (user) {
      return true;
    }
    return false;
  };

  const [isLoggedIn, setIsLoggedIn] = useState(setDefaultVaule);
  const [numOfItems, setNumOfItems] = useState(0);

  const user = { isLoggedIn, setIsLoggedIn, numOfItems, setNumOfItems };
  console.log(props.children);

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};
