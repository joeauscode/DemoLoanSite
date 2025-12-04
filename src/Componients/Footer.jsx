// import React, {useState}from 'react'
// import {Foot} from '../Styled/Footer'
// import { FiSend } from "react-icons/fi";
// import { FaLinkedin } from "react-icons/fa6";
// import { BsTwitterX } from "react-icons/bs";
// import { FaFacebookSquare } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { MdAddCall } from "react-icons/md";
// import { FaRegEnvelope } from "react-icons/fa";
// import { CiLocationOn } from "react-icons/ci";

// import { IoHomeOutline } from "react-icons/io5";

// const Footer = () => {

//     const [email, setEmail] = useState('');
//   const [status, setStatus] = useState(''); // success or error message

//  const [loading, setLoading] = useState(false);

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   if (!email) return setStatus('Please enter a valid email.');
//   setLoading(true);
//   setStatus('');
//   const formData = new FormData();
//   formData.append('subscribe', email);

//   try {
//     const response = await fetch('/subscribe.php', { method: 'POST', body: formData });
//     const result = await response.json();
//     setStatus(result.message);
//     if (result.status === 'success') setEmail('');
//   } catch {
//     setStatus('Error sending subscription.');
//   } finally {
//     setLoading(false);
//   }
// };


//   return (

//     <Foot>

//     <div className="main-footer">
      
//     <div className='homesfirts'>

//      <div className='homename'>
//       <span><IoHomeOutline/></span>
//       <span>eLoanHub</span>
//      </div>
//      <p className='Empowering'>Empowering your financial future</p>

//     <form  action='/subscribe.php' className='inputs' method="POST" onSubmit={handleSubmit}>
//       <input
//         type="email"
//         name="subscribe"
//         id="subscribe"
//         placeholder='Your Email'
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <button type="submit" disabled={loading}>{loading ? 'Sending...' : <FiSend />}</button>
//       {status && <p className="status-message">{status}</p>}
//     </form>
//      <div className='socialmidia'>
//       <span><FaLinkedin/></span>
//       <span><BsTwitterX/></span>
//       <span><FaFacebookSquare/></span>
//       <span><FaInstagram/></span>
//      </div>
//     </div>


//     <ul>
//       <li>Quick Links</li>
//       <li>About Us</li>
//       <li>Services</li>
//       <li>Application Form</li>
//       <li>Contact Us</li>
//       <li>FAQ</li>
//       <li>Blog</li>
//     </ul>

//     <ul>
//       <li>Our Services</li>
//       <li>Personal Loans</li>
//       <li>Business Loans</li>
//       <li>Mortgage Loans</li>
//       <li>Investment Loans</li>

//     </ul>

//     <ul>
//       <li>Get in Touch</li>
//       <li className='call'><MdAddCall/> +1 (416) 475-7556</li>
//       <li className='message'><FaRegEnvelope/> support@eloanhub.com</li>
//       <li className='location'><CiLocationOn/> 401 Bay St. 16th floor, Toronto, ON M5H 2Y4</li>

//     </ul>
 


//     </div>
//        <div className="lines">
//         <hr/>
//        </div>

//        <div className="reserved">
//         <div>
//           <span>© 2025 eLoanHub. All rights reserved.</span>
//         </div>

//         <div className='privacy'>
//          <span>Privacy Policy</span>
//          <span>Terms of Service</span>
//         <span>Cookie Policy</span>
//         </div>

//         <div>
//           <span>Powered by eLoanHub</span>
//         </div>
//        </div>

//     </Foot>
//   )
// }

// export default Footer












import React, { useState } from 'react';
import { Foot } from '../Styled/Footer';
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
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return setStatus('Please enter a valid email.');
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('127.0.0.1:8000/subscribe/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus(result.message);
        setEmail('');
      } else {
        setStatus(result.error || 'Error sending subscription.');
      }
    } catch (err) {
      setStatus('Error sending subscription.');
      console.error(err);
    } finally {
      setLoading(false);
      setTimeout(() => {
  window.location.href = '/';
}, 2000);
    }
  };

  return (
    <Foot>
      <div className="main-footer">
        <div className='homesfirts'>
          <div className='homename'>
            <span><IoHomeOutline/></span>
            <span>eLoanHub</span>
          </div>
          <p className='Empowering'>Empowering your financial future</p>

          <form className='inputs' onSubmit={handleSubmit}>
            <input
              type="email"
              name="subscribe"
              placeholder='Your Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? 'Sending...' : <FiSend />}
            </button>
            {status && <p className="status-message">{status}</p>}
          </form>

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
          <li className='message'><FaRegEnvelope/> support@eloanhub.com</li>
          <li className='location'><CiLocationOn/> 401 Bay St. 16th floor, Toronto, ON M5H 2Y4</li>
        </ul>
      </div>

      <div className="lines"><hr/></div>

      <div className="reserved">
        <div>
          <span>© 2025 eLoanHub. All rights reserved.</span>
        </div>
        <div className='privacy'>
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
};

export default Footer;
