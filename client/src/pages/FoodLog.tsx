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
  const [loading, setLoading] = useState(false);

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
          </div>
        </div>
       </div>
    </div>
  )
}

export default FoodLog
