import { ActivityIcon, HomeIcon, PersonStandingIcon, UserIcon, UtensilsIcon } from "lucide-react"
import { useTheme } from "../context/ThemeContext"
import { NavLink } from "react-router-dom"

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
        <div className="flex items-center gap-3 mb-8">
          <div className="size-10 rounded-xl bg-emerald-500 flex items-center justify-center">
            <PersonStandingIcon className="size-7 text-white"/>
          </div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Wellness Tracker</h1>
        </div>

        <div className="flex flex-col gap-2">
           {navItems.map(item => (
            <NavLink key={item.path} to={item.path}
            className={({ isActive})=> `flex items-center gap-3 px-4 py-2.5 border-1-3 trasnition-all duration-200`}>
                <item.icon className="size-5"/>
                <span className="text-base">{item.label}</span>
            </NavLink>
           ))}
        </div>
    </nav>
  )
}

export default Sidebar
