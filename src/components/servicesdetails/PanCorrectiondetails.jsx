import React from "react";

const PanCorrectiondetails = () => {
  return (
    <div className="container mx-auto px-5 my-5">
      <div className="container mx-auto px-5 my-5">
        <div className="my-3">
        
          <img className="w-6/12 mx-80 xxs:mx-10" src="data:image/jpeg;base64,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"/>
          <br />
          <h1 className="font-extrabold">
            A. List of acceptable documents for Identity proof
          </h1>
          <br />
          <ul class="list-disc leading-loose mx-10 xxs:mx-0">
            <li>Aadhaar Card issued by the Unique Identification Authority of India </li>
            <li>
            Elector's photo identity card
            </li>
            <li>
            Driving License 
            </li>
            <li>Passport</li>
            <li>Ration card having photograph of the applicant</li>
            <li>Arm's license</li>
            <li>Photo identity card issued by the Central Government or State Government or Public Sector Undertaking:</li>
            <li>Pensioner card having photograph of the applicant </li>
            <li>Central Government Health Service Scheme Card or Ex-Servicemen Contributory Health Scheme photo card</li>
            <li>Certificate of identity in Original signed by a Member of Parliament or Member of Legislative Assembly or Municipal </li>
            <li>Councillor or a Gazetted officer, as the case may be: or Bank certificate in Original on letterhead from the branch(along with name and stamp of the issuing officer) containing duly attested photograph and bank account number of the applicant</li>
            
          </ul>
        </div>
        <div className="my-3">
          <h2 className="font-extrabold">
            B. List of acceptable documents for Address proof
          </h2>
          <ul class="list-disc leading-loose mx-10 xxs:mx-0">
            <li>Aadhaar Card issued by the Unique Identification Authority of India </li>
            <li>
            Elector's photo identity card 
            </li>
            <li>Driving License</li>
            <li>Passport</li>
            <li>Passport of the spouse</li>
          <li>Post office passbook having address of the applicant</li>
          <li>Latest property tax assessment order</li>
          <li>Domicile certificate issued by the Government </li>
          <li>Allotment letter of accommodation issued by Central or State Government of not more than three years old</li>
          <li>Property Registration Document: of (Copy of following documents of not more than three months old)</li>
                <ul>
                    <li>(a) Electricity Billor </li>
                    <li>(b) Landline Telephone or Broadband connection bill </li>
                    <li>(c) Water Bill </li>
                    <li>(d) Consumer gas connection card or book or piped gas bill </li>
                    <li> (e) Bank account statement or as per Note 2 </li>
                    <li>(f) Depository account statement </li>
                    <li>(g) Credit card statement or (iii) Certificate of address in Original signed by a Member of Parliament or Member of Legislative Assembly or Municipal Councillor or a Gazetted officer, as the case may be or (iv) Employer certificate in original</li>
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
          <ul class="list-disc leading-loose mx-10 xxs:mx-0">
            <li>Aadhaar Card issued by the Unique Identification Authority of India or </li>
            <li>
            Elector's photo identity card or
            </li>
            <li>
            Driving License 
            </li>
            <li>Passport</li>
            <li>Matriculation Certificate or Mark Sheet of recognized board or</li>
            <li> Birth Certificate issued by the Municipal Authority or any office authorized to issue Birth and Death Certificate by the Registrar of Birth and Death or the Indian Consulate as defined in clause (d) of sub-section (1) of section 2 of the Citizenship Act, 1955 (57 of1955)</li>
            <li>Photo identity card issued by the Central Government or State Government or Public Sector Undertaking or State Public Sector Undertaking or</li>
         <li>Domicile  Certificate issued by the Government </li>
         <li>Central Government Health Service Scheme photo Card or Ex-Servicemen Contributory Health Scheme photo card </li>
         <li>Pension payment order</li>
          <li>Marriage certificate issued by Ragsitar of Marriages</li>
          <li>Affidavit sworn before a magistrate stating the date of birth.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PanCorrectiondetails;
