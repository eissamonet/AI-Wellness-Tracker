import { useState } from "react";
import { useAppContext } from "../context/AppContext"
import type { ActivityEntry } from "../types";

const ActivityLog = () => {

  const {allActivityLogs, setAllActivityLogs} = useAppContext();

  const [activity, setActivity] = useState<ActivityEntry[]>([])
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({name: '', duration: 0, caloriesBurned: 0})
  const [error, setError] = useState('')

  const today = new Date().toISOString().split('T')[0];

  const loadActivities = () => {
      const todaysActivities = allActivityLogs.filter((a: ActivityEntry) => a.createdAt?.split('T')[0] === today);
      setActivity(todaysActivities);
    }

  return (
    <div>
       ActivityLog
    </div>
  )
}

export default ActivityLog
