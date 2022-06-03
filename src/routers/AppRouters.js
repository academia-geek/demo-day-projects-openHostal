import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../components/Login"
import Register from "../components/Register"
import  PrivateRouters  from "./PrivateRouters"
import  PublicRouters  from "./PublicRouters"
import  DashBoardRouters  from "./DashBoardRouters"



const AppRouters = () => {

    // const [isAuth, setIsAuth] = useState(false)
    const [checking, setChecking]=useState(true)
    const [isLoggedIn, setIsLoggedIn]= useState(false)

    useEffect(() => {
       const auth = getAuth()
       onAuthStateChanged(auth, (user)=>{
           if(user?.uid){
                         setIsLoggedIn(true)
           }
           else{
               setIsLoggedIn(false)
           }
           setChecking(false)
       })
    }, [setIsLoggedIn, setChecking])

if(checking){
    return(
      <div className="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
    )
}

  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={
              <PublicRouters isAuth={isLoggedIn} >
                <Login />
              </PublicRouters>} />
            <Route path='/registro' element={
              <PublicRouters isAuth={isLoggedIn} >
                <Register />
              </PublicRouters>} />
            <Route path='/*' element={
              <PrivateRouters isAuth={isLoggedIn}>
                <DashBoardRouters />
              </PrivateRouters>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRouters;