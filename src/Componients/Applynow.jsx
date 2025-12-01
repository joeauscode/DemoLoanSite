import React from 'react'
import {Apply} from '../Styled/Applynow'

const Applynow = () => {

  return (

    <Apply>

<div className="main-aply">
<h1>Loan Application</h1>
<p>Complete the form below to start your loan application process</p>
</div>


<div className="main-form">

<form action="">
<div>
    <p>Loan Details</p>
</div>

<div className='inpuses'>

<div>
 <div>
    <label htmlFor="">Loan Type *</label>
    <select name="" id="">
        <option value="Personal Loan">Personal Loan</option>
        <option value="Personal Loan">Business Loan</option>
        <option value="Mortgage Loan">Mortgage Loan</option>
        <option value="Investment Loan">Investment Loan</option>
    </select>
 </div>
 <div>
    <label htmlFor="">Loan Amount *</label>
    <input type="text" name="" id="" placeholder='$5000.00'/>
 </div>
</div>

<div>
 <div>
    <label htmlFor="">Loan Term (months) *</label>
    <input type="text" name="" id=""  placeholder='36'/>
 </div>
 <div>
    <label htmlFor="">Purpose of Loan *</label>
    <input type="text" name="" id="" placeholder='eg. Home Renovation'/>
 </div>
</div>



</div>

<div className="Personalinformation">
    <p>Personal Information</p>
</div>

<div className="informations">
    
<div>
    <div>
    <label htmlFor="">First Name *</label>
    <input type="text" name="" id="" placeholder='John'/>
</div>
<div>
    <label htmlFor="">Last Name *</label>
    <input type="text" name="" id="" placeholder='Doe'/>
</div>
</div>

</div>

</form>

</div>

    </Apply>
  )
}

export default Applynow