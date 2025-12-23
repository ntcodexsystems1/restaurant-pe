import React from 'react'
import Header from '../../../component/common/Header'
import SideBar from '../../../component/common/Sidebar'
import DishCard from '../../../component/dish/DishCard'
import Footer from '../../../component/common/Footer'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../../component/context/CartContext'



const Home = () => {


  const [menu, setMenu] = useState(false);


const {dishLink, setDishLink} = useContext(CartContext)






  return (


    <main className=' h-screen w-full bg-Primary overflow-hidden '>


      {/* OVERLAY ON ENTIRE BODY WHEN TRIGGER THE MENU BUTTON */}
      <div className={`fixed sm:relative z-10 sm:z-0 top-0 left-0 bg-black opacity-50 w-full h-full ${menu ? "flex" : "hidden"}`}>

      </div>


      {/* HEADER COMPONENTS */}

      <header className=' py-2 lg:px-6 md:px-5 px-4  flex h-auto   justify-center items-center  bg-Primary border-b-4 border-Secondary '>


        <Header placeholder="Search dishes" Cart={true} AdminTitle={false} />

      </header>

      {/* DATA CONTAINER INCLUDE - SIDEBAR & DISH COMPONENTS */}

      <section className='bg-Primary  md:h-[88%] h-full   md:px-5 px-4 w-full'>

        <div className='flex  h-full container mx-auto'>


          {/* ṢIDE-BAR COMPONENTS */}

          <aside className='lg:w-1/5 md:w-1/3 sm:w-2/5  h-auto   bg-Secondary  sm:flex sm:flex-col   my-4 rounded'>


            <SideBar

              title="Menu"
              l1="veg"
              l2="soup"
              l3="north indian"
              l4="south indian"
              l5="chinese"
              l6="mocktails"
              l7="non veg"
              setDishLink={setDishLink}


              menu={menu} setMenu={setMenu} />  

            <div className='p-4 hidden sm:flex flex-col h-1/2'>
              <h1 className='text-xl text-white capitalize font-bold'>apply coupon </h1>
              <input type="text" placeholder='coupon code' className='w-full h-8 px-2 mt-2 rounded' />
              <p className='text-white pt-2 text-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus architecto suscipit, culpa labore quibusdam reprehenderit modi! Inventore aliquam, </p>
            </div>


          </aside>

          {/* DISH COMPONENTS */}


          <aside className='sm:w-4/5   w-full  sm:pl-5   sm:py-4 py-4 pb-36  overflow-auto scrollbar_hide'>



    <DishCard dishLink={dishLink} />
  



          </aside>




        </div>


      </section>


      {/* FOOTER  COMPONENTS*/}



      <Footer setMenu={setMenu} />


    </main>




  )

}

export default Home