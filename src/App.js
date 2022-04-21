import { Suspense, lazy } from "react";
import  {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from "./pages/home";
import * as ROUTES from "./constants/routes"


const Login = lazy(()=> import("./pages/login"))
const Profile = lazy(()=> import("./pages/profile"))


function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path={ROUTES.DASHBOARD} element={<Home/>}/>
      <Route path={ROUTES.LOGIN} element={<Suspense fallback={<div>...</div>}><Login/></Suspense>}/>
      <Route path={ROUTES.PROFILE} element={<Suspense fallback={<div>...</div>}><Profile/></Suspense>}/>
    </Routes>
    <Link to={ROUTES.LOGIN}>Git</Link>
    </BrowserRouter>
    
    
  )
  
  
}

export default App;
