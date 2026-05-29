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
            <h1>Food Log</h1>
            <p>Track Your Daily Intake</p>
          </div>
          <div></div>
        </div>
       </div>
    </div>
  )
}

export default FoodLog
