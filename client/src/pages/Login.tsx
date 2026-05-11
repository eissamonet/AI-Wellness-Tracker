import { useState } from "react"


const Login = () => {
  const [state, setState] = useState('login')

  return (
    <>
      <main className="login-page-container ">
        <form className="login-form">
          <h2 className="text-3xl font-medium text-gray-900 dark:text-white">
            {state === 'login' ? 'Sign In ' : 'Sign Up'}
          </h2>
        </form>
      </main>
    </>
  )
}

export default Login
