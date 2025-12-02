import React from 'react'
import {Foot} from '../Styled/Footer'
import { FiSend } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

import { IoHomeOutline } from "react-icons/io5";

const Footer = () => {
  return (

    <Foot>

    <div className="main-footer">
      
    <div className='homesfirts'>

     <div className='homename'>
      <span><IoHomeOutline/></span>
      <span>eLoanHub</span>
     </div>
     <p className='Empowering'>Empowering your financial future</p>
     <div className='inputs'>
      <input type="text" name="" id="" placeholder='Your Email' />
      <button><FiSend/></button>
     </div>
     <div className='socialmidia'>
      <span><FaLinkedin/></span>
      <span><BsTwitterX/></span>
      <span><FaFacebookSquare/></span>
      <span><FaInstagram/></span>
     </div>
    </div>


    <ul>
      <li>Quick Links</li>
      <li>About Us</li>
      <li>Services</li>
      <li>Application Form</li>
      <li>Contact Us</li>
      <li>FAQ</li>
      <li>Blog</li>
    </ul>

    <ul>
      <li>Our Services</li>
      <li>Personal Loans</li>
      <li>Business Loans</li>
      <li>Mortgage Loans</li>
      <li>Investment Loans</li>

    </ul>

    <ul>
      <li>Get in Touch</li>
      <li className='call'><MdAddCall/> +1 (416) 475-7556</li>
      <li className='message'><FaRegEnvelope/> info@eLoanHub.com</li>
      <li className='location'><CiLocationOn/> 123 Financial Street  New York, NY 10001</li>

    </ul>
 


    </div>
       <div className="lines">
        <hr/>
       </div>

       <div className="reserved">
        <div>
          <span>© 2025 eLoanHub. All rights reserved.</span>
        </div>

        <div>
         <span>Privacy Policy</span>
         <span>Terms of Service</span>
        <span>Cookie Policy</span>
        </div>

        <div>
          <span>Powered by eLoanHub</span>
        </div>
       </div>

    </Foot>
  )
}

export default Footer