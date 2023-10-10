import { createContext, useContext, useEffect, useReducer } from "react";

import DataReducer from "./DataReducer";
import { postFiles } from "../apis/apis";


const initialState = {
 files:[],
 fileContent: {
    title: "",
    content: ""
 },
 content : ""
};

const DataContext = createContext();

const useData = () => useContext(DataContext);

const DataProvider = ({children}) => {
const files = {
  title: "file1",content: "abcdefghijklmnop"
}

    const [data , setData] = useReducer(DataReducer, initialState);

    return(
        <DataContext.Provider value={{data, setData}}>
            {children}
        </DataContext.Provider>
    );
};

export {DataProvider, useData}