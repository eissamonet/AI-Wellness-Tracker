import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext"
import type { ActivityEntry } from "../types";
import Card from "../components/ui/Card";
import { quickActivities } from "../assets/assets";
import { PlusIcon } from "lucide-react";
import Input from "../components/ui/Input";

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

    const handleQuickAdd = (activity: {name: string, rate: number})=> {
      setFormData({
        name: activity.name,
        duration: 30,
        calories:30 * activity.rate
      })
      setShowForm(true);
    }

    const handleDurationChange = (val: string | number) => {
      const duration = Number(val);
      const activity = quickActivities.find(a => a.name === formData.name);

      let calories = formData.calories;
      if(activity) {
        calories = duration * activity.rate;
      }
      setFormData({...formData, duration, calories})
    }

    const totalMinutes: number = activities.reduce((sum, activity) => sum + activity.duration, 0);


  return (
    <div className="page-container">
       {/* header */}
       <div className="page-header">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Activity Log</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Track Your Workouts</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-500 dark:text-slate-400">Active Today</p>
            <p className="text-xl font-bold text-blue-600 dark:text-blue-400">{totalMinutes} mins</p>
          </div>
        </div>
       </div>

       <div className="page-content-grid">
        {/* quick add section */}
        {!showForm && (
          <div className="space-y-4">
            <Card>
              <h3 className="font-semibold text-slate-700 dark:text-slate-200 mb-3">Quick Add</h3>
              <div>
                {quickActivities.map((activity)=> (
                  <button onClick={() => handleQuickAdd(activity)} key={activity.name} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl text-sm font-medium text-slate-700
                  dark:text-slate-200 transition-colors">
                    {activity.emoji} {activity.name}
                  </button>
                ))}
              </div>
            </Card>
            <button className="w-full" onClick={()=> setShowForm(true)}>
              <PlusIcon className='size-5' />
              Add Custom Activity
            </button>
          </div>
        )}

        {/* add form */}
        {showForm && (
          <Card className="border-2 border-blue-200 dark:border-blue-800">
             <h3 className="font-semibold text-slate-800 dark:text-white mb-4">New Activity</h3>
             <form className="space-y-4" onClick={handleSubmit}>
              <Input label="Activity Name" placeholder="ex, Morning Run" required value={formData.name}
              onChange={(v) => setFormData({...formData, name: v.toString()})}/>

              <div className="flex gap-4">

                <Input label="Duration (minutes)" type="number" className="flex-1" placeholder="ex, 30" min={1} max={300} required value={formData.duration}
                onChange={handleDurationChange}/>

                <Input label="Calories Burned" type="number" className="flex-1" placeholder="ex, 200" min={1} max={2000} required value={formData.calories}
                onChange={(v) => setFormData({...formData, calories: Number(v)})}/>
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
             </form>
          </Card>

        )}

        {/* activities list */}
       </div>
    </div>
  )
}

export default ActivityLog
