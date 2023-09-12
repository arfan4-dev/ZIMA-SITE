import React from 'react'
import Image from 'next/image'
import './style.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
const TwentyTwo = () => {
        useEffect(() => { 
                AOS.init({duration: 2000})
              }, [])
  return (
        <div>
    <div className='h-[700px] flex justify-around' id='parent22'>
        
{/* First Div */}
<div className='flex flex-col justify-between items-start ' id='first22'>

  <div id='firstA22' style={{letterSpacing:'3px',}} data-aos="fade-right">
    <p>ENQUIRIES</p>
    <p>hello@zimogroup.org</p>
  </div> 
  <p  className='text-6xl' id='hidePara' >ZIMO GROUP</p>
    <div   style={{marginLeft:'20px', display:'none' }}><Image src='/images/15.png' alt='' width={200} height={200} id='imgHide'/> </div>
   
  
  <div id='firstB22 ' style={{letterSpacing:'3px',  marginLeft:"0px", marginRight:"0px"}} data-aos="fade-up">
    <p  className='text-6xl' id='firstP22'>ZIMO GROUP</p>
    <div id='imgDiv' style={{marginLeft:'20px'}}><Image src='/images/15.png' alt='' width={200} height={200} id='img12'/> </div>
    <p  id='firstP23'>ZIMO GROUP LIMITED</p>
    <p  id='firstP24'>71 - 75 SHELTON STREET COVENT GARDEN LONDON WC2H 9JQ ENGLAND UNITED KINGDOM</p>
    <p  id='firstP25'>HELLO@ZIMOGROUP.ORG</p>
    <p  id='firstP26'>REGISTERED IN ENGLAND 14383397</p>
  </div>
 
  <div id='middle22' style={{letterSpacing:'3px',  marginLeft:"0px", marginRight:"0px"}}>
    <p>ZIMO is a wholly owned subsidiary company of ZIMO GROUP LIMITED. <br /> The registered office is: 71-75 Shelton Street, <br/> Covent Garden, London, WC2H 9JQ, England, United Kingdom.
    </p>
  </div>
  
</div>

{/* second */}
<div id='second22'    style={{letterSpacing:'3px',  marginLeft:"10px", marginRight:"0px"}} data-aos="fade-down"    >
    <p>Contact</p>
</div>

{/* Third */}
<div className='flex flex-col justify-center items-center ' id='third22' data-aos="fade-left">
   <div style={{letterSpacing:'3px',  marginLeft:"0px", marginRight:"0px"}}>
   <p>REAL ESTATE</p>
    <p>realestate@zimogroup.org</p>
    <p>CARS</p>
    <p>cars@zimogroup.org</p>
    <p>YACHTS</p>
    <p>yachts@zimogroup.org</p>

    <p>WATCHES</p>
    <p>watches@zimogroup.org</p>
    <p>jets@zimogroup.org</p>
    <p>PRIVATE ISLANDS</p>
    <p>privateislands@zimogroup.org</p>
    <p>DIAMONDS</p>
    <p>diamonds@zimogroup.org</p>
    <p>TRAVEL THE WORLD</p>
    <p>ttw@zimogroup.org</p>
   </div>
</div>

{/* Fourth */}


<div className='' id='fourth22' data-aos="fade-left">
    <div style={{letterSpacing:'3px',  marginLeft:"0px", marginRight:"0px"}}>
        <p>PROPERTY PROFESSIONALS / AGENTS
</p>
        <p>agent@zimogroup.org
</p>
        <p>ADVERTISING
</p>
        <p>advertising@zimogroup.org
</p>
        <p>SPONSORSHIP</p>
        <p>sponsor@zimogroup.org
</p>
        <p>PARTNERS</p>
        <p>partners@zimogroup.org
</p>
        <p>LEGAL</p>
        <p>legal@zimogroup.org
</p>
        <p>CORPORATE
</p>
        <p>corporate@zimogroup.org
</p>
        <p>MARKETING</p>
        <p>marketing@zimogroup.org
</p>

    </div>

    <div style={{letterSpacing:'3px',  marginLeft:"0px", marginRight:"0px"}}>
    <p>PRESS</p>
<br />
        <p>UNITED KINGDOM
</p>
        <p>press-uk@zimogroup.org
</p>
        <p>EUROPE
</p>
        <p>press-eu@zimogroup.org
</p>
        <p>NORTH AMERICA
</p>
        <p>press-na@zimogroup.org
</p>
        <p>MIDDLE EAST
</p>
        <p>press-me@zimogroup.org
</p>
        <p>ASIA/AUSTRALIA
</p>
        <p>press-apac@zimogroup.org
</p>
        <p>AFRICA
</p>
        <p>press-af@zimogroup.org
</p>
        <p>CHINA/HONG KONG
</p>
        <p>press-ch@zimogroup.org
</p>
    </div>
</div>

    </div >
    <div id='fifth' style={{width:"50%", marginTop:'20px',letterSpacing:'3px', textAlign:'justify'}}>ZIMO is a wholly owned subsidiary company of ZIMO GROUP LIMITED.
The registered officeis : 71 - 75 Shelton Street, Covent Garden , London , WC2H 9 JQ, England , United Kingdom</div>
    </div>
   
  )
}

export default TwentyTwo