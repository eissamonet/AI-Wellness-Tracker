import { PersonStanding } from "lucide-react"
import { Toaster } from "react-hot-toast"


const Onboarding = () => {
  return (
    <>
      <Toaster />
      <div className="onboarding-container">
        {/* header */}
        <div className="p-6 pt-12 onboarding-wrapper">
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
              <PersonStanding className="w-6 h-6 text-white"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Onboarding
