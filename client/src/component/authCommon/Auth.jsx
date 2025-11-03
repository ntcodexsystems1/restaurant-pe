import React, { useRef } from 'react'
import LoginImg from "../../assets/Images/login.jpg"
import Logo from "../../assets/Images/logo.png"
import { FiArrowLeft } from "react-icons/fi";
import { NavLink } from 'react-router-dom';




const Auth = ({title, input1, input2, forgot, btn, newAc, OR, socialIcon }) => {
 
 

 
 
  return (

    <section className='w-full  h-screen      flex-col flex gap-4 justify-center bg-Primary  px-4 md:px-20   xl:px-36'>


<div className='container mx-auto flex items-center sm:justify-start justify-center gap-5'>

  <NavLink to="/">

<FiArrowLeft className='text-3xl font-bold text-Secondary'/>

  </NavLink>

  <img src={Logo} alt="" className='w-16 h-16'/>
</div>

      <div className='grid sm:grid-cols-2 grid-cols-1 w-full bg-Secondary px-2 sm:bg-transparent h-auto   rounded-xl lg:h-[80%] container mx-auto'>


        <div className='w-full h-full overflow-hidden   rounded-tl-lg rounded-bl-lg hidden sm:flex'>
          <img src={LoginImg} alt="" className='object-cover w-full h-full' />

        </div>

        <form className='w-full h-full   rounded-tr-lg rounded-br-lg sm:p-8 lg:px-16 py-8 sm:bg-Secondary   flex flex-col gap-2 justify-center sm:items-start items-center'>

          <div className=' h-auto w-auto border-b-2 border-white flex justify-start pb-4'>
            <h1 className='font-medium lg:text-3xl text-2xl capitalize text-white '>
              {title}
            </h1>
          </div>







          <div className=' h-auto w-full mt-4'>
            <input type="text" className='px-4 h-12 w-full rounded outline-none border-4 focus:border-yellow-500 transition duration-500 ' placeholder={input1} />
          </div>

          
         


          <div className='h-auto w-full '>
            <input type="text" className='px-4 h-12 w-full rounded outline-none focus:border-yellow-500 border-4 transition duration-500' placeholder={input2} />


{
forgot && 
  <NavLink to="/forgot" className='sm:mt-8 text-14 text-white capitalize  font-medium   border-b-Secondary sm:border-b-white '> { forgot }</NavLink>

}
          

          </div>





          <div className='h-auto w-full mt-2'>
            <input type="submit" value={btn} className='px-4 bg-Primary capitalize  text-black font-medium h-12   w-full rounded' placeholder='Enter the password' />
          </div>





            <div className='h-auto w-full text-center'>
              <NavLink to="/register" className='text-white font-medium capitalize text-14'>
                {newAc}</NavLink>
          </div>

           <div className='h-auto w-full text-center'>
              <span className='sm:text-white text-white font-medium capitalize text-12 '>{OR}</span>

<div className='flex gap-4 justify-center py-4 text-white'>
 
 {socialIcon}

</div>
          </div>


        </form>



      </div>


    </section>




  )
}

export default Auth