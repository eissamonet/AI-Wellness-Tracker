import { AtSignIcon, EyeIcon, EyeOffIcon, LockIcon, MailIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Login = () => {
  const [state, setState] = useState("login");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const { login, signup, user } = useAppContext();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

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

          {/* username */}
          {state !== "login" && (
            <div className="mt-4">
              <label className="font-medium text-sm text-gray-700 dark:text-grat-300">
                Username
              </label>
              <div className="relative mt-2">
                <AtSignIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4.5" />
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  className="login-input"
                  required
                  type="text"
                  placeholder="Enter Username"
                />
              </div>
            </div>
          )}
          {/* email */}
          <div className="mt-4">
            <label className="font-medium text-sm text-gray-700 dark:text-grat-300">
              Email
            </label>
            <div className="relative mt-2">
              <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4.5" />
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="login-input"
                required
                type="email"
                placeholder="Enter Email"
              />
            </div>
          </div>

          {/* password */}
          <div className="mt-4">
            <label className="font-medium text-sm text-gray-700 dark:text-grat-300">
              Password
            </label>
            <div className="relative mt-2">
              <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 size-4.5" />
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="login-input pr-10"
                required
                placeholder="Enter Password"
                type={showPassword ? "text" : "password"}
              />
              <button type='button' className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              onClick={()=> setShowPassword((prev) => !prev)}>
                {showPassword ? <EyeOffIcon size={16}/> : <EyeIcon size={16}/>}
              </button>
            </div>
          </div>

          <button type= 'submit' disabled={isSubmitting}
          className="login-button">
            {isSubmitting ? "Signing In..." : state === "login" ? "Login" : "Sign Up"}
          </button>

          {state === "login" ? (
            <p className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">Dont Have an Account?
            <button onClick={()=> setState('sign-up')} className="ml-1 cursor-pointer text-green-600 hover:underline">Sign Up</button></p>
          ) : (
            <p className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">Already Have an Account?
            <button onClick={()=> setState('login')} className="ml-1 cursor-pointer text-green-600 hover:underline">Login</button></p>
          )}
        </form>
      </main>
    </>
  );
};

export default Login;
