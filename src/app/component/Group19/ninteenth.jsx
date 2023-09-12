import React from 'react'
import Image from 'next/image'  
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Ninteenth = () => {
  useEffect(() => { 
    AOS.init({duration: 2000})
  }, []) 
  return (
 <div className='bg-zinc-300 mb-10' >

< div className=" flex flex-col text-white justify-center items-center h-[500px]">
        <Image src='/images/thank.png' alt='' width={200} height={200} data-aos="flip-up"/>
       
       
       </div>

       <div className='flex justify-center 'data-aos="fade-up">
<Image src='/images/15.png' alt='' width={200} height={200}/>
</div>
<div className='flex gap-x-10 justify-center mt-5 ' data-aos="fade-up">

    <p>© ZIMO GROUP 2023</p>
    <p>TERMS OF SERVICE</p>
    <p>PRIVACY POLICY</p>
</div>
 </div>
        
  )
}

export default Ninteenth