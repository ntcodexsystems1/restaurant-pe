import React, { useContext, useEffect, useState } from 'react'
import Dish1 from '../../assets/Images/d1.png'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../context/CartContext';
import Swal from 'sweetalert2';

const DishCard = ({dishLink}) => {
  
  const [allDishes, setAllDishes] = useState({});

  const {addToCart, cartBadge, setCartBadge} = useContext(CartContext)



   useEffect(() => {
    fetch("/product/productList.json")
      .then((res) => res.json())
      .then((res) => {
        setAllDishes(res.dishes); // res.dishes contains categories like veg, soup, etc.
      })
      .catch((err) => console.error(err, "error now"));
  }, []);

  const currentDishes = allDishes[dishLink] || [] // fallback to empty array if not found



const HandleAddToCart = (item) => 
{

addToCart(item)

Swal.fire({
  title: "Added to cart",
  text: `${item.title} has been added`,
  icon: "success",
  toast: true,
  position: "bottom-end",
  showConfirmButton: false,
  timer: 3000,
  customClass: {
    popup: 'my-swal-toast'
  }
});

    setCartBadge(cartBadge + 1);







}



  
  return (
    




<div className='grid lg:grid-cols-3 md:grid-cols-2  gap-2'>
{

   currentDishes.length > 0 ? (currentDishes.map((item) => (


  <div key={item.id} className='flex  lg:p-4 md:p-3 gap-2 sm:p-4 p-2  rounded-xl items-center h-auto w-full bg-Secondary shadow-xl'>
  
     
       <div className=' relative'>

<img src={item.img} alt="" className='w-28 h-24 rounded-xl object-cover' />

 <button onClick={() => HandleAddToCart(item)} className='w-20 h-4 capitalize font-bold bg-Primary text-14  p-3 absolute top-[75%] rounded-xl left-4 sm:left-4 md:left-2 lg:left-2 xl:left-4 flex justify-center items-center'>
      {item.btn}
    </button>


  </div>

  <div className='flex flex-start gap-1 flex-col'>
    <div>
   <p className='text-16 font-bold text-white capitalize'>{item.title}</p>
    <p className='text-white sm::text-14 text-12 font-normal'>{item.details}</p>
    </div>
 
    <p className='font-bold text-16 text-white'>₹{item.price}</p>
  </div>

</div>

))) : ( 
  <h1 className='text-xl capitalize'>no item found</h1>
)


}
</div>





  



  )
}

export default DishCard