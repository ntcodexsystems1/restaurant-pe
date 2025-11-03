import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
  
  const auth = localStorage.getItem("token");
  
  return (
   



auth ? children : <Navigate to="/Login"/>



  
  )
}

export default PrivateRoutes