import React from 'react';
import { Services } from '../Styled/service';

// React icons
import { CiWallet, CiMedicalCase } from "react-icons/ci";
import { GiSelfLove } from "react-icons/gi";
import { BsReverseLayoutSidebarReverse } from "react-icons/bs";
import { RiToolsFill } from "react-icons/ri";
import { MdCastForEducation } from "react-icons/md";
import { IoMdAirplane } from "react-icons/io";
import { AiOutlineLineChart } from "react-icons/ai";
import { FaCheckDouble } from "react-icons/fa6"; 
import { FaHome, FaChartLine, FaArrowUp , FaUser , FaBox , FaRocket, FaChartPie, FaBuilding, FaHammer, FaDollarSign } from "react-icons/fa";  

// Images
import personalloan from '../assets/images/personalLoan.jpg';
import businessloan from '../assets/images/businessloan.jpg';
import Mortgage from '../assets/images/mortgage.jpg';
import investment from '../assets/images/investment.jpg';

// Components
import Footer2 from './Footer2';













const Service = () => {

    const Gotoapply = () => {
    window.location.href = '/apply-loan'
  }

  return (

    <Services>
        <div className="main-contact">
<h1>Our Loan Services</h1>
<p>Comprehensive financing solutions tailored to your unique needs and goals</p>
</div>

<div className="services">
  <div className='writeupshere'>
  <div className='Personal'>
    <span className='CiWallet'><CiWallet/></span>
    <span>Personal Loan</span>
  </div>
    <div className='personalloan'>
      <h1>Personal Loans for Life's Important Moments</h1>
    <p>Whether you're planning a wedding, facing medical expenses, consolidating debt, or funding a dream vacation, our personal loans provide the financial flexibility you need. With competitive rates and flexible repayment terms, we make it easy to access funds quickly.</p>
      
    </div>
      <div>
        <div className='FaCheckDouble'>
            <span className='myiconshere'><FaCheckDouble/></span>
            <div className='thewriteup'>
                <span>Loan Amount:</span>
                <span>$1,000 to $50,000</span>
            </div>
        </div>
       <div className='FaCheckDouble'>
            <span className='myiconshere'><FaCheckDouble/></span>
           <div className='thewriteup'>
                <span>Interest Rate:</span>
                <span>Fixed at 3.0% APR</span>
            </div>
        </div>
        <div className='FaCheckDouble'>
            <span className='myiconshere'><FaCheckDouble/></span>
           <div className='thewriteup'>
                <span>Repayment Term:</span>
                <span>12 to 84 months</span>
            </div>
        </div>
        <div className='FaCheckDouble'>
            <span className='myiconshere'><FaCheckDouble/></span>
           <div className='thewriteup'>
                <span>Processing Time:</span>
                <span>24-48 hours approval</span>
            </div>
        </div>

        <div className='Perfect-main'>
           <p>Perfect For:</p>
           <div className="perfect">
                     <div>
          <span> <span className='myiconshere'><GiSelfLove/></span> Weddings</span>
          <span> <span className='myiconshere'><BsReverseLayoutSidebarReverse/></span> Debt Consolidation</span>
          <span><span className='myiconshere'><RiToolsFill/></span> Home Repairs</span>
         </div>

         <div>
          <span><span className='myiconshere'><CiMedicalCase/></span> Medical Bills</span>
          <span><span className='myiconshere'><IoMdAirplane/></span> Travel</span>
          <span><span className='myiconshere'><MdCastForEducation/></span> Education</span>
         </div>
           </div>


        </div>
        <button type='submit' onClick={Gotoapply}>Apply for Personal Loan</button>
      </div>
  </div>

  <div className="imgs">
    <img src={personalloan} alt="personalloan" />
  </div>

</div>






 
<div className="mainjects">
  <div className="services">

    <div className="businessimage">
    <img src={businessloan} alt="businessloan" />
  </div>


  <div className='writeupshere'>
  <div className='Businesslaodere'>
    <span className='CiWalletbusess'><CiWallet/></span>
    <span>Business Loan</span>
  </div>
    <div className='personalloan'>
      <h1 style={{color: '#384762'}}>Fuel Your Business Growth</h1>
      <p style={{color: '#384762'}}>Take your business to the next level with our flexible business financing solutions. Whether you're expanding operations, purchasing equipment, managing cash flow, or launching a new venture, we provide the capital you need to succeed.</p>      
    </div>
      <div>
        <div className='FaCheckDouble'>
            <span className='mybusiness' ><FaCheckDouble/></span>
            <div className='thewriteup'>
                <span>Loan Amount:</span>
                <span>$5,000 to $500,000</span>
            </div>
        </div>
       <div className='FaCheckDouble'>
            <span className='mybusiness'><FaCheckDouble/></span>
           <div className='thewriteup'>
                <span>Interest Rate:</span>
                <span>Fixed at 3.0% APR</span>
            </div>
        </div>
        <div className='FaCheckDouble'>
            <span className='mybusiness'><FaCheckDouble/></span>
           <div className='thewriteup'>
                <span>Repayment Term:</span>
                <span>12 to 120 months</span>
            </div>
        </div>
        <div className='FaCheckDouble'>
            <span className='mybusiness'><FaCheckDouble/></span>
           <div className='thewriteup'>
                <span>Processing Time:</span>
                <span>2-5 business days</span>
            </div>
        </div>

        <div className='Perfect-main'>
           <p>Perfect For:</p>
           <div className="perfect">
                     <div>
          <span> <span className='mybusiness'><FaChartLine /></span> Business Expansion</span>
          <span> <span className='mybusiness'><FaDollarSign/></span> Working Capital</span>
          <span><span className='mybusiness'><FaUser /></span> Hiring Staff</span>
         </div>

         <div>
          <span><span className='mybusiness'><RiToolsFill/></span> Equipment Purchase</span>
          <span><span className='mybusiness'><FaBox /></span> Inventory</span>
          <span><span className='mybusiness'><FaRocket/></span> New Ventures</span>
         </div>
           </div>


        </div>
        <button style={{backgroundColor: '#384762'}} type='submit' onClick={Gotoapply}>Apply for Business Loan</button>
      </div>
  </div>


</div>

</div>




<div className="services">
  <div className='writeupshere'>
  <div className='mortgageloan'>
    <span className='CiWallet'><CiWallet/></span>
    <span>Mortgage Loan</span>
  </div>
    <div className='personalloan'>
      <h1>Make Your Dream Home a Reality</h1>

<p>Homeownership is within reach with our competitive mortgage solutions. Whether you're a first-time buyer, looking to upgrade, or refinancing your existing mortgage, we offer flexible terms and expert guidance throughout the entire process.</p>      
    </div>
      <div>
        <div className='FaCheckDouble'>
            <span className='mortgainicon'><FaCheckDouble/></span>
            <div className='thewriteup'>
                <span>Loan Amount:</span>
                <span>$50,000 to $2,000,000</span>
            </div>
        </div>
       <div className='FaCheckDouble'>
            <span className='mortgainicon'><FaCheckDouble/></span>
           <div className='thewriteup'>
                <span>Interest Rate:</span>
                <span>Fixed at 3.0% APR</span>
            </div>
        </div>
        <div className='FaCheckDouble'>
            <span className='mortgainicon'><FaCheckDouble/></span>
           <div className='thewriteup'>
                <span>Repayment Term:</span>
                <span>15 to 30 years</span>
            </div>
        </div>
        <div className='FaCheckDouble'>
            <span className='mortgainicon'><FaCheckDouble/></span>
           <div className='thewriteup'>
                <span>Down Payment:</span>
                <span>As low as 5%</span>
            </div>
        </div>

        <div className='Perfect-main'>
           <p>Perfect For:</p>
           <div className="perfect">
                     <div>
                     
          <span> <span className='mortgainicon'><FaHome/></span> First Home Purchase</span>
          <span> <span className='mortgainicon'><FaDollarSign /></span> Refinancing</span>
          <span><span className='mortgainicon'><FaHome /></span> Second Home</span>
         </div>

         <div>
          <span><span className='mortgainicon'><FaArrowUp /></span> Home Upgrade</span>
          <span><span className='mortgainicon'><FaHammer /></span> Construction</span>
          <span><span className='mortgainicon'><FaDollarSign/></span> Cash-Out Refi</span>
         </div>
           </div>


        </div>
        <button style={{backgroundColor: '#13b89a'}} type='submit' onClick={Gotoapply}>Apply for Mortgage Loan</button>
      </div>
  </div>

  <div className="imgs">
    <img src={Mortgage} alt="Mortgage" />
  </div>

</div>






<div className="mainjects">
  <div className="services">

    <div className="businessimage">
    <img src={investment} alt="investment" />
  </div>


  <div className='writeupshere'>
  <div className='investmentloan'>
    <span className='invesmntloadnhere'><FaChartLine/></span>
    <span>Investment Loan</span>
  </div>
    <div className='personalloan'>
      <h1 style={{color: '#384762'}}>Grow Your Wealth Portfolio</h1>
      <p style={{color: '#384762'}}>Build your investment portfolio with our specialized financing solutions. Whether you're investing in real estate, expanding your property holdings, or diversifying your assets, we provide the capital and expertise to help you maximize returns.</p>      
    </div>
      <div>
        <div className='FaCheckDouble'>
            <span className='investmeloanshere' ><FaCheckDouble/></span>
            <div className='thewriteup'>
                <span>Loan Amount:</span>
                <span>$25,000 to $1,000,000</span>
            </div>
        </div>
       <div className='FaCheckDouble'>
            <span className='investmeloanshere'><FaCheckDouble/></span>
           <div className='thewriteup'>
                <span>Interest Rate:</span>
                <span>Fixed at 3.0% APR</span>
            </div>
        </div>
        <div className='FaCheckDouble'>
            <span className='investmeloanshere'><FaCheckDouble/></span>
           <div className='thewriteup'>
                <span>Repayment Term:</span>
                <span>12 to 180 months</span>
            </div>
        </div>
        <div className='FaCheckDouble'>
            <span className='investmeloanshere'><FaCheckDouble/></span>
           <div className='thewriteup'>
                <span>Processing Time:</span>
                <span>3-7 business days</span>
            </div>
        </div>

        <div className='Perfect-main'>
           <p>Perfect For:</p>
           <div className="perfect">
                     <div>
          <span> <span className='investmeloanshere'><FaHome/></span> Rental Properties</span>
          <span> <span className='investmeloanshere'><AiOutlineLineChart/></span> Portfolio Expansion</span>
          <span><span className='investmeloanshere'><FaChartPie/></span> Asset Diversification</span>
         </div>

         <div>
          <span><span className='investmeloanshere'><FaBuilding/></span> Commercial Real Estate</span>
          <span><span className='investmeloanshere'><FaHammer/></span> Fix & Flip</span>
          <span><span className='investmeloanshere'><FaChartLine/></span> Investment Growth</span>
         </div>
           </div>


        </div>
        <button style={{backgroundColor: '#8b5cf6'}} type='submit' onClick={Gotoapply}>Apply for Business Loan</button>
      </div>
  </div>


</div>

</div>


<div className="ComparE">

  <h1 className='text'>Compare Our Loan Products</h1>
  <p className='text'>Find the perfect loan that matches your needs</p>

 <div className="tables">

  <div>
    <span>Feature</span>
    <span>Personal</span>
    <span>Business</span>
    <span>Mortgage</span>
    <span>Investment</span>
  </div>

  <div>
    <p>Amount Range</p>
    <span>$1K - $50K</span>
    <span>$5K - $500K</span>
    <span>$50K - $2M</span>
    <span>$25K - $1M</span>
  </div>

  <div>
    <p>Interest Rate</p>
    <span>3.0%</span>
    <span>3.0%</span>
    <span>3.0%</span>
    <span>3.0%</span>
  </div>

  <div>
    <p>Term Length</p>
    <span>1-7 years</span>
    <span>1-10 years</span>
    <span>15-30 years</span>
    <span>1-15 years</span>
  </div>

  <div>
    <p>Approval Time</p>
    <span>24-48 hours</span>
    <span>2-5 days</span>
    <span>5-10 days</span>
    <span>3-7 days</span>
  </div>

  <div>
    <p>Collateral</p>
    <span>Not required</span>
    <span>May be required</span>
    <span>Property</span>
    <span>Asset-based</span>
  </div>

 </div>

</div>


<div className="ready">
  <h1>Ready to Get Started?</h1>
  <p>Apply now and get approved in as little as 24 hours</p>
  <div>
    <button onClick={Gotoapply}>Start Your Application</button>
  </div>
</div>



<Footer2/>
    </Services>
  )
}

export default Service