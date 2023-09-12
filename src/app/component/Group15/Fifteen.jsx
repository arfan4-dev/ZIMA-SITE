import React from 'react'
import Image from "next/image";
import './style.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Fifteen = () => {
  useEffect(() => { 
    AOS.init({duration: 2000})
  }, []) 
  return (
    <div data-aos="zoom-in">
         <div className=" flex flex-col justify-center items-center h-[600px]">
            <p className='mb-10 ' data-aos="zoom-in">Bringing the world closer together.</p>
         <Image src="/images/15.png" alt="picture" width={300} height={400} id='img15' data-aos="zoom-in"/>
         </div>
        
    </div>
  )
}

export default Fifteen