import React from 'react'
import {Contacts} from '../Styled/Contact'
import { MdAddIcCall } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaLinkedin, FaFacebook,FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { LuSend } from "react-icons/lu";












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
        <h1>Contact Information</h1>
        <p>Our team is available Monday through Friday, 9 AM to 6 PM EST. For urgent matters, please call our hotline.</p>
         
         <div className='theboes'>
         
          <div>
           <span><MdAddIcCall/></span>
            <div>
                <span>Phone</span>
                <span>+1 (555) 123-4567</span>
                <span>Mon-Fri, 9 AM - 6 PM EST</span>
            </div>
          </div>

          <div>
           <span><FaRegEnvelope/></span>
            <div>
                <span>Email</span>
                <span>info@loanhub.com</span>
                <span>We'll respond within 24 hours</span>
            </div>
          </div>

          <div>
           <span><CiLocationOn/></span>
            <div>
                <span>Office Address</span>
                <span>123 Financial Street</span>
                <span>New York, NY 10001</span>
                <span>United States</span>
            </div>
          </div>

          <div>
           <span><MdOutlineAccessTime/></span>
            <div>
                <span>Business Hours</span>
                <span>Monday - Friday: 9:00 AM - 6:00 PM</span>
                <span>Saturday: 10:00 AM - 2:00 PM</span>
                <span>Sunday: Closed</span>
            </div>
          </div>

          <div>
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
          <div>
            <h1>Send Us a Message</h1>
          </div>

          <div>
            <label htmlFor="">Full Name *</label>
            <input type="text" name="" id="" placeholder='John Doe'/>
          </div>
          <div>
            <label htmlFor="">Email Address *</label>
            <input type="text" name="" id="" placeholder='JohnDoe@example.com'/>
          </div>
          <div>
            <label htmlFor="">Phone Number</label>
            <input type="text" name="" id="" placeholder='+1 (509) 784-0982'/>
          </div>
          <div>
            <label htmlFor="">Subject *</label>
            <input type="text" name="" id="" placeholder='Subject'/>
          </div>
          <div>
            <label htmlFor="">Message * (Max 500 characters)</label>
            <textarea name="" id="" placeholder='Tell us how we can help'></textarea>
            <span>0/500 characters</span>
          </div>
          <div>
            <button>Send Message <LuSend/></button>
          </div>

         </form>



        </div>


    </div>



</div>
        
    </Contacts>
  )
}

export default Contact