import React from 'react'
import {Navbar} from '../Styled/Nav'
import { IoHomeOutline } from "react-icons/io5";


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


  return (
    <Navbar>
        
        <div className="main">
        <div className="left" onClick={Gotohome}>
            <span><IoHomeOutline/></span>
            <span>IronOak Loan</span>
        </div>
      
            <ul className="right">
                <li onClick={Gotohome}>Home</li>
                <li onClick={Gotoabout}>About Us</li>
                <li>Services</li>
                <li onClick={Gotocontact}>Contact</li>
                <li><button>Apply Now</button></li>
            </ul>
     
        </div>

    </Navbar>
  )
}

export default Nav