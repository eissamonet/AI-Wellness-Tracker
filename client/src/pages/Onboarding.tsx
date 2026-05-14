import { PersonStanding } from "lucide-react"
import { useState } from "react"
import { Toaster } from "react-hot-toast"
import { useAppContext } from "../context/AppContext"


const Onboarding = () => {

  const [step, setStep] = useState(1)
  const {user, setOnboardingCompleted, fetchUser} = useAppContext()
  return (
    <>
      <Toaster />
      <div className="onboarding-container">
        {/* header */}
        <div className="p-6 pt-12 onboarding-wrapper">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
              <PersonStanding className="w-6 h-6 text-white"/>
            </div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Wellness Tracker</h1>
          </div>
          <p className="text-slate-500 dark:text-slate-400">Let's personalize your experience!</p>
        </div>

        {/* progress indicator */}
        <div className="px-6 mb-8 onboarding-wrapper">
          <div className="flex gap-2 max-w-2xl">
            {[1,2,3].map((s) => (
              <div key={s} className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${}`}/>
            ))}
          </div>
        </div>
     </div>
    </>
  )
}

export default Onboarding
