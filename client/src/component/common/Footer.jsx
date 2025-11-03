import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { IoVideocamOffOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';







const Footer = ({ setMenu }) => {


    const { cartBadge } = useContext(CartContext);




    return (

        <footer className='w-full h-auto px-4 py-2 sm:hidden flex  shadow-xl bg-gradient-to-l opacity-90 from-Primary to-Secondary fixed bottom-0'>

            <div className='container mx-auto'>


                <ul className='w-full h-auto  flex justify-between capitalize'>
                    <li className='text-center flex flex-col items-center justify-center'>
                        <IoHomeOutline />

                        <p className='text-12'>Home</p>
                    </li>
                    <li className='text-center flex flex-col items-center justify-center'>          <IoVideocamOffOutline />

                        <p className='text-12'>video</p>
                    </li>

                    <li className='text-center flex flex-col items-center justify-center' onClick={() => setMenu(true)}>    <IoIosMenu />

                        <p className='text-12'>menu</p>
                    </li>

                    <li className=' w-auto sm:hidden flex flex-col'>
                        <NavLink to="/Cart">

                            {

                                cartBadge > 0 && (



                                    <p className='sticky top-6  left-2 text-[12px] z-10 bg-red-700 text-white w-4 h-4 flex justify-center items-center rounded-full p-2'>{cartBadge}</p>
                                )}
                            <IoCartOutline className='text-xl ' />
                        </NavLink>
                        <p className='text-12'>Cart</p>


                    </li>
                </ul>

            </div>


        </footer>

    )
}

export default Footer