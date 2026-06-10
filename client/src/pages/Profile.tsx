import { useAppContext } from "../context/AppContext"
import { useTheme } from "../context/ThemeContext";

const Profile = () => {
  const {user, logout, fetchUser, allFoodLogs, allActivityLogs} = useAppContext();
  const {theme, toggleTheme} = useTheme();
  return (
    <div>
        Profile
    </div>
  )
}

export default Profile
