import { Suspense, lazy } from "react";
import  {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from "./pages/home";
import * as ROUTES from "./constants/routes"
import Login from "./pages/login"
import useAuthListener from "./hooks/use-auth-listener";
import UserContext from "./context/user";
import "./css/index.css"


// const Login = lazy(()=> import("./pages/login"))
const Profile = lazy(()=> import("./pages/profile"))
const SignUp = lazy(()=> import("./pages/signup"))
const NotFound = lazy(()=> import("./pages/notfound"))
const Dashboard = lazy(()=> import("./pages/dashboard"))


function App() {
  const {user} = useAuthListener();
  return(
     <UserContext.Provider value={{user}}>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path={ROUTES.LOGIN} element={<Suspense fallback={<div>...</div>}><Login/></Suspense>}/>
          <Route path={ROUTES.PROFILE} element={<Suspense fallback={<div>...</div>}><Profile/></Suspense>}/>
          <Route path={ROUTES.SIGN_UP} element={<Suspense fallback={<div>...</div>}><SignUp/></Suspense>}/>
          <Route path={ROUTES.NOT_FOUND} element={<Suspense fallback={<div>...</div>}><NotFound/></Suspense>}/>
          <Route path={ROUTES.DASHBOARD} element={<Suspense fallback={<div>...</div>}><Dashboard/></Suspense>}/>
        </Routes>
        {/* <Link to={ROUTES.LOGIN}>Git</Link>
        <Link to={ROUTES.NOT_FOUND}>NF</Link> */}

      </BrowserRouter>
    
     </UserContext.Provider>

    
  )
  
  
}

export default App;
