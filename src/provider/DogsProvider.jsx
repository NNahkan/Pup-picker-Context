import React, { createContext, useContext, useState } from "react";

const DogsContext = createContext();

export const DogsProvider = ({ children }) => {
  const [dogss, setDogs] = useState("dog");
  const name = "ali";
  return (
    <DogsContext.Provider value={{ dogss, name }}>
      {children}
    </DogsContext.Provider>
  );
};

export const useDogs = () => {
  return useContext(DogsContext);
};
