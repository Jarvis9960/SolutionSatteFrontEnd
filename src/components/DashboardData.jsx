import React, { useEffect, useState } from "react";
import axios from "axios";

const DashboardData = () => {
  const [allLeadData, setAllLeadData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Url, setUrl] = useState("");
  let role = localStorage.getItem("role");
  let tokenData = localStorage.getItem("token");
  let token;
  if (tokenData) {
    token = JSON.parse(tokenData).usertoken;
  }

  useEffect(() => {
    let isMounted = true; 

    try {
      if (role == "admin") {
        
        setLoading(true);
        axios({
          method: "get",
          url: "http://localhost:5000/api/v1/crm/getnumberofleadforallserviceadmin",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((res) => {
          if (isMounted) {
            setLoading(false);
            setAllLeadData(res.data.response);
            if (allLeadData) {
            }
          }
        });
      } else {
        setLoading(true);
        axios({
          method: "get",
          url: "http://localhost:5000/api/v1/crm/getnumberofleadforallservice",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((res) => {
          if (isMounted) {
            setLoading(false);
            setAllLeadData(res.data.response);
            if (allLeadData) {
            }
          }
        });
      }
    } catch (error) {
      setLoading(false);
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="grid grid-cols-5 gap-5 mx-16 lg:grid-cols-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-4 md:gap-3   xs:grid-cols-2 xs:gap-3 xxs:grid-cols-2  xxs:gap-4">
      {allLeadData && (
        <>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">
              {allLeadData.savedPersonalLoanDocument}
            </h2>
            <span className="text-xl leading-loose tracking-wide">
              Personal Loan
            </span>
          </div>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">
              {allLeadData.savedBusiessLoanDocument}
            </h2>
            <span className="text-xl leading-loose tracking-wide">
              Busiess Loan
            </span>
          </div>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">
              {allLeadData.savedCarLoanDocument}
            </h2>
            <span className="text-xl leading-loose tracking-wide">
              Car Loan
            </span>
          </div>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">
              {allLeadData.savedCreditCardDocument}
            </h2>
            <span className="text-xl leading-loose tracking-wide">
              Credit Card
            </span>
          </div>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">
              {allLeadData.savedFoodLisenceDocument}
            </h2>
            <span className="text-xl leading-loose tracking-wide">
              Food Lisence
            </span>
          </div>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">
              {allLeadData.savedGSTLoanDocument}
            </h2>
            <span className="text-xl leading-loose tracking-wide">
              GST Loan
            </span>
          </div>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">
              {allLeadData.savedGoldLoanDocument}
            </h2>
            <span className="text-xl leading-loose tracking-wide">
              Gold Loan
            </span>
          </div>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">
              {allLeadData.savedHomeLoanDocument}
            </h2>
            <span className="text-xl leading-loose tracking-wide">
              Home Loan
            </span>
          </div>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">
              {allLeadData.savedMortgageLoanDocument}
            </h2>
            <span className="text-xl leading-loose tracking-wide">
              Mortgage Loan
            </span>
          </div>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">
              {allLeadData.savedNewCorrectionPanDocument}
            </h2>
            <span className="text-xl leading-loose tracking-wide">
              New Correction Pan
            </span>
          </div>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">
              {allLeadData.savedPassportLoanDocument}
            </h2>
            <span className="text-xl leading-loose tracking-wide">
              Passport Loan
            </span>
          </div>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">
              {allLeadData.savedShopActDocument}
            </h2>
            <span className="text-xl leading-loose tracking-wide">
              Shop Act
            </span>
          </div>
          <div className="w-48 rounded-md shadow-xl bg-white p-5 h-44 cursor-pointer">
            <h2 className="font-black text-3xl leading-loose">
              {allLeadData.savedUdyamCertificateDocument}
            </h2>
            <span className="text-xl leading-loose tracking-wide">
              Udyam Certificate
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardData;
