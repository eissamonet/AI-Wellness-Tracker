import { Activity, Home, User, Utensils } from "lucide-react";

const BottomNav = () => {
  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/food", label: "Food", icon: Utensils },
    { path: "/activity", label: "Activity", icon: Activity },
    { path: "/profile", label: "Profile", icon: User },
  ];

  return (
  <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800
  px-4 pb-safe lg:hidden transition-colors duration-200">

  </nav>
  );
};

export default BottomNav;
