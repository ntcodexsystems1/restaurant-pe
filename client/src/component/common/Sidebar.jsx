import React, { useState } from 'react'
import { HiMiniXMark } from "react-icons/hi2";
import User from "../../assets/Images/user.jpg"
import { NavLink, useLocation } from "react-router-dom"



const SideBar = ({ menu, setMenu, title, l1, l2, l3, l4, l5, img, h2, setDishLink }) => {


  const location = useLocation(null);
  const [activeLink, setActiveLink] = useState(0)


const handleChange = (index, categories) => {


{
  location.pathname === "/" &&
setDishLink(categories)


}



setActiveLink(index)


}



  return (


    <div className={`bg-Primary  overflow-auto  md:h-1/2 h-screen   w-4/5 sm:w-full  transition-transform duration-500 ease-in-out  z-10  p-2 fixed sm:relative top-0 right-0 sm:right-auto  scrollbar_hide rounded  border-Secondary  border-8 ${menu ? "translate-x-0" : "translate-x-full"} sm:translate-x-0`} >

      <ul className=' flex flex-col gap-1  text-black capitalize'>
       
        <li className='text-xl font-bold'>{title}</li>

        <li className={` cursor-pointer rounded mt-2 ${ activeLink == 0 ? "bg-Secondary p-1 text-white" : "bg-transparent"}`} onClick={() => handleChange(0, "veg")}><NavLink>{l1}</NavLink></li>
        <li className={` cursor-pointer rounded ${ activeLink == 1 ? "bg-Secondary p-1 text-white" : "bg-transparent"}`} onClick={() => handleChange(1, "nonVeg")}><NavLink >{l2}</NavLink></li>
        <li className={` cursor-pointer rounded ${ activeLink == 2 ? "bg-Secondary p-1 text-white" : "bg-transparent"}`} onClick={() => handleChange(2, "soup")}><NavLink>{l3}</NavLink></li>
        <li className={` cursor-pointer rounded ${ activeLink == 3 ? "bg-Secondary p-1 text-white" : "bg-transparent"}`} onClick={() => handleChange(3, "chinese")}><NavLink>{l4}</NavLink></li>
        <li className={` cursor-pointer rounded ${ activeLink == 4 ? "bg-Secondary p-1 text-white" : "bg-transparent"}`} onClick={() => handleChange(4, "mocktail")}><NavLink>{l5}</NavLink></li>
       



      </ul>

      <div className=' w-full h-auto flex justify-end items-end'>
        <HiMiniXMark className='text-md flex justify-center rounded-full  text-white sm:hidden w-10 h-10 bg-Secondary items-center' onClick={() => setMenu(false)} />

      </div>

      {

location.pathname === "/admindashboard" &&
 <div className='text-black text-center flex sm:hidden  h-[60%]  justify-end flex-col items-center py-4  '>
             
                         <img src={img} alt="" className='w-16  h-16 rounded-full border-2 object-cover border-yellow-500'/>
                         <h2 className='font-bold text-14'>{h2}</h2>
                       </div>
      }
                      

    
   
    </div>





  )
}

export default SideBar