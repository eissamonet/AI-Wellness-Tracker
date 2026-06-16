import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext"
import { useTheme } from "../context/ThemeContext";
import type { ProfileFormData } from "../types";
import Card from "../components/ui/Card";
import { Calendar, Scale, Target, User } from "lucide-react";
import Button from "../components/ui/Button";
import { goalLabels } from "../assets/assets";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";

const Profile = () => {
  const {user, logout, fetchUser, allFoodLogs, allActivityLogs} = useAppContext()
  const {theme, toggleTheme} = useTheme()

  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState<ProfileFormData>({age: 0, weight: 0, height: 0, goal: 'maintain', dailyCalorieIntake: 2000, dailyCalorieBurn: 400})

  const fetchUserData = () => {
    if(user) {
      setFormData({
        age: user?.age || 0,
        weight: user?.weight || 0,
        height: user?.height || 0,
        goal: user?.goal || 'maintain',
        dailyCalorieIntake: user?.dailyCalorieIntake || 2000,
        dailyCalorieBurn: user?.dailyCalorieBurn || 400
       })
     }
  }

  useEffect(() => {
    (() => {
      fetchUserData()
    })()
  }, [user])

  if(!user || !formData) return null

  return (
    <div className="page-container">
      {/* header */}
      <div className="page-header">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
          Profile
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
          Manage Your Settings
        </p>
      </div>

      <div className="profile-content">
        {/* left col */}
        <Card>
          {/* card title  */}
          <div className="flex items-center gap-4 mb-6">
            <div className="siz-12 rounded-xl bg-linear-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
              <User className="size-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-800 dark:text-white">
                Your Profile
              </h2>
              <p className="text-slate-500 dark:text-slate-400">
                Member Since{" "}
                {new Date(user?.createdAt || "").toLocaleDateString()}
              </p>
            </div>
          </div>

          {isEditing ? (
            <div className="space-y-4">

              <Input label="Age" type="number" value={formData.age} onChange={(v) => setFormData({...formData, age: Number(v)})}
              min={13} max={120}/>

              <Input label="Weight (kg)" type="number" value={formData.weight} onChange={(v) => setFormData({...formData, weight: Number(v)})}
              min={20} max={300}/>

              <Input label="Height (cm)" type="number" value={formData.height} onChange={(v) => setFormData({...formData, height: Number(v)})}
              min={100} max={250}/>

              <Select label="Fitness Goal" value={formData.goal as string} onChange={(v)=> setFormData({...formData, goal: v as 'lose' | 'maintain' | 'gain'})} />
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {/* age */}
                <div className="flex items-center gap-4 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg transition-colors duration-200">
                  <div className="size-10 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                    <Calendar className="size-4.5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Age
                    </p>
                    <p className="font-semibold text-slate-800 dark:text-white">
                      {user.age} years
                    </p>
                  </div>
                </div>

                {/* weight */}
                <div className="flex items-center gap-4 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg transition-colors duration-200">
                  <div className="size-10 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                    <Scale className="size-4.5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Weight
                    </p>
                    <p className="font-semibold text-slate-800 dark:text-white">
                      {user.weight} kg
                    </p>
                  </div>
                </div>

                {/* height */}
                {user.height !== 0 && (
                  <div className="flex items-center gap-4 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg transition-colors duration-200">
                    <div className="size-10 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                      <User className="size-4.5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Height
                      </p>
                      <p className="font-semibold text-slate-800 dark:text-white">
                        {user.height} cm
                      </p>
                    </div>
                  </div>
                )}

                {/* goal */}
                <div className="flex items-center gap-4 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg transition-colors duration-200">
                  <div className="size-10 rounded-lg bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                    <Target className="size-4.5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Goal
                    </p>
                    <p className="font-semibold text-slate-800 dark:text-white">
                      {goalLabels[user.goal || 'gain']}
                    </p>
                  </div>
                </div>
              </div>

              <Button
                variant="secondary"
                onClick={() => setIsEditing(true)}
                className="mt-4 w-full"
              >
                Edit Profile
              </Button>
            </>
          )}
        </Card>
        {/* right col */}
        <div></div>
      </div>
    </div>
  );
}

export default Profile
