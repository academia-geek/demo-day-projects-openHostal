import React from "react";
import { Navigate, Route, Routes } from 'react-router-dom';


const DashBoardRouters = () => {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={<App />} /> */}
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}

export default DashBoardRouters;