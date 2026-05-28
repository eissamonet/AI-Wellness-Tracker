import { useState } from "react";
import { useAppContext } from "../context/AppContext"

const FoodLog = () => {
  const {allFoodLogs, setAllFoodLogs} = useAppContext();

  const [entries, setEntries] = useState(allFoodLogs);
  return (
    <div>
       FoodLog
    </div>
  )
}

export default FoodLog
