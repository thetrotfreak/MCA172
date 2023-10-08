import { createContext, useContext, useEffect, useReducer } from "react";

import DataReducer from "./DataReducer";

const initialState = {
  todo: [],
  todoName: "",
};

const DataContext = createContext();

const useData = () => useContext(DataContext);

const DataProvider = ({ children }) => {
  const [data, setData] = useReducer(DataReducer, initialState);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, useData };
