import React from 'react'
import Image from "next/image";
import './style.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
const GroupThirteen = () => {
        useEffect(() => { 
                AOS.init({duration: 2000})
              }, [])
  return (
    <div className='h-[600px] bg-slate-100 ' id='parent'>
       
        <div className='flex flex-col justify-evenly items-center h-[400px]'>
<Image src='/images/ZDOC.png' alt='' width={100} height={100} id='img13' data-aos="fade-down"/>
<p data-aos="fade-up">Document-signing software technology that lets you sign documents online.</p>
<p></p>
        </div> 

{/* Parent div */}
<div className='mr-10'>
<div className='flex justify-end gap-x-20 '>
        <div >
        <Image src='/images/arrow.png' alt='' width={30} height={30} id='img13A' data-aos="fade-up"/>
        </div>
        <div>
        <Image src='/images/Signature.png' alt='' width={120} height={120} id='img13B' data-aos="fade-up"/>
        </div>
       
        </div>

{/* Line */}
<div className='flex flex-col justify-end items-end '>
<hr className="border-t border-gray-300 my-4 w-64" id='hr' />
<Image src='/images/desc.png' alt='' width={200} height={200} id='img13C' data-aos="fade-up"/>
</div>
</div>


    </div>
  )
}

export default GroupThirteen