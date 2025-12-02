import React from 'react'
import {Contacts} from '../Styled/Contact'
import { MdAddIcCall } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaLinkedin, FaFacebook,FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { LuSend } from "react-icons/lu";
import Footer2 from './Footer2'












const Contact = () => {

  const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  try {
    const response = await fetch('send-message.php', {
      method: 'POST',
      body: formData
    });
    const result = await response.json();
    alert(result.message);
  } catch (err) {
    console.error(err);
    alert('Error sending message.');
  }
};


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
                <span>+1 (416) 475-7556</span>
                <span>Mon-Fri, 9 AM - 6 PM EST</span>
            </div>
          </div>

          <div className='mylables'>
           <span className='iconss'><FaRegEnvelope/></span>
            <div className='itmes'>
                <span>Email</span>
                <span>support@eloanhub.com</span>
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


         <form action="" onSubmit={handleSubmit}>
          <div className='headerform'>
            <h1>Send Us a Message</h1>
          </div>

          <div className='inpus'>
            <label htmlFor="">Full Name *</label>
            <input type="text" name="full_name" id="full_name" placeholder='John Doe' required/>
          </div>
          <div className='inpus'>
            <label htmlFor="">Email Address *</label>
            <input type="text" name="email" id="email" placeholder='JohnDoe@example.com' required/>
          </div>
          <div className='inpus'>
            <label htmlFor="">Phone Number</label>
            <input type="text" name="phone" id="phone" placeholder='+1 (509) 784-0982' required/>
          </div>
          <div className='inpus'>
            <label htmlFor="">Subject *</label>
            <input type="text" name="subject" id="subject" placeholder='Subject' required/>
          </div>
          <div className='inpus'>
            <label htmlFor="">Message * (Max 500 characters)</label>
            <textarea className='textrea' name="message" id="message" placeholder='Tell us how we can help' required></textarea>
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
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.8366476909655!2d-79.38364762465945!3d43.65156685253786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34ccd82c0fad%3A0xa61cb481ab390be5!2s401%20Bay%20St.%2016th%20floor%2C%20Toronto%2C%20ON%20M5H%202Y4%2C%20Canada!5e0!3m2!1sen!2sng!4v1764676229398!5m2!1sen!2sng"
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

<Footer2/>
        
    </Contacts>
  )
}

export default Contact