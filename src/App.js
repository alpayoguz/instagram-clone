import { Suspense, lazy } from "react";
import  {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from "./pages/home";
import * as ROUTES from "./constants/routes"


const Login = lazy(()=> import("./pages/login"))
const Profile = lazy(()=> import("./pages/profile"))
const SignUp = lazy(()=> import("./pages/signup"))
const NotFound = lazy(()=> import("./pages/notfound"))


function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path={ROUTES.DASHBOARD} element={<Home/>}/>
      <Route path={ROUTES.LOGIN} element={<Suspense fallback={<div>...</div>}><Login/></Suspense>}/>
      <Route path={ROUTES.PROFILE} element={<Suspense fallback={<div>...</div>}><Profile/></Suspense>}/>
      <Route path={ROUTES.SIGN_UP} element={<Suspense fallback={<div>...</div>}><SignUp/></Suspense>}/>
      <Route path={ROUTES.NOT_FOUND} element={<Suspense fallback={<div>...</div>}><NotFound/></Suspense>}/>
    </Routes>
    <Link to={ROUTES.LOGIN}>Git</Link>
    <Link to={ROUTES.NOT_FOUND}>NF</Link>

    </BrowserRouter>
    
    
  )
  
  
}

export default App;
