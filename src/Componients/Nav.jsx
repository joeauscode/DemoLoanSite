import React from 'react'
import {Navbar} from '../Styled/Nav'
import { IoHomeOutline } from "react-icons/io5";


const Nav = () => {
  return (
    <Navbar>
        
        <div className="main">
        <div className="left">
            <span><IoHomeOutline/></span>
            <span>IronOak Loan</span>
        </div>
      
            <ul className="right">
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Contact</li>
                <li><button>Apply Now</button></li>
            </ul>
     
        </div>

    </Navbar>
  )
}

export default Nav