import React from 'react'
import {Navbar} from '../Styled/Nav'
import { IoHomeOutline } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";



const Nav = () => {


  const Gotoabout = () => {
    window.location.href = '/about-us'
  }
  const Gotohome = () => {
    window.location.href = '/'
  }
  const Gotocontact = () => {
    window.location.href = '/contact-us'
  }
  const Gotoapply = () => {
    window.location.href = '/apply-loan'
  }
  const Gotoservers = () => {
    window.location.href = '/ourservice'
  }


  return (
    <Navbar>
        
        <div className="main">
        <div className="left" onClick={Gotohome}>
            <span><IoHomeOutline/></span>
            <span>eLoanHub</span>
        </div>

        <div className="menu">
          <RiMenu3Fill/>
        </div>
      
            <ul className="right">
                <li onClick={Gotohome}>Home</li>
                <li onClick={Gotoabout}>About Us</li>
                <li onClick={Gotoservers}>Services</li>
                <li onClick={Gotocontact}>Contact</li>
                <li onClick={Gotoapply}><button>Apply Now</button></li>
            </ul>
     
        </div>

    </Navbar>
  )
}

export default Nav