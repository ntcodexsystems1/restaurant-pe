import React, { children, useCallback, useState, useMemo } from 'react'
import { CartContext } from './CartContext'

const CartProvider = ({ children }) => {


   const [cart, setCart] = useState([])

   const addToCart = useCallback((item) => {

      setCart((prevCart) => [...prevCart, item]);

   }, []);

   const removeCartItem = (id) => {


      setCart((prevCart) =>

         prevCart.filter((item) => item.id !== id

         ));

   };

   const [cartBadge, setCartBadge] = useState(0);

    const [paymentDetails, setPaymentDetails] = useState({
   
       orderName: "",
       tableNo: ""
   
   
     })

       const [dishLink, setDishLink] = useState("veg")
     
  const [allDishes, setAllDishes] = useState({});

     const [searchDishs, setSearchDishs] = useState("")

      const currentDishes = allDishes[dishLink] || [] // fallback to empty array if not found

const filterDish =

currentDishes.filter((dish) => (

dish.title.toLowerCase().includes(searchDishs.toLowerCase())
   
));

   return (

      <CartContext.Provider value={{ cart, addToCart, removeCartItem, cartBadge, setCartBadge, setPaymentDetails, paymentDetails, searchDishs, setSearchDishs, filterDish, allDishes, setAllDishes, setDishLink, dishLink }}>


         {children}

      </CartContext.Provider>

   )
}

export default CartProvider