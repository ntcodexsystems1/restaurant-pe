import React from 'react'
import Home from '../feautres/user/pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from "../feautres/auth/pages/Login"
import Forgot from '../feautres/auth/pages/Forgot'
import Register from '../feautres/auth/pages/Register'
import AdminDashboard from '../feautres/dashboard/pages/AdminDashboard'
import Cart from '../feautres/cart/pages/Cart'
import FooterBtn from '../feautres/cart/component/FooterBtn'
import PrivateRoute from '../component/PrivateRoute/PrivateRoutes'
import Practical from '../practical/Practical'
import Payment from '../feautres/payment/pages/Payment'



const AppRoutes = () => {


  return (



    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Forgot" element={<Forgot />} />
      <Route path='/Register' element={<Register />} />

      <Route path='/AdminDashboard' element={ <AdminDashboard />}/>

      <Route path='/Cart' element={<Cart />} />
      <Route path='/Practical' element={<Practical />} />

      <Route path='/Payment' element={<Payment />} />
      <Route path='/FooterBtn' element={<FooterBtn />} />






    </Routes>



  )
}

export default AppRoutes