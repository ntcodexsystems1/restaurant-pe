import React, { useContext, useEffect } from 'react'
import Header from '../../../component/common/Header'
import SideBar from '../../../component/common/Sidebar'
import Footer from '../../../component/common/Footer'
import { useState } from 'react'
import User from "../../../assets/Images/user.jpg"
import { NavLink, useLocation } from "react-router-dom"
import { CartContext } from '../../../component/context/CartContext'



const AdminDashboard = () => {

  const [menu, setMenu] = useState(false);

  const location = useLocation(null);

  const { cart } = useContext(CartContext);

  const dishPrice = cart.reduce((acc,item) => acc + parseFloat(item.price), 0);
const discount = dishPrice * 0.1;
const tax =  dishPrice * 0.05
const totalPrice = dishPrice + tax - discount


const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error('Error fetching:', err));
  }, []);

  return (

    <section className='border bg-Primary h-screen w-full scrollbar_hide overflow-hidden  '>

      {/* OVERLAY ON ENTIRE BODY WHEN TRIGGER THE MENU BUTTON */}
      <div className={`fixed sm:relative z-10 sm:z-0 top-0 left-0 bg-black opacity-50 w-full h-full ${menu ? "flex" : "hidden"}`}>
      </div>

      {/* HEADER COMPONENTS */}

     

     

      <header className=' py-2 lg:px-6 md:px-5 px-4 fixed top-0 w-full  flex justify-center items-center  bg-Primary border-b-4 border-Secondary h-auto '>


        <Header placeholder="Search Orders" Cart={false} AdminTitle={true} />

      </header>



      <div className='flex  h-screen pe-4 sm:pe-0 pt-20 py-8  scrollbar_hide w-full gap-4 relative  container mx-auto   '>

        {/* ṢIDE-BAR COMPONENTS */}

        <aside className='lg:w-1/5 md:w-1/3  sm:w-2/5 h-full justify-between  bg-Secondary  sm:flex sm:flex-col   mt-4 rounded-t-xl'>


          <SideBar menu={menu} setMenu={setMenu}

            title="control pannel"
            l1="New order"
            l2="Cancel order"
            l3="Help"
            l4="setting"
            img={User}
            h2="Nazim ahmad"

          />



          {

            location.pathname === "/admindashboard" &&
            <div className='text-black text-center sm:flex hidden  h-auto  justify-end flex-col items-center py-4  '>

              <img src={User} alt="" className='w-16  h-16 rounded-full border-2 object-cover border-yellow-500' />
              <h2 className='font-bold text-14 capitalize md:text-white text-black'>nazim </h2>
            </div>
          }






        </aside>



        {/* Right side content */}

        <div className='bg-Secondary sm:w-4/5 w-full  scrollbar_hide  p-4 pb-12 sm:pb-4 my-4  shadow  h-full   rounded   overflow-auto'>



          <table className=' capitalize  border w-max lg:w-full  text-14 rounded-md' >


{/* customer order data in admin-dashboard */}

            <thead className='w-full text-white '>
              <tr className='border text-center '>
                <th className='border p-2'>sr</th>
                <th className='border p-2'>table no</th>
                <th className='border p-2'>qty</th>

                <th className='border p-2'>order accepted</th>
                <th className='border p-2'>send to chef</th>
                <th className='border p-2'>total</th>
                <th className='border p-2'>Bill download</th>



              </tr>
            </thead>

          <tbody className='w-full h-full'>
            
             

{

users.map((list, index) => (


    
                  <tr className='border text-center' key={index}>
                    <td className='border p-2 text-white'>1</td>
                    <td className='border p-2 text-white'>{list.tableNo}</td> {/* Replace with actual table number if available */}
                    <td className='border p-2 text-white'>4</td>

                    <td className='border p-2'>
                      <select className='capitalize text-black font-medium text-12 p-2 bg-Primary rounded'>
                        <option value="">Select</option>
                        <option value="accepted">Accepted</option>
                        <option value="reject">Reject</option>
                      </select>
                    </td>

                    <td className='border p-2 text-white'>
                      <select className='capitalize text-white font-medium text-12 p-2 bg-sky-400 rounded'>
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </td>

                    <td className='border p-2 text-white'>
                    hh
                    </td>

                    <td className='border p-2 text-white'>
                      <a href="#" className='capitalize text-white font-medium text-12 p-2 bg-red-500 rounded'>
                        Download bill
                      </a>
                    </td>
                  </tr>


))


}
              
                  
              

                  
                
              
            </tbody>




          </table>





        </div>


      </div>


      <Footer setMenu={setMenu} />


    </section>
  )
}

export default AdminDashboard