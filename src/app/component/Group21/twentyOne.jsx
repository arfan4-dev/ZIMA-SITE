import React from 'react'
import Image from 'next/image'
import './style.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
const TwentyOne = () => {
  useEffect(() => { 
    AOS.init({duration: 2000})
  }, []) 
  return (
    <div className='bg-black text-white'>
        <div className='flex flex-col justify-center items-center gap-y-10 mt-7 mb-7  sm:flex md:flex lg:flex xl:flex' data-aos='zoom-in'>
        <Image src='/images/19White.png' alt='' width={270} height={270} style={{marginTop:'20px'}}/> 
        </div>

<div className='flex justify-evenly mb-10 text-xl'  data-aos='zoom-in'>

<p>RELATED: COOKIES POLICY</p> 

  <p>TERMS OF SERVICES</p>
<p></p>
<p></p>
</div>
<div>

<div className='flex justify-between w-screen gap-x-10' id='twenty1'  data-aos='zoom-in'>
            <p className=' w-[800px] text-5xl mt-[500px] ml-32' id='p1'>ZIMOGROUP</p>
            <p className=' w-[1200px] text-lg ' id='p2' >Welcome to www.zimogroup.org (the Site), a website provided by ZIMO GROUP LIMITED, the parent company of ZIMO (Company). Your use of the Site is at all times subject to the following terms and conditions, and you are deemed to have accepted these terms of service upon using the Site. You should review these terms of service carefully, and be sure you understand them, prior to using the Site. If you do not agree to these terms of service, you must immediately exit the Site. Scope of Use The Site is provided for promotional and informational purposes only, and Company does not provide any client services through the Site (www.zimogroup.org).<br/> You may only use the Site if you are a current or prospective customer of Company, or otherwise interested in learning more about Company for a legitimate business/user purpose. The Site may not be used for any unlawful, fraudulent, harassing, objectionable or other non-legitimate business purpose. Site Content The Site and all content on the Site (collectively Content), plus all copyrights, trademarks, service marks and other intellectual property rights in the Site and such Content, are owned or licensed by Company.<br/> You may access, use and copy Content only as expressly permitted herein. No provision of these terms of service, and nothing contained on the Site, grants to you, whether expressly, implicitly or otherwise, any license or other right to copy, disclose, distribute, retransmit, use or create derivative works of any Content without the written permission of Company or its licensee (as the case may be), and any such copying, disclosure, distribution, retransmission, use or creation of derivative works is strictly prohibited, except as expressly set forth herein. <br/>Third-Party Websites The Site may contain links to websites maintained by third parties (individually a Third-Party Site). Company is not responsible for any content on a Third-Party Site (including, but not limited to, any opinions contained on a Third-Party Site), and does not necessarily endorse or otherwise approve of such content. No link from the Site to a Third-Party Site, or from a Third-Party Site to the Site, is an endorsement, sponsorship or recommendation by Company of such Third-Party Site, and the link is provided only for your convenience. In addition, your use of a Third-Party Site will be subject to its terms of use and other provisions, for which you are responsible if you proceed to such Third-Party Site.<br/> Privacy Policy Company may collect certain personal and analytical information from you, among other ways, through the Site, and will handle such information in accordance with its privacy policy, which can also be located on the Site (the Privacy Policy).<br/> Company is not responsible for any content on a Third-Party Site (including, but not limited to, any opinions contained on a Third-Party Site), and does not necessarily endorse or otherwise approve of such content. No link from the Site to a Third-Party Site, or from a Third-Party Site to the Site, is an endorsement, sponsorship or recommendation by Company of such Third-Party Site, and the link is provided only for your convenience.</p> 
            <p className='h-[800px] mt-[100px] border-r-2 border-yellow-600 ' id='p3'></p>

            <p className=' text-lg w-[1200px]'  id='p4'>Indemnification You must indemnify, defend and hold harmless Company, its subsidiaries and other affiliates, and its officers, employees and other agents, from all costs, expenses, damages, liabilities, losses and other monetary payments (including, but not limited to, attorneys fees and disbursements) in connection with (a) your access to, and use of, the Site, (b) your failure to perform any obligation pursuant to these terms of service, (c) your violation of any rights of a third party (including, but not limited to, infringement of a third partys intellectual property rights, or rights of privacy and publicity, and claims of defamation), and (d) any information or other content submitted by you to Company through the Site<br/>. Information Provided by You You grant to Company a non-exclusive, perpetual and fully-paid license to copy, distribute, modify, and create derivative works of all information and other content submitted by you to Company through the Site. All information provided to you through the Site must be accurate and complete in all respects, unless by its nature such information is not intended to be accurate or complete. In addition, you must at all times immediately update any such information to maintain its accuracy and completeness.<br/> Applicable Law These terms of service will be governed by, and construed in accordance with, the laws of England, United Kingdom, without regard to principles of conflict of laws. Disputes Except for any dispute covered by the Privacy Policy, you and Company (a) will submit any dispute relating to the Site, any Content or these terms of service exclusively to a federal, state or local court located in England, United Kingdom and having subject matter jurisdiction over such dispute,<br/> and (b) consent to any such court being a proper venue, and waive any objection to its not being a proper venue (including, but not limited to, any such objection based on convenience), for such dispute. </p>
 
        </div>
    </div>
    </div> 
  )
}

export default TwentyOne