import React from 'react'
import Image from 'next/image'
import { useEffect } from 'react'
import './style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
const GroupThree = () => {
  useEffect(() => { 
    AOS.init({duration: 2000})
  }, []) 
  return (
    <div className=' bg-slate-100' id='wrapperThree'>
        <div className=' flex flex-col justify-center items-center text-[40px]  ' id='containerThree'>
        <p data-aos="fade-down">REVOLUTIONARY</p>
        <div className='flex gap-x-24 mt-10 items-center mb-10'>
        <Image src='/images/logo.png'  alt='Zimo logo' width={300} height={350} data-aos="flip-down" />
            <p className='h-40 border-r-2 border-gray-500 '></p>
            <Image  src='/images/logo.png'  alt='Zimo logo' width={300} height={350} data-aos="flip-down" />
        </div>
        <p className='text-[40px]' data-aos="fade-up">{`The only platform of it's kind in the world.`}</p>
    </div>
    </div>
    
  )
}

export default GroupThree