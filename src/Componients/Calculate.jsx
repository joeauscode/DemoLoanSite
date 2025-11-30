import react, { useState, useMemo } from "react";
import {Calculat} from '../Styled/Calculate'
import { IoStar } from "react-icons/io5";


const Calculate = () => {


  // ---- Inputs ----
  const APR = 3.0;
  const [amount, setAmount] = useState(10000); // $
  const [months, setMonths] = useState(12);

  // ---- Calculations ----
  const results = useMemo(() => {
    const P = amount;
    const r = APR / 12 / 100;
    const N = months;

    const EMI =
      (P * r * Math.pow(1 + r, N)) /
      (Math.pow(1 + r, N) - 1);

    const totalPay = EMI * N;
    const interest = totalPay - P;

    return {
      monthly: EMI.toFixed(0),
      total: totalPay.toFixed(0),
      interest: interest.toFixed(0),
    };
  }, [amount, months]);

  
  return (
    <Calculat>
     <div className="main-Calculate">
        <h1>Calculate Your Loan</h1>
        <p>Get instant estimates tailored to your needs</p>

   <div className="calculator">

    <div>

      <h2>Loan Calculator</h2>

      {/* Loan Amount */}
      <div className="control">
        <label>Loan Amount</label>
        <h3>${amount.toLocaleString()}</h3>

        <input
          type="range"
          min={5000}
          max={20000000}
          step={1000}
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <div className="range">
          <span>$5,000</span>
          <span>$500,000</span>
        </div>
      </div>

      {/* Loan Term */}
      <div className="loanterm">
                <label>Loan Term</label>
        <h3>{months} months</h3>
      </div>
      <div className="control">


        <input
          type="range"
          min={6}
          max={120}
          step={6}
          value={months}
          onChange={(e) => setMonths(Number(e.target.value))}
        />

        <div className="range">
          <span>6 months</span>
          <span>120 months</span>
        </div>
      </div>

      {/* Fixed APR */}
              <div className="rate-real">
          <h4>Interest Rate</h4>
        <p>{APR}% APR</p>
        </div>
      <div className="rate">
        <button>Fixed Rate: 3.0% APR</button>
        <small>Our competitive fixed rate for all loan types</small>
      </div>

      {/* Loan Type */}
      <div className="rate">
        <h4>Loan Type</h4>
        <select name="" id="">
          <option value="Personal Loan">Personal Loan</option>
          <option value="Personal Loan">Business Loan</option>
          <option value="Personal Loan">Mortgage Loan</option>
          <option value="Personal Loan">Investment Loan</option>
        </select>
      </div>

</div>



      
      <div className="total">

        <div className="totalain">
                  <h3>Your Monthly Payment</h3>
        <h1>${results.monthly}</h1>

        <p>Total Interest: <strong>${results.interest}</strong></p>
        <p>Total Amount: <strong>${results.total}</strong></p>
        <p>APR: <strong>{APR}%</strong></p>
         <button>Apply for This Loan</button>
        </div>
       

      </div>

    </div>

 
     </div>



  <div className="Trustedd">
   <div className="main-truste">
    
    <div className="topis">
      
    <span>(REVIEWS)</span>
    <h1>Trusted by Thousands</h1>
    <p>Real stories from real customers</p>
    </div>

    <div className="boxesss">

    <div>
      <div>
        <span><IoStar/></span>
        <span><IoStar/></span>
        <span><IoStar/></span>
        <span><IoStar/></span>
        <span><IoStar/></span>
      </div>

      <h4>"The approval process was incredibly fast! I applied in the morning and had the funds in my account by the next day. The staff was helpful and transparent about all the terms. Highly recommend for anyone needing quick financial assistance."</h4>
      <div className="main-sm">
        <span className="sm">SM</span>
        <div>
          <span>Sarah Mitchell</span>
          <span>Personal Loan Customer</span>
        </div>
      </div>

    </div>
    <div>
      <div>
        <span><IoStar/></span>
        <span><IoStar/></span>
        <span><IoStar/></span>
        <span><IoStar/></span>
        <span><IoStar/></span>
      </div>

      <h4>"Best rates I could find anywhere! I compared multiple lenders and LoanHub offered the most competitive interest rate with no hidden fees. The transparency throughout the process gave me complete peace of mind. Excellent service from start to finish."</h4>
      <div className="main-sm">
        <span className="sm">JC</span>
        <div>
          <span>James Chen</span>
          <span>Business Loan Customer</span>
        </div>
      </div>

    </div>
    <div>
      <div>
        <span><IoStar/></span>
        <span><IoStar/></span>
        <span><IoStar/></span>
        <span><IoStar/></span>
        <span><IoStar/></span>
      </div>

      <h4>"Getting our mortgage through LoanHub was the smoothest experience. They guided us through every step, explained all the paperwork clearly, and made buying our first home stress-free. We couldn't have asked for a better lending partner!"</h4>
      <div className="main-sm">
        <span className="sm">EP</span>
        <div>
          <span>Emily Parker</span>
          <span>Mortgage Loan Customer</span>
        </div>
      </div>

    </div>
    
    </div>
   </div>

  </div>
    </Calculat>
  )
}

export default Calculate