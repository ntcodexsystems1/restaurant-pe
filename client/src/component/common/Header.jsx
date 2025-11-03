import React from 'react'
import Logo from "../../assets/Images/logo.png"
import { CiSearch } from "react-icons/ci";
import { HiShoppingCart } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';



const Header = ({ placeholder, Cart, AdminTitle }) => {


const { cartBadge } = useContext(CartContext);


    return (

        <div className='md:grid grid-cols-2 flex gap-2 md:gap-0 w-full container mx-auto py-1'>

            <div className='h-full w-auto  flex items-center  md:mt-0'>
                <img src={Logo} alt="logo-scan-order-menu" className=' md:w-14 w-16 md:h-12 h-12' />
            </div>

            <div className='flex md:gap-6 gap-2 justify-center items-center  w-full '>
                <ul className='flex  h-full w-full'>

                    <li className='w-full  h-12'>
                        <input type="text" className='w-full h-full text-12 md:text-16  px-4 rounded rounded-tr-none rounded-br-none' placeholder={placeholder} />
                        </li>

                    <li className='w-auto bg-slate-100 px-2  h-12 rounded-bl-none rounded-tl-none rounded '>

                        <button className='rounded-bl-none rounded-tl-none rounded  h-full flex justify-center items-center'><CiSearch className='text-slate-500 ' />
                        </button>

                        </li>

                </ul>

                {


                    Cart &&
                    <div className=' w-auto hidden sm:flex'>
                        <NavLink to="/Cart"> 

                        {

cartBadge > 0 && (



  <p className='sticky top-4  left-2 text-[12px] z-10 bg-red-700 text-white w-4 h-4 flex justify-center items-center rounded-full p-2'>{cartBadge}</p>
                       ) }
                      
                        <HiShoppingCart className='text-xl relative   text-Secondary' /> 
                         </NavLink>

                    </div>

                }

                {
                    AdminTitle &&

                    <div className=' w-auto md:flex hidden'>
                        <h1 className=' w-full text-Secondary  font-bold text-end'>Admin </h1>
                    </div>
                }


            </div>

        </div>


    )
}

export default Header