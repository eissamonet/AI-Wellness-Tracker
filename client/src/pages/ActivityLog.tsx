import { useAppContext } from "../context/AppContext"

const ActivityLog = () => {

  const {allActivityLogs, setAllActivityLogs} = useAppContext();

  return (
    <div>
       ActivityLog
    </div>
  )
}

export default ActivityLog
