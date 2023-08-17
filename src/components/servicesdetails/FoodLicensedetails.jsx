import React from "react";
import Foodpic from '../../images/FOOD.jpg'

const FoodLicensedetails = () => {
  return (
    <div className="my-5">
      <h2 className="font-extrabold container mx-auto xxs:mx-10 my-4">Food License</h2>
      <img className="m-auto w-72" src='../../images/FOOD.jpg'/>
      <ul class="list-disc leading-loose mx-40 xxs:mx-10">
        <li>New/Renewal/Modification of License</li>
        <li>New Registration</li>
        <li>Proprietorship Declaration</li>
        <li>CGWA NOC dated 02.01.2018 || CGWA NOC dated 11.01.2021</li>
        <li>
          Online Sale of Alcohol under FSSAI License by E-Commerce FBO ||
          Draft format for Declaration for Ecommerce FBO under Category 14
        </li>
        <li>
          Additional Document For Exporters || Self Declaration for Exporting
          FBO
        </li>
        <li>Sample Food Recall Plan and Guidelines</li>
        <li>
          BIS License/Receipt by Manufacturers of Packaged Drinking Water /
          Mineral Water
        </li>
        <li>
          Repacker - Declaration/Undertaking for owning full compliance of the
          food product in case exemption is sought for submission of 'NoC from
          Manufacturer' [Read Lic/Reg FAQ no. 120]
        </li>
      </ul>
    </div>
  );
};

export default FoodLicensedetails;
