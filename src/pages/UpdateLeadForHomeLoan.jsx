
import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {AiFillEdit}  from 'react-icons/ai';
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const UpdateLeadForHomeLoan = () => {
  const tokenData = localStorage.getItem("token");
  const token = JSON.parse(tokenData).usertoken;
  const location = useLocation();
  const {
    state: { serviceID },
  } = location;
  const [clientData, setClientData] = useState("");
  const [LoanAmount, setLoanAmount] = useState("");
  const [client, setClient] = useState("");
  const [employeeIdentityCard, setEmployeeIdentityCard] = useState(null);
  const [loanApplication, setLoanApplication] = useState(null);
  const [proofOfIdentity, setProofOfIdentity] = useState(null);
  const [proofOfResidency, setProofOfResidency] = useState(null);
  const [permissionOfConstruction, setPermissionOfConstruction] =
    useState(null);
  const [registeredAgreementForSales, setRegisteredAgreementForSales] =
    useState(null);
  const [allotmentletter, setAllotmentletter] = useState(null);
  const [stampedAgreement, setStampedAgreement] = useState(null);
  const [occupancyCertificate, setOccupancyCertificate] = useState(null);
  const [shareCertification, setShareCertification] = useState(null);
  const [maintainanceBill, setMaintainanceBill] = useState(null);
  const [electricityBill, setElectricityBill] = useState(null);
  const [propertyTaxReceipt, setPropertyTaxReceipt] = useState(null);
  const [paymentMadetoBuilderRecept, setPaymentMadetoBuilderRecept] =
    useState(null);
  const [sixMonthBankStatement, setSixMonthBankStatement] = useState(null);
  const [loanAccountStatement, setLoanAccountStatement] = useState(null);
  const [threeMonthSalarySlip, setThreeMonthSalarySlip] = useState(null);
  const [twoYearOfFormsixteenOrItReturn, setTwoYearOfFormsixteenOrItReturn] =
    useState(null);
  const [businessAddressProof, setBusinessAddressProof] = useState(null);
  const [ThreeYearItReturn, setThreeYearItReturn] = useState(null);
  const [businessLisenceDetail, setBusinessLisenceDetail] = useState(null);
  const [TDScertification, setTDScertification] = useState(null);
  const [certificationOfQualification, setcertificationOfQualification] =
    useState(null);
  const [
    approvedPlanCopyRegisteredDevelopmentAgreementofthebuilderConveyanceDeed,
    setApprovedPlanCopyRegisteredDevelopmentAgreementofthebuilderConveyanceDeed,
  ] = useState(null);
  const [employeeIdentity, setEmployeeIdentity] = useState(false);
  const [loanApp, setLoanApp] = useState(false);
  const [proofOfId, setProofOfId] = useState(false);
  const [residency, setResidency] = useState(false);
  const [construction, setConstruction] = useState(false);
  const [agreement, setAgreement] = useState(false);
  const [allotment, setAllotment] = useState(false);
  const [stamped, setStamped] = useState(false);
  const [occupancy, setOccupancy] = useState(false);
  const [share, setShare] = useState(false);
  const [bill, setBill] = useState(false);
  const [electBill, setElectBill] = useState(false);
  const [property, setProperty] = useState(false);
  const [plan, setPlan] = useState(false);
  const [builder, setBuilder] = useState(false);
  const [sixMonth, setSixMonth] = useState(false);
  const [accountStatement, setAccountStatement] = useState(false);
  const [threeMonth, setThreeMonth] = useState(false);
  const [itReturn, setItReturn] = useState(false);
  const [businessAd, setBusinessAd] = useState(false);
  const [yearIt, setYearIt] = useState(false);
  const [lisence, setLisence] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tds, setTDS] = useState(false);
  const [qualification, setQualification] = useState(false);
  const [popupdata, setpopupdata] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);


  useEffect(() => {
    try {
      axios({
        method: "get",
        url: `https://api.solutionsathee.com/api/v1/crm/gethomeloanbyid?homeleadID=${serviceID}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setpopupdata(res.data.response);
      });
    } catch (error) {
    }
  }, [serviceID, loading]);


  const editHomeLoanLead = async (e, fieldToEdit) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("leadId", serviceID);
      formData.append("fieldToEdit", fieldToEdit);
      formData.append("employeeIdentityCard", employeeIdentityCard);
      formData.append("loanApplication", loanApplication);
      formData.append("proofOfIdentity", proofOfIdentity);
      formData.append("proofOfResidency", proofOfResidency);
      formData.append("permissionOfConstruction", permissionOfConstruction);
      formData.append(
        "registeredAgreementForSales",
        registeredAgreementForSales
      );
      formData.append("allotmentletter", allotmentletter);
      formData.append("stampedAgreement", stampedAgreement);
      formData.append("occupancyCertificate", occupancyCertificate);
      formData.append("shareCertification", shareCertification);
      formData.append("maintainanceBill", maintainanceBill);
      formData.append("electricityBill", electricityBill);
      formData.append("propertyTaxReceipt", propertyTaxReceipt);
      formData.append("paymentMadetoBuilderRecept", paymentMadetoBuilderRecept);
      formData.append("sixMonthBankStatement", sixMonthBankStatement);
      formData.append("loanAccountStatement", loanAccountStatement);
      formData.append("threeMonthSalarySlip", threeMonthSalarySlip);
      formData.append(
        "twoYearOfFormsixteenOrItReturn",
        twoYearOfFormsixteenOrItReturn
      );
      formData.append("businessAddressProof", businessAddressProof);
      formData.append("ThreeYearItReturn", ThreeYearItReturn);
      formData.append("businessLisenceDetail", businessLisenceDetail);
      formData.append("TDScertification", TDScertification);
      formData.append(
        "certificationOfQualification",
        certificationOfQualification
      );
      formData.append(
        "approvedPlanCopyRegisteredDevelopmentAgreementofthebuilderConveyanceDeed",
        approvedPlanCopyRegisteredDevelopmentAgreementofthebuilderConveyanceDeed
      );

      const editedResponse = await axios({
        method: "patch",
        url: "https://api.solutionsathee.com/api/v1/crm/updatehomeloan",
        data: formData,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (editedResponse.data.status) {
        setLoading(false);
        toast.success("Updated Successfuly", {
          position: toast.POSITION.TOP_RIGHT
        })
      }
    } catch (error) {
      setLoading(false);
      toast.error("Failed to Update", {
        position: toast.POSITION.TOP_RIGHT});
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-white">
    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
    <div className="flex justify-center items-center">
      <form
        onSubmit={(e) => {
          handleLeadForm(e);
        }}
        className="w-full max-w-lg"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata && (
              <>
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Loan Amount*
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="number"
                  placeholder=""
                  onChange={(e) => {
                    setLoanAmount(e.target.value);
                  }}
                  defaultValue={popupdata.LoanAmount}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <div className="relative">
              {popupdata.client && (
                <>
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-state"
                  >
                    My Client*
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder=""
                    onChange={(e) => {
                      setLoanAmount(e.target.value);
                    }}
                    defaultValue={popupdata.client.first_name}
                    readOnly
                  />
                </>
              )}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.service && (
              <>
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  Service*
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="text"
                  defaultValue={popupdata.service.service_name}
                  readOnly
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("employeeIdentityCard") && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.employeeIdentityCard
                  .split("public")[1]
                  .substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Employee Identity Card*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setEmployeeIdentity(!employeeIdentity)}
            >
              <AiFillEdit />
            </p>
            {employeeIdentity && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setEmployeeIdentityCard(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "employeeIdentityCard");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("loanApplication") && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.loanApplication
                  .split("public")[1]
                  .substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Loan Application*
            </label>
            <p className="cursor-pointer" onClick={() => setLoanApp(!loanApp)}>
              <AiFillEdit />
            </p>
            {loanApp && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="file"
                  placeholder=""
                  onChange={(e) => {
                    setLoanApplication(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "loanApplication");
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("proofOfIdentity") && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.proofOfIdentity
                  .split("public")[1]
                  .substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Proof Of Identity*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setProofOfId(!proofOfId)}
            >
              <AiFillEdit />
            </p>
            {proofOfId && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setProofOfIdentity(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "proofOfIdentity");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("proofOfResidency") && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.proofOfResidency
                  .split("public")[1]
                  .substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Proof Of Residency*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setResidency(!residency)}
            >
              <AiFillEdit />
            </p>
            {residency && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="file"
                  placeholder=""
                  onChange={(e) => {
                    setProofOfResidency(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "proofOfResidency");
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("permissionOfConstruction") && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.permissionOfConstruction
                  .split("public")[1]
                  .substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Permission Of Construction*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setConstruction(!construction)}
            >
              <AiFillEdit />
            </p>
            {construction && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setPermissionOfConstruction(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "permissionOfConstruction");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("registeredAgreementForSales") && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.registeredAgreementForSales
                  .split("public")[1]
                  .substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Registered Agreement For Sales*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setAgreement(!agreement)}
            >
              <AiFillEdit />
            </p>
            {agreement && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="file"
                  placeholder=""
                  onChange={(e) => {
                    setRegisteredAgreementForSales(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "registeredAgreementForSales");
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("allotmentletter") && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.allotmentletter
                  .split("public")[1]
                  .substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Allotment Letter*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setAllotment(!allotment)}
            >
              <AiFillEdit />
            </p>
            {allotment && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setAllotmentletter(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "allotmentletter");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("stampedAgreement") && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.stampedAgreement
                  .split("public")[1]
                  .substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Stamped Agreement*
            </label>
            <p className="cursor-pointer" onClick={() => setStamped(!stamped)}>
              <AiFillEdit />
            </p>
            {stamped && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="file"
                  placeholder=""
                  onChange={(e) => {
                    setStampedAgreement(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "stampedAgreement");
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("occupancyCertificate") && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.occupancyCertificate
                  .split("public")[1]
                  .substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Occupancy Certificate*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setOccupancy(!occupancy)}
            >
              <AiFillEdit />
            </p>
            {occupancy && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setOccupancyCertificate(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "occupancyCertificate");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("shareCertification") && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.shareCertification
                  .split("public")[1]
                  .substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Share Certification*
            </label>
            <p className="cursor-pointer" onClick={() => setShare(!share)}>
              <AiFillEdit />
            </p>
            {share && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="file"
                  placeholder=""
                  onChange={(e) => {
                    setShareCertification(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "shareCertification");
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("maintainanceBill") && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.maintainanceBill
                  .split("public")[1]
                  .substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Maintainance Bill*
            </label>
            <p className="cursor-pointer" onClick={() => setBill(!bill)}>
              <AiFillEdit />
            </p>
            {bill && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setMaintainanceBill(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "maintainanceBill");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("electricityBill") && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.electricityBill
                  .split("public")[1]
                  .substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Electricity Bill*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setElectBill(!electBill)}
            >
              <AiFillEdit />
            </p>
            {electBill && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="file"
                  placeholder=""
                  onChange={(e) => {
                    setElectricityBill(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "electricityBill");
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("propertyTaxReceipt") && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.propertyTaxReceipt
                  .split("public")[1]
                  .substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Property Tax Receipt*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setProperty(!property)}
            >
              <AiFillEdit />
            </p>
            {property && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setPropertyTaxReceipt(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "propertyTaxReceipt");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty(
              "approvedPlanCopyRegisteredDevelopmentAgreementofthebuilderConveyanceDeed"
            ) && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.approvedPlanCopyRegisteredDevelopmentAgreementofthebuilderConveyanceDeed
                  .split("public")[1]
                  .substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Approved Plan Copy Registered Development Agreement Of The Builder
              Conveyance Deed*
            </label>
            <p className="cursor-pointer" onClick={() => setPlan(!plan)}>
              <AiFillEdit />
            </p>
            {plan && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="file"
                  placeholder=""
                  onChange={(e) => {
                    setApprovedPlanCopyRegisteredDevelopmentAgreementofthebuilderConveyanceDeed(
                      e.target.files[0]
                    );
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(
                      e,
                      "approvedPlanCopyRegisteredDevelopmentAgreementofthebuilderConveyanceDeed"
                    );
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("paymentMadetoBuilderRecept") && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.paymentMadetoBuilderRecept
                  .split("public")[1]
                  .substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Payment Made To Builder Recept*
            </label>
            <p className="cursor-pointer" onClick={() => setBuilder(!builder)}>
              <AiFillEdit />
            </p>
            {builder && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setPaymentMadetoBuilderRecept(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "paymentMadetoBuilderRecept");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("sixMonthBankStatement") && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.sixMonthBankStatement
                  .split("public")[1]
                  .substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Six Month Bank Statement*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setSixMonth(!sixMonth)}
            >
              <AiFillEdit />
            </p>
            {sixMonth && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="file"
                  placeholder=""
                  onChange={(e) => {
                    setSixMonthBankStatement(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "sixMonthBankStatement");
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("loanAccountStatement") && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.loanAccountStatement
                  .split("public")[1]
                  .substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Loan AccountStatement*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setAccountStatement(!accountStatement)}
            >
              <AiFillEdit />
            </p>
            {accountStatement && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setLoanAccountStatement(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "loanAccountStatement");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("threeMonthSalarySlip") && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.threeMonthSalarySlip
                  .split("public")[1]
                  .substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Three Month Salary Slip*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setThreeMonth(!threeMonth)}
            >
              <AiFillEdit />
            </p>
            {threeMonth && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="file"
                  placeholder=""
                  onChange={(e) => {
                    setThreeMonthSalarySlip(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "threeMonthSalarySlip");
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("twoYearOfFormsixteenOrItReturn") && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.twoYearOfFormsixteenOrItReturn
                  .split("public")[1]
                  .substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Two Year Of Form sixteen Or It Return*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setItReturn(!itReturn)}
            >
              <AiFillEdit />
            </p>
            {itReturn && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setTwoYearOfFormsixteenOrItReturn(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "twoYearOfFormsixteenOrItReturn");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("businessAddressProof") && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.businessAddressProof
                  .split("public")[1]
                  .substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Business Address Proof*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setBusinessAd(!businessAd)}
            >
              <AiFillEdit />
            </p>
            {businessAd && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="file"
                  placeholder=""
                  onChange={(e) => {
                    setBusinessAddressProof(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "businessAddressProof");
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("ThreeYearItReturn") && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.ThreeYearItReturn.split(
                  "public"
                )[1].substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Three YearIt Return*
            </label>
            <p className="cursor-pointer" onClick={() => setYearIt(!yearIt)}>
              <AiFillEdit />
            </p>
            {yearIt && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setThreeYearItReturn(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "ThreeYearItReturn");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("businessLisenceDetail") && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.businessLisenceDetail
                  .split("public")[1]
                  .substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Business Lisence Detail*
            </label>
            <p className="cursor-pointer" onClick={() => setLisence(!lisence)}>
              <AiFillEdit />
            </p>
            {lisence && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="file"
                  placeholder=""
                  onChange={(e) => {
                    setBusinessLisenceDetail(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "businessLisenceDetail");
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("TDScertification") && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.TDScertification.split(
                  "public"
                )[1].substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              TDS Certification*
            </label>
            <p className="cursor-pointer" onClick={() => setTDS(!tds)}>
              <AiFillEdit />
            </p>
            {tds && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setTDScertification(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "TDScertification");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("certificationOfQualification") && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.certificationOfQualification
                  .split("public")[1]
                  .substring(1)}`}
                alt=""
                srcset=""
              />
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Certification Of Qualification*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setQualification(!qualification)}
            >
              <AiFillEdit />
            </p>
            {qualification && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="file"
                  placeholder=""
                  onChange={(e) => {
                    setcertificationOfQualification(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editHomeLoanLead(e, "certificationOfQualification");
                  }}
                />
              </>
            )}
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
    </div>
    </main>
      </div>
    </div>
  );
};

export default UpdateLeadForHomeLoan;