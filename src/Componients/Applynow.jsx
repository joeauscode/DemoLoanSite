import React, { useState } from 'react'
import {Apply} from '../Styled/Applynow'
import { IoMdPerson } from "react-icons/io";
import { BiMessageAltDetail } from "react-icons/bi";
import { VscLocation } from "react-icons/vsc";
import Footer from './Footer'
import { PiBagSimpleFill } from "react-icons/pi";
import { CgAdd } from "react-icons/cg";





const Applynow = () => {

const [checkeded, setCheckeded] = useState(false);
const [checked, setChecked] = useState(false);


  const Clicked = (value) => {
    if (checked === value) {
      setChecked(null);
      setCheckeded(false)
    } else {
      setChecked(value);
      setCheckeded(false)
    }
  };

  const check = (box) => {
   if (checkeded === box){
    setCheckeded(null);
    setChecked(false)
   }else{
    setCheckeded(box);
    setChecked(false)
   }
  }

  return (

    <Apply>

<div className="main-aply">
<h1>Loan Application</h1>
<p>Complete the form below to start your loan application process</p>
</div>


<div className="main-form">

<form action="">
<div className='Loandetails'>
    <span><BiMessageAltDetail/></span>
    <p>Loan Details</p>
</div>

<div className='inpuses'>

<div className='Loanype'>
 <div className='LoanType'>
    <label htmlFor="">Loan Type *</label>
    <select name="" id="">
        <option value="Personal Loan">Personal Loan</option>
        <option value="Personal Loan">Business Loan</option>
        <option value="Mortgage Loan">Mortgage Loan</option>
        <option value="Investment Loan">Investment Loan</option>
    </select>
 </div>
 <div className='LoanType'>
    <label htmlFor="">Loan Amount *</label>
    <input type="text" name="" id="" placeholder='$5000.00'/>
 </div>
</div>

<div className='Loanype'>
 <div className='LoanType'>
    <label htmlFor="">Loan Term (months) *</label>
    <input type="text" name="" id=""  placeholder='36'/>
 </div>
 <div className='LoanType'>
    <label htmlFor="">Purpose of Loan *</label>
    <input type="text" name="" id="" placeholder='eg. Home Renovation'/>
 </div>
</div>



</div>

<div className="Loandetails">
    <span><IoMdPerson/></span>
    <p>Personal Information</p>
</div>

<div className="informations">
    
<div className='Loanype'>
    <div className='LoanType'>
    <label htmlFor="">First Name *</label>
    <input type="text" name="" id="" placeholder='John'/>
</div>
<div className='LoanType'>
    <label htmlFor="">Last Name *</label>
    <input type="text" name="" id="" placeholder='Doe'/>
</div>
</div>
<div className='Loanype'>
    <div className='LoanType'>
    <label htmlFor="">Email Address *</label>
    <input type="text" name="" id="" placeholder='joedoe@example.com'/>
</div>
<div className='LoanType'>
    <label htmlFor="">Phone Number *</label>
    <input type="number" name="" id="" placeholder='+1 (416) 475-7556'/>
</div>
</div>
<div className='Loanype'>
    <div className='LoanType'>
    <label htmlFor="">Date of Birth *</label>
    <input type="date" name="" id="" placeholder='DOB'/>
</div>
<div className='LoanType'>
    <label htmlFor="">ID Number *</label>
    <input type="text" name="" id="" placeholder='National ID / Passport Number'/>
</div>
</div>

</div>


<div className="Loandetails">
     <span><VscLocation/></span>
    <p>Address Informationn</p>
</div>

<div className="addressinformation">
    <div>
        <label htmlFor="Street Address *">Street Address *</label>
        <input type="text" name="" id="" placeholder='123 main street'/>
    </div>
    <div className='Address'>
        <div>
            <label htmlFor="City *">City *</label>
            <input type="text" name="" id="" />
        </div>
        <div>
            <label htmlFor="State / Province *">State / Province *</label>
            <input type="text" name="" id="" placeholder='NY' />
        </div>
        <div>
            <label htmlFor="Postal Code *">Postal Code *</label>
            <input type="text" name="" id="" placeholder='10001'/>
        </div>
    </div>
</div>



<div className="Loandetails">
    <span><PiBagSimpleFill/></span>
    <p>Employment Information</p>
</div>

<div className="Employment">
    <div className='Loanype'>
        <div className='LoanType'>
            <label htmlFor="Employment Status *">Employment Status *</label>
            <select name="" id="">
                <option value="Select Status" disabled>Select Status</option>
                <option value="Employed Part-Time">Employed Part-Time</option>
                <option value="Employed Full-Time">Employed Full-Time</option>
                <option value="Self-Employed">Self-Employed</option>
                <option value="Retired">Retired</option>
                <option value="Unemployed">Unemployed</option>
            </select>
        </div>
        <div className='LoanType'>
            <label htmlFor="Employer Name *">Employer Name *</label>
            <input type="text" name="" id="" placeholder='Compnay Name'/>

        </div>
    </div>
    <div>
        <label htmlFor="Monthly Income *"></label>
        <input type="text" name="" id="" placeholder='$5,000'/>
    </div>
</div>


<div className="Loandetails">
    <span><CgAdd/></span>
    <p>Additional Information</p>
</div>

<div className="Additional">
    <div className='Additionalru'>
        <label htmlFor="Do you have a co-applicant? *">Do you have a co-applicant? *</label>
        <div className='myinputclick'>
        <span>Yes</span>
      <input
        type="radio"
        checked={checkeded === 1}
        onClick={() => check(1)}
        onChange={() => {}}
      />  
      <span>No</span>         
      <input
        type="radio"
        checked={checked === 1}
        onClick={() => Clicked(1)}
        onChange={() => {}}
      />           
        </div>

        <div className='checkboxs'>
            <div>
                <input type="checkbox" name="" id="" />
            </div>
            <p>I agree to the terms and conditions and authorize eLoanHub to verify my information. I understand that this application does not guarantee loan approval. *</p>
        </div>

        <div>
            <button>Submit Application </button>
        </div>
        <div className='needhelp'>
            <p>Need help? <span>Contact us</span></p>
        </div>
    </div>
</div>

</form>

</div>
<Footer/>

    </Apply>
  )
}

export default Applynow