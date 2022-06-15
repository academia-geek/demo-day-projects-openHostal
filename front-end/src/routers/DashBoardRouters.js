import React from "react";
import { Navigate, Route, Routes } from 'react-router-dom';
import FormEmail from "../components/auth/FormEmail";
import Home from "../components/Home";
import Reserva from "../components/Reserva";


const DashBoardRouters = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<FormEmail />} />
        <Route path='/*' element={<Navigate to='/' />} />
        <Route path='/reserva' element={<Reserva to='/' />} />
        
        {/* <Route path='/*' element={<Navigate to='/' />} /> */}
      </Routes>
    </>
  )
}

export default DashBoardRouters;