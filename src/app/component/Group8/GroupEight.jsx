import React from 'react'
import Image from "next/image";
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
// import Img from ''
const GroupEight = () => {

  return (
    <div className='overflow-hidden '>
        <div className="relative w-screen">
        <Image src="/images/Watches.png" alt="picture" width={2200} height={400} id='image-container'/>

        <div  className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-white text-[30px] bg-transparent" data-aos="flip-right">
        <p data-aos="fade-right">Watches</p>
          </div>
        </div>

    </div>
  )
}

export default GroupEight