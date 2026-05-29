import { useState } from "react";
import { useAppContext } from "../context/AppContext"
import type { FormData, FoodEntry } from "../types";

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

  const totalCalories = entries.reduce((total, entry) => total + entry.calories, 0);

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
    </div>
  )
}

export default FoodLog
