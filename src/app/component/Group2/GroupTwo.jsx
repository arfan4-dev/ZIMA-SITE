import Image from 'next/image'
import React from 'react'
import './style.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
const GroupTwo = () => {
  useEffect(() => { 
    AOS.init({duration: 2000})
  }, [])
  return (
    <div>
        <div id='wrapperTwo'>
           <div id='first' className='wrapperTwo flex justify-around  bg-black text-white items-center  mt-5 sm:justify-around md:justify-around'>
           <Image id='firstA' src='/images/19White.png'  alt='Zimo logo' width={300} height={350} data-aos="fade-right"  />
           <div>
           <p id='firstB' className='text-center text-[30px]' data-aos="fade-up">We are the global platform. <br/> 
           <span>Services in over one hundred and twenty countries.</span></p>
<p></p>
           </div>
            

           </div>
           
        </div>
    </div>
  )
}

export default GroupTwo