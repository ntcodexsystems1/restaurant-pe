import React, { useEffect, useState } from 'react'

const Practical = () => {



  const [dataList, setDataList] = useState({ name: "nazim", email: "zk8052272@gmail.com" })

  const [loading, setLoading] = useState(true)

  useEffect(() => {

  const data =  setTimeout(() => (

   setLoading(false)

    ), 2000)

  
}, [])




return (




  <div>



    {

      loading ? (

        <p>loading...</p>

      ) : (

        <div>

{

        Object.entries(dataList).map(([key, value]) => (

          <ul key={key}>
            <li>
              {value}
            </li>

          </ul>


        ))
        
        }
         </div>
        
        )
       

    }
  </div>

) 
}


export default Practical