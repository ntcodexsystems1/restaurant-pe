import React, { useContext } from 'react'
import CartImg from "../../../assets/Images/login.jpg"
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../../component/context/CartContext'
import { MdDelete } from "react-icons/md";


const CartItem = () => {
 
 const {cart, removeCartItem} = useContext(CartContext)
  




 
  return (
  


<div className='flex flex-col items-center justify-center gap-8 md:gap-4 w-full  ' >

  {
  

    cart.map((item) => 
    
<div className='flex justify-between flex-wrap items-center gap-4  w-full' 
key={item.id}>



<div className=' flex items-center gap-4 '>
  
  <div className='lg:w-16 lg:h-16 sm:w-20 sm:h-20 w-24 h-16 sm:rounded-full rounded ' >
<img src={item.img} alt="" className='w-full h-full rounded sm:rounded-full object-cover'/>
  </div>

  <div className=' text-white'>
    <p className='lg:text-16 text-14 font-bold capitalize'>{item.title}</p>
    <p className='text-14'>{item.details}</p>
  </div>

</div>

<div className=' flex items-center gap-4'>
  <select className='h-full p-2 rounded text-14 bg-Primary'>

<option value="">Qty</option>
<option value="">1</option>
<option value="">2</option>
<option value="">3</option>
<option value="">4</option>
<option value="">5</option>
<option value="">6</option>
<option value="">7</option>
<option value="">8</option>
<option value="">9</option>
<option value="">10</option>


  </select>

  <div className=' text-white'>
    <p className='lg:text-16 text-14 font-bold'>₹{item.price}</p>
    <p className="text-14">₹{item.price} Per Items</p>
  </div>

</div>

<div onClick={() => removeCartItem(item.id)}>
  <NavLink className="flex bg-Primary p-2 text-18  font-medium rounded" >
    <MdDelete/>
  </NavLink>
</div>

</div>


  )}



</div>

  )
}

export default CartItem