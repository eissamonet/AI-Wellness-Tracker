import { useEffect, useState } from "react";
import { getMotivationalMessage } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import type { FoodEntry, ActivityEntry } from "../types";
import Card from "../components/ui/Card";
import ProgressBar from "../components/ui/ProgressBar";
import { HamburgerIcon } from "lucide-react";

const Dashboard = () => {
  const { user, allActivityLogs, allFoodLogs } = useAppContext();
  const [todayFood, setTodayFood] = useState<FoodEntry>([]);
  const [todayActivities, setTodayActivities] = useState<ActivityEntry>([]);

  const DAILY_CALORIE_LIMIT: number = user?.dailyCalorieIntake || 2000;

  // load user data
  const loadUserData = () => {
    const today = new Date().toISOString().split("T")[0];
    const foodData = allFoodLogs.filter(
      (f: FoodEntry) => f.createdAt?.split("T")[0] === today,
    );
    setTodayFood(foodData);
    const activityData = allActivityLogs.filter(
      (a: ActivityEntry) => a.createdAt?.split("T")[0] === today,
    );
    setTodayActivities(activityData);
  };

  useEffect(() => {
    (() => {
      loadUserData();
    })();
  }, [allActivityLogs, allFoodLogs]);

  const totoalCalories: number = todayFood.reduce(
    (sum, item) => sum + item.calories,
    0,
  );

  const remainingCalories: number = DAILY_CALORIE_LIMIT - totoalCalories;

  const totalActiveMinutes: number = todayActivities.reduce(
    (sum, item) => sum + item.duration,
    0,
  );

  const totalBurned: number = todayActivities.reduce(
    (sum, item) => sum + (item.calories || 0),
    0,
  );

  const motivation = getMotivationalMessage(
    totoalCalories,
    totalActiveMinutes,
    DAILY_CALORIE_LIMIT,
  );

  return (
    <div className="page-containter">
      {/* header */}
      <div className="dashboard-header">
        <p className="text-emerald-100 text-sm font-medium">Welcome Back!</p>
        <h1 className="text-2xl font-bold mt-1">{`Hey there! ${user?.username}`}</h1>

        {/* motivation card */}
        <div className="mt-6 bg-white/20 backdrop-blur-sm rounded-2xl p-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{motivation.emoji}</span>
            <p className="text-white font-medium">{motivation.text}</p>
          </div>
        </div>
      </div>

      {/* main content */}
      <div className="dashboard-grid">
        {/* calories card */}
        <Card className="shadow-lg col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div>
                <HamburgerIcon className="w-6 h-6 text-orange-500" />
              </div>

            </div>
            <div className="text-right">
              <p>Limit</p>
              <p>{DAILY_CALORIE_LIMIT}</p>
            </div>
          </div>
          <ProgressBar value={totoalCalories} max={DAILY_CALORIE_LIMIT} />

          <div className="flex items-center justify-between mb-4"></div>

          <div></div>
          <ProgressBar value={totalBurned} max={user?.dailyCalorieBurn || 400} />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
