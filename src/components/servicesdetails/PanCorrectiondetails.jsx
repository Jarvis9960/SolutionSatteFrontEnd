import React from "react";
import PancardPic from '../../images/PAN CARD.png'

const PanCorrectiondetails = () => {
  return (
    <div className="">
      <div className="container mx-auto px-5 my-5">
        <div className="my-3">
          <img className="" src={PancardPic} />
          <br />
          <h1 className="font-extrabold">
            A. List of acceptable documents for Identity proof
          </h1>
          <br />
          <ul class="list-disc leading-loose">
            <li>
              Aadhaar Card issued by the Unique Identification Authority of
              India
            </li>
            <li>Elector's photo identity card</li>
            <li>Driving License</li>
            <li>Passport</li>
            <li>Ration card having photograph of the applicant</li>
            <li>Arm's license</li>
            <li>
              Photo identity card issued by the Central Government or State
              Government or Public Sector Undertaking:
            </li>
            <li>Pensioner card having photograph of the applicant </li>
            <li>
              Central Government Health Service Scheme Card or Ex-Servicemen
              Contributory Health Scheme photo card
            </li>
            <li>
              Certificate of identity in Original signed by a Member of
              Parliament or Member of Legislative Assembly or Municipal{" "}
            </li>
            <li>
              Councillor or a Gazetted officer, as the case may be: or Bank
              certificate in Original on letterhead from the branch(along with
              name and stamp of the issuing officer) containing duly attested
              photograph and bank account number of the applicant
            </li>
          </ul>
        </div>
        <div className="my-3">
          <h2 className="font-extrabold">
            B. List of acceptable documents for Address proof
          </h2>
          <ul class="list-disc leading-loose">
            <li>
              Aadhaar Card issued by the Unique Identification Authority of
              India{" "}
            </li>
            <li>Elector's photo identity card</li>
            <li>Driving License</li>
            <li>Passport</li>
            <li>Passport of the spouse</li>
            <li>Post office passbook having address of the applicant</li>
            <li>Latest property tax assessment order</li>
            <li>Domicile certificate issued by the Government </li>
            <li>
              Allotment letter of accommodation issued by Central or State
              Government of not more than three years old
            </li>
            <li>
              Property Registration Document: of (Copy of following documents of
              not more than three months old)
            </li>
            <ul>
              <li>(a) Electricity Billor </li>
              <li>(b) Landline Telephone or Broadband connection bill </li>
              <li>(c) Water Bill </li>
              <li>
                (d) Consumer gas connection card or book or piped gas bill{" "}
              </li>
              <li> (e) Bank account statement or as per Note 2 </li>
              <li>(f) Depository account statement </li>
              <li>
                (g) Credit card statement or (iii) Certificate of address in
                Original signed by a Member of Parliament or Member of
                Legislative Assembly or Municipal Councillor or a Gazetted
                officer, as the case may be or (iv) Employer certificate in
                original
              </li>
            </ul>
          </ul>
        </div>
        <div className="my-3">
          {" "}
          <br />
          <h1 className="font-extrabold">
            C. List of acceptable documents for Birth proof
          </h1>
          <br />
          <ul class="list-disc leading-loose">
            <li>
              Aadhaar Card issued by the Unique Identification Authority of
              India or{" "}
            </li>
            <li>Elector's photo identity card or</li>
            <li>Driving License</li>
            <li>Passport</li>
            <li>
              Matriculation Certificate or Mark Sheet of recognized board or
            </li>
            <li>
              {" "}
              Birth Certificate issued by the Municipal Authority or any office
              authorized to issue Birth and Death Certificate by the Registrar
              of Birth and Death or the Indian Consulate as defined in clause
              (d) of sub-section (1) of section 2 of the Citizenship Act, 1955
              (57 of1955)
            </li>
            <li>
              Photo identity card issued by the Central Government or State
              Government or Public Sector Undertaking or State Public Sector
              Undertaking or
            </li>
            <li>Domicile Certificate issued by the Government </li>
            <li>
              Central Government Health Service Scheme photo Card or
              Ex-Servicemen Contributory Health Scheme photo card{" "}
            </li>
            <li>Pension payment order</li>
            <li>Marriage certificate issued by Ragsitar of Marriages</li>
            <li>
              Affidavit sworn before a magistrate stating the date of birth.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PanCorrectiondetails;
