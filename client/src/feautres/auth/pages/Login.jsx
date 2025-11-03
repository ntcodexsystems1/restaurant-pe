import React from 'react'
import Auth from '../../../component/authCommon/Auth'
import { FaGoogle } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";




const Login = () => {
  return (



 <Auth 
 title="sign in"
 input1="Username"
 input2="Password"
 forgot="Forgot password"
 newAc="No account yet? register now & get started"
 socialIcon={[<FaGoogle className='text-2xl'/>, <FaFacebook className='text-2xl'/>]}

 OR="OR"
 but="submit"
 
 
 
 />



  )
}

export default Login