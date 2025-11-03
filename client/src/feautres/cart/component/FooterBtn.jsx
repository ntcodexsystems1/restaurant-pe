import React from "react"
import { NavLink } from "react-router-dom"


const FooterBtn = ({placeOrder, moreOrder, orderRoute, PayRoute}) =>  {

return (

<div className='grid sm:hidden grid-cols-2 gap-2  w-full bg-Primary fixed left-0 bottom-0 py-3 px-4 capitalize '>

<div>
  <NavLink to={orderRoute}  className="w-full  h-12  text-16 bg-Secondary rounded flex justify-center items-center text-white font-medium">
  {placeOrder} 
  </NavLink>
</div>

<div>
  <NavLink  to={PayRoute} className="w-full  h-12  text-16 bg-Secondary rounded flex justify-center items-center text-white font-medium">
{moreOrder}
  </NavLink>
</div>

</div>


)
 }   

export default FooterBtn
