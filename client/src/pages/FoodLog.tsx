import { useState } from "react";
import { useAppContext } from "../context/AppContext"
import type { FoodEntry } from "../types";

const FoodLog = () => {
  const {allFoodLogs, setAllFoodLogs} = useAppContext();

  const [entries, setEntries] = useState<FoodEntry[]>([]);
  return (
    <div>
       FoodLog
    </div>
  )
}

export default FoodLog
