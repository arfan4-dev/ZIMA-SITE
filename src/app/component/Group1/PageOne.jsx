"use client"
// import React,{useEffect} from 'react'
import './style.css'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css' 
const PageOne = () => {
  // useEffect(() => {
  //   AOS.init({duration: 2000})
  // }, []) 
  return (
    <div id='wrapper'> 
        <div className='relative' id='containerOne'> 
            <Image src='/images/logo.png' alt='logo' width={600} height={600} id='imgOne' />

            <div id='blurOne'>
              <div style={{ height:'100%',letterSpacing:'5px' , display:'flex', flexDirection:"column",justifyContent:"center", alignItems:"start"}}>

          <p id='paraOne'>ZIMA GROUP</p>
              </div>
              <div style={{  display:'flex', flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
              <Image src='/images/down-arrow.png' alt='logo' width={60} height={60} id='ArrowOne'  /> 
              </div>
            </div>
        </div>
    </div>
  )
}

export default PageOne