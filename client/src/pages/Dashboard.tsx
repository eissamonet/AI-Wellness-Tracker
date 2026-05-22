import { useState } from "react"
import { getMotivationalMessage } from "../assets/assets"
import { useAppContext } from "../context/AppContext"
import type { FoodEntry, ActivityEntry } from "../types"


const Dashboard = () => {

  const {user, allActivityLogs, allFoodLogs} = useAppContext()
  const[todayFood, setTodayFood] = useState<FoodEntry>([])
  const[todayActivities, settodayActivities] = useState<ActivityEntry>([])

  const DAILY_CALORIE_LIMIT: number = user?.dailyCalorieIntake || 2000;

  const motivation = getMotivationalMessage()

  return (
    <div className="page-containter">
       {/* header */}
       <div className="dashboard-header">
          <p className="text-emerald-100 text-sm font-medium">Welcome Back!</p>
          <h1 className="text-2xl font-bold mt-1">{`Hey there! ${user?.username}`}</h1>

          {/* motivation card */}
          <div className="mt-6 bg-white/20 backdrop-blur-sm rounded-2xl p-4">
            <div className="flex items-center gap-3">
              <span></span>
              <p></p>
            </div>
          </div>


       </div>
    </div>
  )
}

export default Dashboard
