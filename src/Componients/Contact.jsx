import React from 'react'
import {Contacts} from '../Styled/Contact'
import { MdAddIcCall } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaLinkedin, FaFacebook,FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { LuSend } from "react-icons/lu";
import Footer from './Footer'












const Contact = () => {

  return (
    <Contacts>
<div className="main-contact">
<h1>Get in Touch</h1>
<p>Have questions? We're here to help. Reach out to our team and we'll get back to you within 24 hours.</p>
</div>

<div className="contact-ushere">

    <div className="contact">

        <div>

         <div className="contsform">

         <div className='theboes'>
          <div className='headies'> 
            <h1>Contact Information</h1>
        <p>Our team is available Monday through Friday, 9 AM to 6 PM EST. For urgent matters, please call our hotline.</p>
         
 </div>
          <div className='mylables' >
           <span className='iconss'><MdAddIcCall/></span>
            <div className='itmes'>
                <span>Phone</span>
                <span>+1 (555) 123-4567</span>
                <span>Mon-Fri, 9 AM - 6 PM EST</span>
            </div>
          </div>

          <div className='mylables'>
           <span className='iconss'><FaRegEnvelope/></span>
            <div className='itmes'>
                <span>Email</span>
                <span>info@loanhub.com</span>
                <span>We'll respond within 24 hours</span>
            </div>
          </div>

          <div className='mylables'>
           <span className='iconss'><CiLocationOn/></span>
            <div className='itmes'>
                <span>Office Address</span>
                <span>123 Financial Street</span>
                <span>New York, NY 10001</span>
                <span>United States</span>
            </div>
          </div>

          <div className='mylables'>
           <span className='iconss'><MdOutlineAccessTime/></span>
            <div className='itmes'>
                <span>Business Hours</span>
                <span>Monday - Friday: 9:00 AM - 6:00 PM</span>
                <span>Saturday: 10:00 AM - 2:00 PM</span>
                <span>Sunday: Closed</span>
            </div>
          </div>

          <div className='socialmedia'>
            <p>Follow Us</p>
            <div>
                <span><FaLinkedin/></span>
                <span><FaFacebook/></span>
                <span><BsTwitterX/></span>
                <span><FaInstagram/></span>
            </div>
          </div>

         </div>


         <form action="">
          <div className='headerform'>
            <h1>Send Us a Message</h1>
          </div>

          <div className='inpus'>
            <label htmlFor="">Full Name *</label>
            <input type="text" name="" id="" placeholder='John Doe'/>
          </div>
          <div className='inpus'>
            <label htmlFor="">Email Address *</label>
            <input type="text" name="" id="" placeholder='JohnDoe@example.com'/>
          </div>
          <div className='inpus'>
            <label htmlFor="">Phone Number</label>
            <input type="text" name="" id="" placeholder='+1 (509) 784-0982'/>
          </div>
          <div className='inpus'>
            <label htmlFor="">Subject *</label>
            <input type="text" name="" id="" placeholder='Subject'/>
          </div>
          <div className='inpus'>
            <label htmlFor="">Message * (Max 500 characters)</label>
            <textarea className='textrea' name="" id="" placeholder='Tell us how we can help'></textarea>
            <span>0/500 characters</span>
          </div>
          <div className='inpus'>
            <button>Send Message <LuSend/></button>
          </div>

         </form>


         </div>


        </div>


    </div>



</div>



<div className="maps">
    <iframe src="https://www.google.com/maps/embed?pb=!4v1764606520564!6m8!1m7!1sOlb_SLEypv6xwo9dMM7Niw!2m2!1d38.782174036539374!2d-76.89898934739094!3f342.38138!4f0!5f0.7820865974627469"
     width="100%" 
     height="450" 
     style={{border: '0'}} 
     allowfullscreen="" 
     loading="lazy" 
     referrerpolicy="no-referrer-when-downgrade">
     </iframe>
</div>



<div className="fresquentquestions">
<h1>Frequently Asked Questions</h1>
<p>Quick answers to common questions</p>

<div className="ask">

    <div>
    <p>How long does the approval process take?</p>
    <span>Most applications are reviewed within 24-48 hours. Once approved, funds can be disbursed within 1-3 business days depending on the loan type.

</span>
    </div>

    <div>
    <p>What documents do I need to apply?</p>
    <span>You'll need a valid ID, proof of income, bank statements, and proof of residence. Additional documents may be required based on the loan type.</span>
    </div>

    <div>
    <p>Can I pay off my loan early?</p>
    <span>Yes! We encourage early repayment and do not charge any prepayment penalties on any of our loan products.</span>
    </div>

    <div>
    <p>What credit score do I need?</p>
    <span>While we prefer a credit score of 600 or above, we evaluate each application individually and consider other factors beyond credit score.</span>
    </div>

</div>
</div>

<Footer/>
        
    </Contacts>
  )
}

export default Contact