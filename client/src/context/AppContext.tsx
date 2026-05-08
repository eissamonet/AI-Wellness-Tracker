import { createContext, useContext } from "react";
import { initialState } from "../types";


const AppContext = createContext(initialState)

export const AppProvider = ({children} : {children: React.ReactNode})=> {

    const value = {}

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}

export const useAppContext = () => useContext(AppContext);