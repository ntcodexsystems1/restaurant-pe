import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import LoginImg from "../../../assets/Images/login.jpg"
import Logo from "../../../assets/Images/logo.png"
import { FaFacebook } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { CartContext } from '../../../component/context/CartContext';

const Register = () => {
 
 const {cart} = useContext(CartContext)
 
 
  return (

    <section className='w-full  h-screen flex-col flex gap-4 justify-center items-center bg-Primary  px-4 md:px-20   xl:px-36'>
{cart}

      <div className='container mx-auto flex items-center sm:justify-start justify-center gap-5'>

        <NavLink to="/">
          <FiArrowLeft className='text-3xl font-bold text-Secondary' />

        </NavLink>

        <img src={Logo} alt="" className='w-16 h-16'/>
      </div>

      <div className='grid sm:grid-cols-2 grid-cols-1 w-full     rounded-xl lg:h-[80%] h-auto container mx-auto'>


        <div className='w-full h-full overflow-hidden  border rounded-tl-lg rounded-bl-lg hidden sm:flex'>
          <img src={LoginImg} alt="" className='object-cover w-full h-full' />

        </div>

        <form action="" href="" className='w-full h-full overflow-auto  rounded-tr-lg rounded sm:p-4 py-6  lg:px-16 px-2  bg-Secondary   flex flex-col gap-2 justify-center sm:items-start items-center'>

          <div className=' h-auto w-auto border-b-2 border-white flex justify-start pb-2'>
            <h1 className='font-medium lg:text-3xl text-2xl capitalize text-white '>
              sign up
            </h1>
          </div>

<div className='flex flex-wrap gap-2'>



          <div className=' h-auto w-full mt-4'>
            <input type="text" className='px-4 h-12 w-full rounded focus:border-yellow-500 border-4 transform outline-none duration-500' placeholder="Name" />
          </div>


          <div className='h-auto w-full '>
            <input type="text" className='px-4 h-12 w-full rounded  focus:border-yellow-500 border-4 transform outline-none duration-500' placeholder="Phone no" />
          </div>


          <div className='h-auto w-full '>
            <input type="text" className='px-4 h-12 w-full rounded  focus:border-yellow-500 border-4 transform outline-none duration-500' placeholder="Location" />
          </div>

          <div className='h-auto w-full '>
            <input type="password" className='px-4 h-12 w-full rounded  focus:border-yellow-500 border-4 transform outline-none duration-500' placeholder="New password" />
          </div>

          <div className='h-auto w-full '>
            <input type="password" className='px-4 h-12 w-full rounded  focus:border-yellow-500 border-4 transform outline-none duration-500' placeholder="confirm password" />
          </div>


          <div className='h-auto w-full mt-2'>
            <input type="submit" value="submit" className='px-4 bg-Primary capitalize    text-black font-medium h-12   w-full rounded' placeholder='Enter the password' />
          </div>


</div>

        </form>



      </div>


    </section>



  )
}

export default Register