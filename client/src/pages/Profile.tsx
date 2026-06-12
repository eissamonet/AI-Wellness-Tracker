import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext"
import { useTheme } from "../context/ThemeContext";
import type { ProfileFormData } from "../types";
import Card from "../components/ui/Card";
import { User } from "lucide-react";
import Button from "../components/ui/Button";

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
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Profile</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Manage Your Settings</p>
      </div>

      <div className="profile-content">
        {/* left col */}
          <Card>
            {/* card title  */}
            <div className="flex items-center gap-4 mb-6">
              <div className="siz-12 rounded-xl bg-linear-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                <User className="size-6 text-white"/>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-800 dark:text-white">Your Profile</h2>
                <p className="text-slate-500 dark:text-slate-400">Member Since {new Date(user?.createdAt || "").toLocaleDateString()}</p>
              </div>
            </div>

            {isEditing ? (
              <div></div>
            ): (
              <>
              <div></div>
              <Button>Edit Profile</Button>
              </>
            )}

          </Card>
        {/* right col */}
          <div>

          </div>
      </div>
    </div>
  )
}

export default Profile
