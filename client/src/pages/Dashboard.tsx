import { useAppContext } from "../context/AppContext"


const Dashboard = () => {

  const {user, allActivityLogs, allFoodLogs} = useAppContext()

  return (
    <div className="page-containter">
       {/* header */}
       <div className="dashboard-header">
          <p className="text-emerald-100 text-sm font-medium">Welcome Back!</p>
          <h1 className="text-2xl font-bold mt-1">{`Hey there! ${user?.username}`}</h1>
       </div>
    </div>
  )
}

export default Dashboard
