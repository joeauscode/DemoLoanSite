import React from 'react'
import {Home} from '../Styled/Homepage'
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaArrowRight, FaChartLine } from "react-icons/fa6";
import { FaCalculator , FaArrowAltCircleUp} from "react-icons/fa";
import { SiNike } from "react-icons/si";
import { CiWallet } from "react-icons/ci";
import { BiSolidBusiness } from "react-icons/bi";
import eligibility from '../assets/images/eleigibility.jpg'

import { GrStatusGood } from "react-icons/gr";
import Calculate from './Calculate'
import Stafflogin from './Stafflogin'
import Footer from './Footer'











const Homepage = () => {

  return (
    <Home>
    <div className="main">
       <div className="section">

         <div className="trusted">
          <span><RiSecurePaymentLine /></span>
          <span>Trusted Since 2015</span>
         </div>


         <div className="fast">
            <h1>Fast, Flexible <br/><span>Loans</span></h1>
         </div>


         <div className="Tailored">
            <p>Tailored to Your Dreams </p>
            <span>Get approved in 24 hours with competitive rates at 3.0% APR</span>
         </div>

         <div className="buttons">
            <button>Apply Now <FaArrowRight/></button>
            <button><FaCalculator /> Calculate Your Loan</button>
         </div>

         <div className="nohiddenfess">
            <span><SiNike/> No hidden fees</span>
            <span><SiNike/> Secure process</span>
            <span><SiNike/> 50,000+ happy customers</span>
            <span><SiNike/> No credit check required</span>
         </div>
    


        </div> 
    </div>

            <div className="ourservice">
             <div className="myservic">
                <p>OUR SERVICES</p>
            <p>Loan Solutions for Every Life Stage</p>
            <span>Choose the perfect loan type designed for your unique financial goals</span>
             </div>

             <div className="boxex">
                <div>
                <span style={{backgroundColor: '#ff7e7e'}}><CiWallet /></span>
                <p>Personal Loan</p>
                <span>Quick funds for weddings, medical emergencies, or debt consolidation. Amounts from $1,000 to $50,000</span>
                <a href="">Learn More <FaArrowRight/></a>
                </div>
                <div>
                <span style={{backgroundColor: '#384762'}}><BiSolidBusiness /></span>
                <p>Business Loan</p>
                <span>Fuel your business growth with flexible financing for expansion, equipment, and working capital. $5,000 to $500,000</span>
                <a href="">Learn More <FaArrowRight/></a>
                </div>
                <div>
                <span style={{backgroundColor: '#12b996'}}><FaArrowAltCircleUp /></span>
                <p>Mortgage Loan</p>
                <span>Make your dream home a reality with competitive mortgage rates and flexible terms. $50,000 to $2,000,000</span>
                <a href="">Learn More <FaArrowRight/></a>
                </div>
                <div>
                <span style={{backgroundColor: '#966ef7'}}><FaChartLine/></span>
                <p>Investment Loan</p>
                <span>Grow your wealth with property investment and portfolio expansion financing. $25,000 to $1,000,000</span>
                <a href="">Learn More <FaArrowRight/></a>
                </div>
             </div>
        </div>



        <div>

     <div className="eligibility">
        <div className='imges'>
        <img src={eligibility} alt="Eligibility" />
        </div>

        <div className='requirmnts'>
         <p>REQUIREMENTS</p>
         <h1>Are You Eligible?</h1>
         <p>Meet these simple criteria to get started</p>
         <div className='main-mark'>
            <div className='markgood'>
             <span><GrStatusGood/></span>
             <div>
                <span>Age 18 or Above</span>
                <span>You must be at least 18 years old to apply for any loan product</span>
             </div>
            </div>

            <div className='markgood'>
             <span><GrStatusGood/></span>
             <div>
                <span>Stable Income Source</span>
                <span>Regular employment or business income to ensure repayment capability</span>
             </div>
            </div>
            <div className='markgood'>
             <span><GrStatusGood/></span>
             <div>
                <span>Valid Identification</span>
                <span>Government-issued ID such as passport, driver's license, or national ID</span>
             </div>
            </div>
            <div className='markgood'>
             <span><GrStatusGood/></span>
             <div>
                <span>No Credit Check Required</span>
                <span>We don't require credit score checks, making our loans accessible to everyone</span>
             </div>
            </div>
            <div className="btn">
                <button>Check Eligibility Now</button>
            </div>
         </div>
          
        </div>

        </div> 

        <div className="calculate">
           <Calculate />
           <Stafflogin />
           <Footer/>
        </div>
       
        </div>
        
        
   
        
    </Home>
  )
}

export default Homepage