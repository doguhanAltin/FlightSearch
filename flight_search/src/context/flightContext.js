import { FC, createContext, useState } from 'react';


export const flightContext = createContext();

export const ContextProvider = ({children}) => {
    const [data, setData] = useState();
    const [filteredData,setFilteredData]=useState();

  
    return (
      <flightContext.Provider value={{data,setData,filteredData,setFilteredData}}>
        {children}
      </flightContext.Provider>
    )
  }
  