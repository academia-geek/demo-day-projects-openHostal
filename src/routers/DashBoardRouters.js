import React from "react";
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from "../components/Home";


const DashBoardRouters = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}

export default DashBoardRouters;