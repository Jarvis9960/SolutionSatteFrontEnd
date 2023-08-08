import React from "react";

const GSTregdetails = () => {
  return (
    <div>
      <div className="my-3">
        <h2 className="font-extrabold mx-20 xxs:mx-10">
          Documents required for GST registration
        </h2>
        <br />
        <h2 className="font-extrabold mx-20 xxs:mx-10">Sole proprietor / Individual</h2>
        <ul class="list-disc leading-loose mx-40 xxs:mx-10">
          <li>PAN card of the owner</li>
          <li>Aadhar card of the owner</li>
          <li>
            Photograph of the owner (in JPEG format, maximum size – 100 KB)
          </li>
          <li>Bank account details</li>
          <li> Address proof</li>
        </ul>


        <h2 className="font-extrabold mx-20 xxs:mx-10">Partnership firm (including LLP)</h2>
        <ul class="list-disc leading-loose mx-40 xxs:mx-10">
          <li>PAN card of all partners (including managing partner and authorized signatory)</li>
          <li>Photograph of all partners and authorized signatories (in JPEG format, maximum size – 100 KB)</li>
          <li>
          Address proof of partners (Passport, driving license, Voters identity card, Aadhar card etc.)
          </li>
          <li>Proof of appointment of authorized signatory</li>
          <li>In the case of LLP, registration certificate / Board resolution of LLP</li>
          <li>Bank account details</li>
          <li>Address proof of principal place of business</li>
        </ul>



        <h2 className="font-extrabold mx-20 xxs:mx-10">HUF</h2>
        <ul class="list-disc leading-loose mx-40 xxs:mx-10">
          <li>PAN card of HUF</li>
          <li>PAN card and Aadhar card of Karta</li>
          <li>Photograph of the owner (in JPEG format, maximum size – 100 KB)</li>
          <li>Bank account details</li>
          <li>Address proof of principal place of business</li>
        </ul>

        <h2 className="font-extrabold mx-20 xxs:mx-10">Company (Public and Private) (Indian and foreign)</h2>
        <ul class="list-disc leading-loose mx-40 xxs:mx-10">
            <li>PAN card of Company</li>
            <li>Certificate of incorporation given by Ministry of Corporate Affairs</li>
            <li>Memorandum of Association / Articles of Association</li>
            <li>PAN card and Aadhar card of authorized signatory. The authorized signatory must be an Indian even in case of foreign companies/branch registration</li>
            <li>PAN card and address proof of all directors of the Company</li>
            <li>Photograph of all directors and authorized signatory (in JPEG format, maximum size – 100 KB)</li>
            <li>Board resolution appointing authorized signatory / Any other proof of appointment of authorized signatory (in JPEG format / PDF format, maximum size – 100 KB)</li>
            <li>Bank account details</li>
            <li>Address proof of principal place of business</li>
        </ul>
      </div>
    </div>
  );
};

export default GSTregdetails;
