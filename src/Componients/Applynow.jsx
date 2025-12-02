import React, { useState, useRef, useEffect } from 'react'
import {Apply} from '../Styled/Applynow'
import { IoMdPerson } from "react-icons/io";
import { BiMessageAltDetail } from "react-icons/bi";
import { VscLocation } from "react-icons/vsc";
import Footer2 from './Footer2'
import { PiBagSimpleFill } from "react-icons/pi";
import { CgAdd } from "react-icons/cg";





const Applynow = () => {


  const [coApplicant, setCoApplicant] = useState(''); // 'Yes' or 'No'

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    fetch('/send-application.php', {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(data => alert(data.message))
    .catch(err => console.error(err));
  };




const dateRef = useRef(null);

useEffect(() => {
  const defaultDate = "1986-09-09";
  if (dateRef.current) dateRef.current.value = defaultDate;
}, []);

const openPicker = () => {
  if (dateRef.current?.showPicker) {
    dateRef.current.showPicker();
  } else {
    dateRef.current?.focus();
    dateRef.current?.click();
  }
};



  

 



  return (

    <Apply>

<div className="main-aply">
<h1>Loan Application</h1>
<p>Complete the form below to start your loan application process</p>
</div>


<div className="main-form">

<form action="/send-application.php" onSubmit={handleSubmit}>
<div className='Loandetails'>
    <span><BiMessageAltDetail/></span>
    <p>Loan Details</p>
</div>

<div className='inpuses'>

<div className='Loanype'>
 <div className='LoanType'>
    <label htmlFor="">Loan Type *</label>
    <select name="loan_type" id="loan_type" required>
        <option value="Personal Loan">Personal Loan</option>
        <option value="Personal Loan">Business Loan</option>
        <option value="Mortgage Loan">Mortgage Loan</option>
        <option value="Investment Loan">Investment Loan</option>
    </select>
 </div>
 <div className='LoanType'>
    <label htmlFor="">Loan Amount *</label>
    <input type="text" name="loan_amount" id="loan_amount" placeholder='$5000.00' required/>
 </div>
</div>

<div className='Loanype'>
 <div className='LoanType'>
    <label htmlFor="">Loan Term (months) *</label>
    <input type="text" name="loan_term" id="loan_term"  placeholder='36' required/>
 </div>
 <div className='LoanType'>
    <label htmlFor="">Purpose of Loan *</label>
    <input type="text" name="loan_purpose" id="loan_purpose" placeholder='eg. Home Renovation' required/>
    
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
    <input type="text" name="first_name" id='first_name' placeholder="John" required/>
</div>
<div className='LoanType'>
    <label htmlFor="">Last Name *</label>
    <input type="text" name="last_name" id='last_name ' placeholder="Doe" required/>
</div>
</div>
<div className='Loanype'>
    <div className='LoanType'>
    <label htmlFor="">Email Address *</label>
    <input type="email" name="email" id='email' placeholder="joedoe@example.com" required/>
</div>
<div className='LoanType'>
    <label htmlFor="">Phone Number *</label>
    <input type="number" name="phone" id="phone" placeholder='+1 (416) 475-7556' required/>
</div>
</div>
<div className='Loanype'>
    <div className='LoanType'>
    <label htmlFor="">Date of Birth *</label>
   <input
  type="date"
  name="dob"
  id="dob"
  ref={dateRef}

  required
/>
</div>
<div className='LoanType'>
    <label htmlFor="">ID Number *</label>
    <input type="text" name="id_number" id="id_number" placeholder='National ID / Passport Number'required/>
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
        <input type="text" name="street" id="street" placeholder='123 main street' required/>
    </div>
    <div className='Address'>
        <div>
            <label htmlFor="City *">City *</label>
            <input type="text" name="city" id="city" required/>
        </div>
        <div>
            <label htmlFor="State / Province *">State / Province *</label>
            <input type="text" name="state" id="state" placeholder='NY' required/>
        </div>
        <div>
            <label htmlFor="Postal Code *">Postal Code *</label>
            <input type="text" name="postal" id="postal" placeholder='10001' required/>
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
            <select name="employment_status" id="employment_status" required>
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
            <input type="text" name="employer_name" id="employer_name" placeholder='Compnay Name' required/>

        </div>
    </div>
    <div>
        <label htmlFor="Monthly Income *"></label>
        <input type="text" name="monthly_income" id="monthly_income" placeholder='$5,000' required/>
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
<input type="radio" checked={coApplicant === 'Yes'}  name="co_applicant" value="Yes" onChange={() => setCoApplicant('Yes')} required />
<span>No</span>
<input type="radio" checked={coApplicant === 'No'}  name="co_applicant" value="No" onChange={() => setCoApplicant('No')} required />         
        </div>

        <div className='checkboxs'>
            <div>
                <input type="checkbox" name="terms_agreed" id="terms_agreed" required/>
            </div>
            <p>I agree to the terms and conditions and authorize eLoanHub to verify my information. I understand that this application does not guarantee loan approval. *</p>
        </div>

        <div>
            <button type='submit'>Submit Application </button>
        </div>
        <div className='needhelp'>
            <p>Need help? <span>Contact us</span></p>
        </div>
    </div>
</div>

</form>

</div>
<Footer2/>

    </Apply>
  )
}

export default Applynow