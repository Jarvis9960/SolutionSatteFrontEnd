import React from "react";

const Homedetails = () => {
  return (
    <div className="container mx-auto px-5 my-5">
      <div className="my-3">
        <h2 className="font-extrabold">
          List of papers/ documents applicable to all applicants:
        </h2>
        <ul class="list-disc leading-loose">
          <li>Employer Identity Card</li>
          <li>
            Loan Application: Completed loan application form duly filled in
            affixed with 3 Passport size photographs
          </li>
          <li>
            Proof of Identity (Any one): PAN/ Passport/ Driver’s License/ Voter
            ID card
          </li>
          <li>
            Proof of Residence/ Address (Any one): Recent copy of Telephone
            Bill/ Electricity Bill/Water Bill/ Piped Gas Bill or copy of
            Passport/ Driving License/ Aadhar Card
          </li>
        </ul>
      </div>
      <div className="my-3">
        <h2 className="font-extrabold">Property Papers:</h2>
        <ul class="list-disc leading-loose">
          <li>Permission for construction (where applicable)</li>
          <li>
            Registered Agreement for Sale (only for Maharashtra)/Allotment
            Letter/Stamped Agreement for Sale
          </li>
          <li>Occupancy Certificate (in case of ready to move property)</li>
          <li>
            Share Certificate (only for Maharashtra), Maintenance Bill,
            Electricity Bill, Property Tax Receipt
          </li>
          <li>
            Approved Plan copy (Xerox Blueprint) & Registered Development
            Agreement of the builder, Conveyance Deed (For New Property)
          </li>
          <li>
            Payment Receipts or bank A/C statement showing all the payments made
            to Builder/Seller
          </li>
        </ul>
      </div>
      <div className="my-3">
        <h2 className="font-extrabold">Account Statement:</h2>
        <ul class="list-disc leading-loose">
          <li>
            Last 6 months Bank Account Statements for all Bank Accounts held by
            the applicant/s
          </li>
          <li>
            If any previous loan from other Banks/Lenders, then Loan A/C
            statement for last 1 year
          </li>
        </ul>
      </div>
      <div className="my-3">
        <h2 className="font-extrabold">
          Income Proof for Salaried Applicant/ Co-applicant/ Guarantor:
        </h2>
        <ul class="list-disc leading-loose">
          <li>Salary Slip or Salary Certificate of last 3 months</li>
          <li>
            Copy of Form 16 for last 2 years or copy of IT Returns for last 2
            financial years, acknowledged by IT Dept.
          </li>
        </ul>
      </div>
      <div className="my-3">
        <h2 className="font-extrabold">
          Income Proof for Non-Salaried Applicant/ Co-applicant/ Guarantor:
        </h2>
        <ul class="list-disc leading-loose">
          <li>Business address proof</li>
          <li>IT returns for last 3 years</li>
          <li>Balance Sheet & Profit & Loss A/c for last 3 years</li>
          <li>Business License Details(or equivalent)</li>
          <li>TDS Certificate (Form 16A, if applicable)</li>
          <li>
            Certificate of qualification (for C.A./ Doctor and other
            professionals)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Homedetails;
