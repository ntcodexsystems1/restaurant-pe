import React, { useContext } from 'react'
import Logo from '../../../assets/Images/logo.png'
import { NavLink } from 'react-router-dom'
import CartItem from '../component/CartItem'
import { CartContext } from '../../../component/context/CartContext'
import { FaArrowLeft } from "react-icons/fa6";
import FooterBtn from '../component/FooterBtn';


const Cart = () => {
 
 const {cart} = useContext(CartContext)
 
const dishPrice = cart.reduce((acc,item) => acc + parseFloat(item.price), 0);
const discount = dishPrice * 0.1;
const tax =  dishPrice * 0.05
const totalPrice = dishPrice + tax - discount

 
  return (
   
  <section className=' bg-Primary sm:h-screen h-full  flex justify-center items-center w-full lg:px-28 md:py-5 md:px-5 px-4   py-2 sm:py-0'>


<div className='container mx-auto flex justify-center  flex-col gap-2 h-full w-full '>


<div className=' h-auto flex justify-center sm:justify-start items-center gap-8   bg-Primary sm:bg-transparent w-full py-2 '>

<NavLink to="/">
<FaArrowLeft className='text-2xl text-Secondary' />

</NavLink>

<img src={Logo} alt="" className='w-16 h-16'/>
</div>

<div className=' bg-Secondary w-full flex flex-col sm:flex-row  md:p-6 p-2 md:gap-4  gap-2 md:justify-between justify-start  rounded-xl  md:h-[88%] sm:h-[80%] h-[90%]   pb-28 sm:pb-2'>

<div className=' md:w-[60%] sm:w-[60%] w-full h-full   flex flex-col gap-2 '>

<h1 className='lg:text-2xl text-xl capitalize text-white font-bold'>
  cart items
</h1>

<div className='border h-full md:rounded-xl  rounded-xl md:p-4 p-2 py-4 flex flex-col gap-4  overflow-auto scrollbar_hide'>
  
  {

    cart.length > 0 ? (
      <CartItem/>

    ) : ( <h1 className='capitalize text-14 text-white'> no item selected</h1>)
  }

</div>




</div>

<div className=' md:w-[40%] sm:w-[40%] w-full h-full  border rounded-xl   overflow-auto'>

  <div className=' text-white  w-full h-auto capitalize p-4 lg:space-y-2 md:space-y-2 font-medium'>

<h2 className='md:text-xl text-18 font-bold'>Payment summary</h2>

<div className='flex justify-between pt-2'>
  <p className='lg:text-16 text-14'>dish price: </p>
  <p className='lg:text-16 text-14'>₹{dishPrice.toFixed(2)}</p>
</div>

<div className='flex justify-between'>
  <p className='lg:text-16 text-14'>discount: </p>
  <p className='lg:text-16 text-14'>₹{discount.toFixed(2)}</p>
</div>

<div className='flex justify-between border-b pb-4'>
  <p className='lg:text-16 text-14'>TAX:</p>
  <p className='lg:text-16 text-14'>₹{tax.toFixed(2)}</p>
</div>

<div className='flex justify-between mt-4 font-bold'>
  <p className=' text-16'>Total price: </p>
  <p className=' text-16'>₹{totalPrice.toFixed(2)}</p>
</div>


<div className='sm:flex flex-col gap-2 mt-4 hidden '>


<div>
  <NavLink to="/Payment" className="w-full lg:h-12 h-8 md:text-16 text-12 bg-Primary rounded flex justify-center items-center text-black font-medium">
    place order
  </NavLink>
</div>

<div>
  <NavLink to="/" className="w-full lg:h-12 h-8 md:text-16 text-12 bg-Primary rounded flex justify-center items-center text-black font-medium">
    Go for more order
  </NavLink>
</div>

</div>

<div className='mt-2'>
  <p className='md:text-14 text-12 font-normal '>
    Note: Wait for serve dish on your table within 15 minutes
  </p>
</div>

  </div>


</div>




</div>

<FooterBtn placeOrder="More order" moreOrder="Place order" PayRoute="/Payment" orderRoute="/"  />


</div>



  </section>


    
  )
}

export default Cart


