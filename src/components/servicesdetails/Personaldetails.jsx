import React from "react";

const Personaldetails = () => {
  return (
    <div className="container mx-auto px-5 my-5">
   <div className="container mx-auto px-5 my-5">
      <div className="my-3">
        <h1 className="font-extrabold">
        A.	List Of Documents For Salaried Person 
        </h1><br/>
        <ul class="list-disc leading-loose mx-0">
          <li>	Proof of Identity:- Passport / Driving License / Voters ID / PAN Card (any one)</li>
          <li>
          	Proof of Residence:- Leave and License Agreement / Utility Bill (not more than 3 months old) / 
          </li>
          <li>
          	Latest 3 months Bank Statement (where salary/income is credited).
          </li>
          <li>
          	Salary slips for last 3 months
          </li>
          <li>	2 Passport Size photographs.</li>
        </ul>
      </div>
      <div className="my-3">
        <h2 className="font-extrabold">B.	List Of Documents For Self-Employed</h2>
        <ul class="list-disc leading-loose mx-0">
          <li>KYC Documents: Proof of Identity; Address proof; DOB proof.</li>
          <li>
          	Proof of Residence:- Leave and License Agreement / Utility Bill (not more than 3 months old) / Passport (any one).
          </li>
          <li>	Income proof (audited financials for the last two years).</li>
          <li>
          	Latest 6 months Bank statement
          </li>
          <li>
          	Office address proof.
          </li>
          <li>Proof of residence or office ownership.</li>
          <li>Proof of continuity of business.</li>
        </ul>
      </div>
     
      
      
    </div>
    </div>
  
  );
};

export default Personaldetails;
