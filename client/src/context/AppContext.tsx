import { createContext, useContext, useState } from "react";
import { type ActivityEntry, type FoodEntry, initialState, type User } from "../types";
import { useNavigate } from "react-router-dom";


const AppContext = createContext(initialState)

export const AppProvider = ({children} : {children: React.ReactNode})=> {

    const navigate = useNavigate()
    const [user, setUser] = useState<User>(null)
    const [isUserFetched, setIsUserFetched] = useState(false)
    const [onboardingCompleted, setOnboardingCompleted] = useState(false)
    const [allFoodLogs, setAllFoodLogs] = useState<FoodEntry[]>([])
    const [allActivityLogs, setAllActivityLogs] = useState<ActivityEntry[]>([])

    const value = {}

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}

export const useAppContext = () => useContext(AppContext);