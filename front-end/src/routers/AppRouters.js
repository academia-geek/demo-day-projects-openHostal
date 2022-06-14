import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../components/Login"
import Register from "../components/Register"
import  PrivateRouters  from "./PrivateRouters"
import  PublicRouters  from "./PublicRouters"
import  DashBoardRouters  from "./DashBoardRouters"
import LandPage from "../components/LandPage"
import Descrip from "../components/Descrip"


const AppRouters = () => {

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
            <Route path='/landpage' element={
              <PublicRouters isAuth={isLoggedIn} >
                <LandPage/>
              </PublicRouters>} />
            <Route path='/login' element={
              <PublicRouters isAuth={isLoggedIn} >
                <Login />
              </PublicRouters>} />
            <Route path='/registro' element={
              <PublicRouters isAuth={isLoggedIn} >
                <Register />    
              </PublicRouters>} />
            <Route path='/descrip/:index' element={
              <PublicRouters isAuth={isLoggedIn} >
                <Descrip/>   
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