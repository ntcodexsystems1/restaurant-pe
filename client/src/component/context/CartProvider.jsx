import React, { children, useState } from 'react'
import { CartContext } from './CartContext'

const CartProvider = ({ children }) => {


   const [cart, setCart] = useState([])

   const addToCart = (item) => {

      setCart((prevCart) => [...prevCart, item]);

   };

   const removeCartItem = (id) => {


      setCart((prevCart) =>

         prevCart.filter((item) => item.id !== id

         ));

   };

   const [cartBadge, setCartBadge] = useState(0);


   return (

      <CartContext.Provider value={{ cart, addToCart, removeCartItem, cartBadge, setCartBadge }}>


         {children}

      </CartContext.Provider>

   )
}

export default CartProvider