import React from "react";

const Passportdetails = () => {
  return (
    <div className="">
      <div className="container mx-auto px-5 my-5">
        <div className="my-3">
          <img
            className=""
            src="https://www.india.gov.in/sites/upload_files/npi/files/spotlights/passport-seva-inner14-new.jpg"
          />
          <br />
          <h1 className="font-extrabold">
            A. List of acceptable documents for Birth proof
          </h1>
          <br />
          <ul class="list-disc leading-loose">
            <li>
              Birth Certificate issued by the Registrar of Births and Deaths or
              the Municipal Corporation or any other prescribed authority,
              whosoever has been empowered under the Registration of Birth and
              Deaths Act, 1969 to register the birth of a child born in India
            </li>
            <li>
              Transfer/School leaving/Matriculation Certificate issued by the
              school last attended/recognized educational board
            </li>
            <li>
              Policy Bond issued by the Public Life Insurance
              Corporations/Companies having the DOB of the holder of the
              insurance policy.
            </li>
            <li>
              Election Photo Identity Card (EPIC) issued by the Election
              Commission of India
            </li>
            <li> Aadhaar Card/E-Aadhaar</li>
            <li>PAN Card issued by the Income Tax Department</li>
            <li>
              Driving License issued by the Transport department of concerned
              state Government
            </li>
            <li>
              A declaration given by the Head of the Orphanage/Child Care Home
              on their official letter head of the organization confirming the
              DOB of the applicant
            </li>
          </ul>
        </div>
        <div className="my-3">
          <h2 className="font-extrabold">
            B. List of acceptable documents for Address proof
          </h2>
          <ul class="list-disc leading-loose">
            <li>Water Bill</li>
            <li>Telephone (landline or post-paid mobile bill)</li>
            <li> Electricity bill</li>
            <li>Income Tax Assessment Order</li>
            <li>Election Commission Photo ID card</li>
            <li>Proof of Gas Connection</li>
            <li>
              Certificate from Employer of reputed companies on letter head
            </li>
            <li>
              Spouse's passport copy (First and last page including family
              details mentioning applicant's name as spouse of the passport
              holder), (provided the applicant's present address matches the
              address mentioned in the spouse's passport)
            </li>
            <li>
              Parent's passport copy, in case of minors(First and last page)
            </li>
            <li>Aadhaar Card</li>
            <li>Rent Agreement</li>
            <li>
              Photo Passbook of running Bank Account (Scheduled Public Sector
              Banks, Scheduled Private Sector Indian Banks and Regional Rural
              Banks only)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Passportdetails;
