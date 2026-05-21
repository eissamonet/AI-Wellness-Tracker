import { ActivityIcon, HomeIcon, PersonStandingIcon, UserIcon, UtensilsIcon } from "lucide-react"
import { useTheme } from "../context/ThemeContext"

const Sidebar = () => {

    const navItems = [
        {path: '/', label: 'Home', icon: HomeIcon},
        {path: '/food', label: 'Food', icon: UtensilsIcon},
        {path: '/activity', label: 'Activity', icon: ActivityIcon},
        {path: '/profile', label: 'Profile', icon: UserIcon},
    ]

    const {theme, toggleTheme} = useTheme()

  return (
    <nav className="hidden lg:flex flex-col w-64 bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800
    p-6 transition-colors duration-200">
        <div>
          <div className="size-10 rounded-xl bg-emerald-500 flex items-center justify-center">
            <PersonStandingIcon className="size-7 text-white"/>
          </div>
          <h1>Wellness Tracker</h1>
        </div>
    </nav>
  )
}

export default Sidebar
