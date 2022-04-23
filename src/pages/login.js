import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import FirebaseContext from "../context/firebase"
import "../css/index.css"
import { Link } from 'react-router-dom';
import * as ROUTES from "../constants/routes"

function Login() {
   const navigate = useNavigate();
   const {firebase} = useContext(FirebaseContext)

   const [password, setPassword] = useState("");
   const [emailAddress, setEmailAddress] = useState("")
   const [error, setError] = useState("")

   const isInvalid = password === "" || emailAddress === "";

   const handleLogin = async (event) => {
      event.preventDefault();
      try {
          await firebase.auth().signInWithEmailAndPassword(emailAddress, password)
          navigate(ROUTES.DASHBOARD)

      } catch (error) {
        setEmailAddress("")
        setPassword("")
        alert("Something went wrong!")
      }
   }

   useEffect(()=>{
     document.title= "Login-Instagram"
   }, [])


  return (
    <div className="h-screen min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <img className='w-1/5 mr-5' src='/images/iphone-with-profile.jpg'/>

    <div className="max-w-md w-full space-y-8">
      <div>
        {/* <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2> */}
      
      <img className='mx-auto mt-4' src='/images/logo.png' alt='ınstagramlogo'/>
      </div>
      <form onSubmit={handleLogin} className="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true"/>
        <div className="rounded-md shadow-sm -space-y-px">
          <div className='py-2'>
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input value={emailAddress}  onChange={({target})=> setEmailAddress(target.value)  } id="email-address" name="email-address" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
          </div>
          <div className='py-2'>
            <label htmlFor="password" className="sr-only">Password</label>
            <input value={password} onChange={({target})=> setPassword(target.value)} id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
          </div>
        </div>
  
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
          </div>
  
          <div className="text-sm">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
          </div>
        </div>
  
        <div>
          <button  type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
           
              <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </span>
            Log in
          </button>
        </div>
      </form>
      <div className='bg-white-400 text-black  py-5 px-4  text-center border-2 border-gray-primary'>
        Don't have an account yet ? {" "}
        <Link className='font-bold hover:tracking-wider' to={ROUTES.SIGN_UP}>Sign Up</Link>

        </div>
    </div>
  </div>
  )
}

export default Login

// 'container flex mx-auto max-w-screen-md items-center h-screen'