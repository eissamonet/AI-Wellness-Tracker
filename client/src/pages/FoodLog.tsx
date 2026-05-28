import { useState } from "react";
import { useAppContext } from "../context/AppContext"
import type { FoodEntry } from "../types";

const FoodLog = () => {
  const {allFoodLogs, setAllFoodLogs} = useAppContext();

  const [entries, setEntries] = useState<FoodEntry[]>([])
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    calories: 0,
    mealType: '',
  })

  return (
    <div>
       FoodLog
    </div>
  )
}

export default FoodLog
