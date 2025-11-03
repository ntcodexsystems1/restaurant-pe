import React, { useContext } from 'react'
import Logo from '../../../assets/images/logo.png'
import { NavLink } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";
import cardPay from "../../../assets/images/cardPay.png"
import Upi from '../../../assets/Images/Upi.png'
import FooterBtn from '../../cart/component/FooterBtn';
import { CartContext } from '../../../component/context/CartContext';


const Payment = () => {
  
  const {cart} = useContext(CartContext);

  const dishPrice = cart.reduce((acc,item) => acc + parseFloat(item.price), 0);
const discount = dishPrice * 0.1;
const tax =  dishPrice * 0.05
const totalPrice = dishPrice + tax - discount
  
  
  return (
   
   
   <section className='border flex justify-center items-center  bg-white-400 xl:h-screen md:h-auto w-full bg-Primary lg:px-28 md:py-5 md:px-5 px-4 py-4'>



<div className='flex flex-col  container mx-auto h-auto gap-2 '>

<div className=' h-auto flex justify-center sm:justify-start items-center gap-8   bg-Primary sm:bg-transparent w-full py-2 '>

<NavLink to="/">
<FaArrowLeft className='text-2xl text-Secondary' />

</NavLink>

<img src={Logo} alt="" className='w-16 h-16'/>
</div>

<div className='border w-full flex flex-col sm:flex-row pb-16 sm:pb-2 bg-Secondary h-full sm:p-4 p-2 rounded-xl gap-4'>

<div className='border sm:w-[60%] w-full rounded-xl md:p-4 sm:p-8 p-4 gap-6 flex flex-col '>
   <h1 className='text-white capitalize sm:text-2xl text-xl font-bold'>payment</h1>


   <div className='flex gap-4'>
<input type="text" placeholder='Name' className='h-12 w-[70%] sm:w-[80%] rounded px-4' />
<input type="text" placeholder='Table no' className='h-12 w-[30%] rounded px-4' />
   </div>


<div className='flex flex-col gap-4 '>

  <div className='flex gap-4 items-center'>
<h2 className='w-[50%]  text-white font-medium sm:text-xl text-16 capitalize'>card details</h2>
<img src={cardPay} alt="" className='  w-[50%]  object-contain'/>
   </div>

 <div className='grid sm:grid-cols-2   gap-4'>
<input type="text" placeholder='card holder Name' className='h-12  capitalize rounded px-4' />
<input type="text" placeholder='card number' className='h-12 capitalize  rounded px-4' />
   </div>

    <div className='grid grid-cols-2 gap-4 '>
<input type="text" placeholder='Exp date' className='h-12  capitalize rounded px-4' />
<input type="text" placeholder='cvv ' className='h-12  capitalize rounded px-4' />
   </div>

   </div>

<div className='flex flex-col gap-4'>

  <div className='flex gap-4 items-center'>
<h3 className='w-[50%] text-white font-medium sm:text-xl text-16 '>Pay using UPI</h3>
<img src={Upi} alt="" className=' w-[20%]  h-10  '/>
   </div>

 <div className='grid sm:grid-cols-2 gap-4'>
<input type="text" placeholder='UPI ID' className='h-12  capitalize rounded px-4' />
   </div>


   </div>



</div>

<div className='border rounded-xl sm:w-[40%] w-full md:p-4 sm:p-4 p-2 sm:flex hidden flex-col gap-6'>
    
<div className='text-white flex justify-between capitalize border-b-2 pb-4 '>
  <h4 className='text-xl font-bold'>
  total 
  </h4>

  <p className='text-xl font-bold'>
     {`₹${totalPrice}.00`}
  </p>
</div>

<div>
  <p className='text-white text-14'>
    General / Secure
Secure Checkout
Payment is encrypted
Safe & secure payment

Terms & Conditions
By paying, you agree to our [Terms].
Non-refundable after payment
  </p>
</div>

<div className='rounded-md w-auto'>
  <NavLink className="bg-Primary font-medium w-full rounded-md capitalize flex justify-center items-center p-2 h-12">
     {`₹${totalPrice}.00`} pay now
  </NavLink>
</div>

</div>


</div>

<FooterBtn  placeOrder={`₹${totalPrice}.00`} moreOrder="Pay Now" />

</div>


   </section>


  )
}

export default Payment