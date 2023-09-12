import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Sixteen = () => {
  useEffect(() => { 
    AOS.init({duration: 2000})
  }, []) 
  return (
    <div>
      < div className=" flex flex-col text-white justify-center items-center h-[600px] bg-black">
            <p className='mb-10 ' data-aos="flip-down">GLOBAL ACCESS TO REAL ESTATE AND PROPERTY TO EVERYONE.
</p>
         </div>
    </div>
  )
}

export default Sixteen