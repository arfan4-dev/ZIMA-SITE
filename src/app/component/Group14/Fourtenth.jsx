import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
const GroupFourteenth = () => {
  useEffect(() => { 
    AOS.init({duration: 2000})
  }, [])
  return (
    <div className=' bg-black' id='wrapperFourtenth'>
       
       <div className=" flex flex-col text-white justify-center items-center h-[500px] sm:text-center" id='DIV'>
       <p data-aos="flip-up"> A REAL ESTATE AND PROPERTY PLATFORM THAT WILL CHANGE THE WORLD.</p></div>
 

    </div>
  )
}

export default GroupFourteenth