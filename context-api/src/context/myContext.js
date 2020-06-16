import React, { createContext, useState } from "react";

// const initState = { name: "Bilal", age: "37" };

export const myContext = createContext();

export const MyContextProvider = ({ children }) => {
  const initState = { name: "Bilal", age: "37" };
  const num = useState(0);
  return (
    <myContext.Provider value={{ initState, num }}>
      {children}
    </myContext.Provider>
  );
};
