import React from 'react'
import {Aboutus} from '../Styled/About'
import OurStory from '../assets/images/OURSTORY.jpg'
import { FaEye } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { MdVerifiedUser } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaLightbulb } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";
import male from '../assets/images/male.jpg'
import famle from '../assets/images/famele.jpg'
import mail from '../assets/images/mail.jpg'

import Footer from './Footer'






const About = () => {

            const gotoapplyloan = () => {
    window.location.href = '/apply-loan'
  }
            const gotocontact = () => {
    window.location.href = '/contact-us'
  }


  return (
    <Aboutus>

<div className="main-about">
<h1>About eLoanHub</h1>
<p>Empowering financial dreams since 2015 with transparent, fast, and customer-focused lending solutions</p>
</div>

<div className="about-body">
    <div>

<div className="ourstory">
    <div>
        <span>OUR STORY</span>
        <h1>Building Trust Through Excellence</h1>
       <p>Founded in 2015, eLoanHub was born from a simple vision: to make lending accessible, transparent, and customer-centric. We recognized that traditional lending institutions often created barriers that prevented hardworking individuals and businesses from accessing the capital they needed to thrive.</p>
       <p>Our founders, with over 50 years of combined experience in financial services, set out to revolutionize the lending industry by leveraging technology and maintaining a human touch. Today, we've helped over 50,000 customers achieve their financial goals, from buying their first home to expanding their businesses.</p>
       <p>At eLoanHub, we believe that everyone deserves access to fair and competitive financing. That's why we've streamlined our processes, eliminated hidden fees, and committed to providing exceptional customer service at every step of your journey.</p>

    </div>

    <div>
   <img src={OurStory} alt="OurStory" />
    </div>
</div>



<div className="ourmission">
    <div>
        <span><BiTimeFive/></span>
        <h1>Our Mission</h1>
        <p>To provide accessible, transparent, and competitive financial solutions that empower individuals and businesses to achieve their dreams. We strive to simplify the lending process while maintaining the highest standards of integrity and customer service.</p>
    </div>

    <div>
        <span><FaEye/></span>
        <h1>Our Vision</h1>
       <p>To become the most trusted and innovative lending partner, recognized for transforming lives through financial empowerment. We envision a future where everyone has equal access to the capital they need to build a better tomorrow.</p>
</div>


</div>




</div>
</div>


<div className="ourcore">



<div className="header">
    <span>WHAT DRIVES US</span>
<h1>Our Core Values</h1>
<p>The principles that guide every decision we make</p>
</div>

<div className="boxsecure">
    <div>
 <span className='firsticon'><MdVerifiedUser/></span>
    <h3>Integrity</h3>
    <p>We operate with complete transparency and honesty in all our dealings, ensuring you always know where you stand.</p>
    </div>
    <div>
 <span className='secondicon'><RiCustomerService2Fill/></span>
    <h3>Customer First</h3>
<p>Your success is our success. We prioritize your needs and work tirelessly to exceed your expectations.</p>    
</div>
    <div>
 <span className='thirdicon'><FaLightbulb/></span>
    <h3>Innovation</h3>
 <p>We continuously improve our processes and technology to provide faster, easier, and better lending experiences.</p>
    </div>
    <div>
 <span className='Forticon'><FaHandshake/></span>
    <h3>Responsibility</h3>
<p>We promote responsible lending practices and financial literacy to help you make informed decisions.

</p>
    </div>
   
</div>
</div>


<div className="Impact">
    <h1>Our Impact in Numbers</h1>
    <p>Real results that speak for themselves</p>

    <div className="boxexhere">
        <div>
            <h1>50K+</h1>
            <span>Happy Customers</span>
        </div>
        <div>
            <h1>$2.5B+</h1>
            <span>Loans Disbursed</span>
        </div>
        <div>
            <h1>98%</h1>
            <span>Satisfaction Rate</span>
        </div>
        <div>
            <h1>24hrs</h1>
            <span>Average Approval Time</span>
        </div>
    </div>
</div>


<div className="leadership">
 
 <div className='mainleader'>
      <p>MEET THE TEAM</p>
  <h1>Leadership Team</h1>
  <span>Experienced professionals dedicated to your financial success</span>
 </div>

  <div className="leaders">
    <div>
        <img src={mail} alt="mail" />
        <p>Michael Anderson</p>
        <span className='span'>Chief Executive Officer</span>
        <span>20+ years in financial services, former VP at major banking institution</span>
    </div>
    <div>
        <img src={famle} alt="famle" />
        <p>Sarah Thompson</p>
        <span className='span'>Chief Financial Officer</span>
        <span>Expert in risk management and financial strategy with 15+ years experience</span>
    </div>
    <div>
        <img src={male} alt="male" />
        <p>Michael Anderson</p>
        <span className='span'>Chief Technology Officer</span>
        <span>Fintech innovator driving digital transformation in lending industry

</span>
    </div>
  </div>

</div>



<div className="ready">
   <div className="read-main">
    <h1>Ready to Get Started?</h1>
    <p>Join thousands of satisfied customers who trust eLoanHub for their financial needs</p>
    <div className='btns'>
    <button onClick={gotoapplyloan}>Apply Now</button>
    <button onClick={gotocontact}>Contact Us</button>
    </div>
   </div>

</div>

<Footer/>

        
    </Aboutus>
  )
}

export default About