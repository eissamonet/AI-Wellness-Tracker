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
    <div>
       FoodLog
    </div>
  )
}

export default FoodLog
