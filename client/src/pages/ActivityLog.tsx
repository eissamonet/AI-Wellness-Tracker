import { useState } from "react";
import { useAppContext } from "../context/AppContext"
import { ActivityEntry } from "../types";

const ActivityLog = () => {

  const {allActivityLogs, setAllActivityLogs} = useAppContext();

  const [activity, setActivity] = useState<ActivityEntry[]>([])
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({name: '', duration: 0, caloriesBurned: 0})

  return (
    <div>
       ActivityLog
    </div>
  )
}

export default ActivityLog
