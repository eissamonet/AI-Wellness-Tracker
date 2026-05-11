import { AtSignIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState("signup")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const navigate = useNavigate()

  return (
    <>
      <main className="login-page-container ">
        <form className="login-form">
          <h2 className="text-3xl font-medium text-gray-900 dark:text-white">
            {state === "login" ? "Sign In " : "Sign Up"}
          </h2>
          <p className="mt-2 text-sm text-gray-500/90 dark:text-gray-400">
            {state === "login"
              ? "Please enter your email and password to sign in."
              : "Please fill in the form to create an account."}
          </p>

          {state !== "login" && (
            <div className="mt-4">
              <label className="font-medium text-sm text-gray-700 dark:text-grat-300">Username</label>
              <div className="relative mt-2">
                <AtSignIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4.5"/>
                <input className="login-input" required
                type="text"
                placeholder="Enter Username" />
              </div>
            </div>
          )}
        </form>
      </main>
    </>
  );
};

export default Login;
