import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext"
import type { ActivityEntry } from "../types";

const ActivityLog = () => {

  const {allActivityLogs, setAllActivityLogs} = useAppContext();

  const [activities, setActivities] = useState<ActivityEntry[]>([])
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({name: '', duration: 0, caloriesBurned: 0})
  const [error, setError] = useState('')

  const today = new Date().toISOString().split('T')[0];

  const loadActivities = () => {
      const todaysActivities = allActivityLogs.filter((a: ActivityEntry) => a.createdAt?.split('T')[0] === today);
      setActivities(todaysActivities);
    }

    useEffect(() => {
      (() => {
      loadActivities()
    })();
    },[allActivityLogs])

    const totalMinutes: number = activities.reduce((sum, activity) => sum + activity.duration, 0);


  return (
    <div className="page-container">
       ActivityLog
    </div>
  )
}

export default ActivityLog
