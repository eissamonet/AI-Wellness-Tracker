import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext"
import type { FormData, FoodEntry } from "../types";
import Card from "../components/ui/Card";
import { quickActivitiesFoodLog } from "../assets/assets";

const FoodLog = () => {
  const {allFoodLogs, setAllFoodLogs} = useAppContext();

  const [entries, setEntries] = useState<FoodEntry[]>([])
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    calories: 0,
    mealType: '',
  })
  const [loading, setLoading] = useState(false)

  const today = new Date().toISOString().split('T')[0];

   const loadEntries = () => {
    const todaysEntries = allFoodLogs.filter((entry:FoodEntry) => entry.createdAt?.split('T')[0] === today);
    setEntries(todaysEntries);
  }

  const totalCalories = entries.reduce((total, entry) => total + entry.calories, 0);

  useEffect(() => {
    (() => {
      loadEntries();
    })()
  },[allFoodLogs])



  return (
    <div className="page-container">
       {/* header */}
       <div className="page-header">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Food Log</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Track Your Daily Intake</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-500 dark:text-slate-400">Today's Total</p>
            <p className="text-xl font-bold text-emeral-600 dark:text-emerald-400">{totalCalories} kcal</p>
          </div>
        </div>
       </div>

       <div className="page-content-grid">
        {/* quick add section */}
        {!showForm && (
          <div className="space-y-4">
            <Card>
              <h3 className="font-semibold text-slate-700 dark:text-slate-200 mb-3">Quick Add</h3>
              <div className=" flex flex-wrap gap-2">
                {quickActivitiesFoodLog.map((activity)=> (
                  <button key={activity.name}>
                    {activity.emoji} {activity.name}
                  </button>
                ))}
              </div>
            </Card>
          </div>
        )}
       </div>

    </div>
  )
}

export default FoodLog
