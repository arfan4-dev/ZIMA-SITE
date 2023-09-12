import React from 'react'
import Image from 'next/image'
import './style.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
const GroupFour = () => {
  useEffect(() => { 
    AOS.init({duration: 2000})
  }, []) 
  return (
    <div className='wrapperFour' style={{ position: 'relative', }} id='parent4'>
     <p id='letterPara' style={{ filter: 'blur(7px)', position: 'absolute', top: '40%', left: '33%',letterSpacing:'10px', fontSize:'60px', color:'white' }}>ZIMO GROUP</p>
  
    <div className='wrapperFour bg-black text-white' id='para' >
    <div class="flex justify-around  bg-transparent">
          <p></p>
  <p className="p-3" data-aos="zoom-in">LEGAL</p>
          <p></p>
          <p></p>
  
</div>
<div class="flex justify-around bg-transparent">
  <p className="p-3 " data-aos="zoom-in">FINANCE</p>
<p></p>
          <p></p>
          <p></p>

</div>

<div class="flex justify-around bg-transparent">
<p></p>
          <p></p>
          <p></p>
  <p className="p-3" data-aos="zoom-in">JETS</p>
  
</div>

<div class="flex justify-around bg-transparent">
<p></p>
          <p></p>
  <p className="p-3 " data-aos="zoom-in">DATA</p>
          <p></p>
  
</div>


<div class="flex justify-around bg-transparent">
<p></p>
  <p className="p-3" data-aos="zoom-in">PLATEFORM</p>
          <p></p>
          <p></p>
  
</div>

<div class="flex justify-around bg-transparent">
<p></p>
          <p></p>
          <p></p>
  <p className=" p-3" data-aos="zoom-in">CLOUD</p>
  
</div>

<div class="flex justify-around bg-transparent">
  <p className="p-3 " data-aos="zoom-in">REAL ESTATE</p>
<p></p>
          <p></p>
          <p></p>
  
</div>

<div class="flex justify-around bg-transparent">
<p></p>
          <p></p>
          <p></p>
  <p className=" p-3" data-aos="zoom-in">TRAVEL</p>
  
</div>

<div class="flex justify-around bg-transparent">
<p></p>
  <p className="   " data-aos="zoom-in">CARS</p>
          <p></p>
          <p></p>
  
</div>

<div class="flex justify-around bg-transparent">
<p></p>
          <p></p>
          <p></p>
  <p className="p-3" data-aos="zoom-in">CRYPTO EXCHANGE</p>
  
</div>


<div class="flex justify-around bg-transparent">
  <p className=" p-3" data-aos="zoom-in">YACHTS</p>
<p></p>
          <p></p>
          <p></p>
  
</div>
<div class="flex justify-around bg-transparent">
<p></p>
  <p className="p-3 " data-aos="zoom-in">WATCHES</p>
          <p></p>
          <p></p>
  
</div>
<div class="flex justify-around bg-transparent">
  <p className=" p-3" data-aos="zoom-in">PRIVATE ISLAND</p>
<p></p>
          <p></p>
          <p></p>
  
</div>

<div class="flex justify-around bg-transparent">
<p></p>
          <p></p>
  <p className='p-3' data-aos="zoom-in">DIAMONDS</p>
          <p></p>
  
</div>


    </div>
  </div>
  
  )
}

export default GroupFour