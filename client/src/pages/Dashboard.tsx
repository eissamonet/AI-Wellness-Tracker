import { useEffect, useState } from "react"
import { getMotivationalMessage } from "../assets/assets"
import { useAppContext } from "../context/AppContext"
import type { FoodEntry, ActivityEntry } from "../types"


const Dashboard = () => {

  const {user, allActivityLogs, allFoodLogs} = useAppContext()
  const[todayFood, setTodayFood] = useState<FoodEntry>([])
  const[todayActivities, setTodayActivities] = useState<ActivityEntry>([])

  const DAILY_CALORIE_LIMIT: number = user?.dailyCalorieIntake || 2000;

  // load user data
  const loadUserData = () => {
    const today = new Date().toISOString().split("T")[0];
    const foodData = allFoodLogs.filter((f:FoodEntry)=> f.createdAt?.split("T")[0] === today)
    setTodayFood(foodData)
    const activityData = allActivityLogs.filter((a:ActivityEntry)=> a.createdAt?.split("T")[0] === today)
    setTodayActivities(activityData)
  }

  useEffect(() => {
    (()=>{loadUserData()})();

  },[allActivityLogs, allFoodLogs])

  const totoalCalories: number = todayFood.reduce((sum, item)=> sum + item.calories, 0)

  const remainingCalories: number = DAILY_CALORIE_LIMIT - totoalCalories;

  const totalActiveMinutes: number = todayActivities.reduce((sum, item)=> sum + item.duration, 0)

  const totalBurned: number = todayActivities.reduce((sum, item)=> sum + (item.calories || 0), 0)

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
