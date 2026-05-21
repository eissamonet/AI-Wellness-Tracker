import { ActivityIcon, HomeIcon, UserIcon, UtensilsIcon } from "lucide-react"

const Sidebar = () => {

    const navItems = [
        {path: '/', label: 'Home', icon: HomeIcon},
        {path: '/food', label: 'Food', icon: UtensilsIcon},
        {path: '/activity', label: 'Activity', icon: ActivityIcon},
        {path: '/profile', label: 'Profile', icon: UserIcon},
    ]

  return (
    <div>
        Sidebar
    </div>
  )
}

export default Sidebar
