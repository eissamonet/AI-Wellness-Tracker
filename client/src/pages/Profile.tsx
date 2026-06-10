import { useState } from "react";
import { useAppContext } from "../context/AppContext"
import { useTheme } from "../context/ThemeContext";
import type { ProfileFormData } from "../types";

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


  return (
    <div>
        Profile
    </div>
  )
}

export default Profile
