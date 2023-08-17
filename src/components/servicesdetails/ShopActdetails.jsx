import React from "react";
import Shopactpic from '../../images/SHOP ACT.png'

const ShopActdetails = () => {
  return (
    <div>
      <div className="my-5 container mx-auto">
        <img className="m-auto" src={Shopactpic} />
        <br />
        <h2 className="font-extrabold">
          Documents required for Shops and Establishment Act registration
        </h2>
        <br />
        <h2 className="font-extrabold ">ShopAct Licence</h2>
        <ul class="list-disc leading-loose">
          <li>Aadhar card of the proprietor or director or partner.</li>
          <li>Pan card of the person applying.</li>
          <li>Email ID and Mobile number.</li>
          <li>Details of the employees.</li>
          <li>Nature of business.</li>
          <li>Electricity bill of the premises.</li>
          <li>Rent Agreement.</li>
          <li>MOA, AOA and CIN if Private Limited Company.</li>
        </ul>
      </div>
    </div>
  );
};

export default ShopActdetails;
