import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {AiFillEdit}  from 'react-icons/ai';
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GSTregistration = () => {
  const tokenData = localStorage.getItem("token");
  const token = JSON.parse(tokenData).usertoken;
  const location = useLocation();
  const {
    state: { serviceID },
  } = location;
  const [clientData, setClientData] = useState("");
  const [LoanAmount, setLoanAmount] = useState("");
  const [client, setClient] = useState("");
  const [IndividualPanCard, setIndividualPanCard] = useState(null);
  const [IndividualAdharCard, setIndividualAdharCard] = useState(null);
  const [IndividualPhotograph, setIndividualPhotograph] = useState(null);
  const [IndividualBankAccountDetails, setIndividualBankAccountDetails] =
    useState(null);
  const [IndividualAddress, setIndividualAddress] = useState(null);
  const [HUFPanCard, setHUFPanCard] = useState(null);
  const [AdharcardOfKartaHUF, setAdharcardOfKartaHUF] = useState(null);
  const [HUFPhotographOfTheOwner, setHUFPhotographOfTheOwner] = useState(null);
  const [HUFBankAccountDetails, setHUFBankAccountDetails] = useState(null);
  const [HUFAddressProof, setHUFAddressProof] = useState(null);
  const [CompanyPanCard, setCompanyPanCard] = useState(null);
  const [
    CompanyCertificateOfIncorporation,
    setCompanyCertificateOfIncorporation,
  ] = useState(null);
  const [CompanyArticlesOfAssoication, setCompanyArticlesOfAssoication] =
    useState(null);
  const [
    CompanyPanCardOfAuthorizedSignature,
    setCompanyPanCardOfAuthorizedSignature,
  ] = useState(null);
  const [
    CompanyAdharCardOfAuthorizedSignature,
    setCompanyAdharCardOfAuthorizedSignature,
  ] = useState(null);
  const [
    CompanyBoardresolutionappointingauthorizedsignatory,
    setCompanyBoardresolutionappointingauthorizedsignatory,
  ] = useState("");
  const [CompanyBankAccountDetails, setCompanyBankAccountDetails] =
    useState(null);
  const [CompanyAddressProof, setCompanyAddressProofs] = useState(null);
  const [popupdata, setpopupdata] = useState("");
  const [individualpan, setIndividualPan] = useState(false);
  const [adr, setAdr] = useState(false);
  const [bnkdtl, setBnkDetail] = useState(false);
  const [hufpan, setHufPan] = useState(false);
  const [hufphoto, setHufPhoto] = useState(false);
  const [hufAdd, setHufAdd] = useState(false);
  const [incorporation, setIncorporation] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [signatory, setSignatory] = useState(false);
  const [companyAd, setCompanyAd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [IndividualPhotographInput, setIndividualPhotographInput] =
    useState(false);
  const [companyAdhar, setCompanyAdhar] = useState(false);
  const [individualAddressInput, setIndividualAddressInput] = useState(false);
  const [adharKartaHuf, setAdharKartaHuf] = useState(false);
  const [hudBankAccount, setHudBankAccount] = useState(false);
  const [companyPan, setCompanyPan] = useState(false);
  const [companyArticle, setCompanyArticle] = useState(false);
  const [CompanyBank, setCompanyBank] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    try {
      axios({
        method: "get",
        url: `http://localhost:5000/api/v1/crm/getGSTregistrationbyid?GSTRegistrationId=${serviceID}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setpopupdata(res.data.response);
      });
    } catch (error) {
    }
  }, [serviceID, loading]);

  const editGSTLeadLoan = async (e, fieldToEdit) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("leadId", serviceID);
      formData.append("fieldToEdit", fieldToEdit);
      formData.append("IndividualPanCard", IndividualPanCard);
      formData.append("IndividualAdharCard", IndividualAdharCard);
      formData.append("IndividualPhotograph", IndividualPhotograph);
      formData.append(
        "IndividualBankAccountDetails",
        IndividualBankAccountDetails
      );
      formData.append("IndividualAddress", IndividualAddress);
      formData.append("HUFPanCard", HUFPanCard);
      formData.append("AdharcardOfKartaHUF", AdharcardOfKartaHUF);
      formData.append("HUFPhotographOfTheOwner", HUFPhotographOfTheOwner);
      formData.append("HUFBankAccountDetails", HUFBankAccountDetails);
      formData.append("HUFAddressProof", HUFAddressProof);
      formData.append("CompanyPanCard", CompanyPanCard);
      formData.append(
        "CompanyCertificateOfIncorporation",
        CompanyCertificateOfIncorporation
      );
      formData.append(
        "CompanyArticlesOfAssoication",
        CompanyArticlesOfAssoication
      );
      formData.append(
        "CompanyPanCardOfAuthorizedSignature",
        CompanyPanCardOfAuthorizedSignature
      );
      formData.append(
        "CompanyAdharCardOfAuthorizedSignature",
        CompanyAdharCardOfAuthorizedSignature
      );
      formData.append(
        "CompanyBoardresolutionappointingauthorizedsignatory",
        CompanyBoardresolutionappointingauthorizedsignatory
      );
      formData.append("CompanyBankAccountDetails", CompanyBankAccountDetails);
      formData.append("CompanyAddressProof", CompanyAddressProof);

      const editedResponse = await axios({
        method: "patch",
        url: "http://localhost:5000/api/v1/crm/updateGSTRegistration",
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
    <>
    <div className="flex h-screen overflow-hidden bg-white">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
\          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              
      {popupdata && (
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
                <div className="relative">
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
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder=""
                  onChange={(e) => {
                    setClient(e.target.value);
                  }}
                  defaultValue={popupdata.client.first_name}
                />
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
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                {popupdata && (
                  <img
                    src={`http://localhost:5000/${popupdata.IndividualPanCard.split(
                      "public"
                    )[1].substring(1)}`}
                    alt=""
                    srcset=""
                  />
                )}
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  Individual Pan Card*
                </label>
                <p
                  className="cursor-pointer"
                  onClick={() => setIndividualPan(!individualpan)}
                >
                  <AiFillEdit />
                </p>
                {individualpan && (
                  <>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-zip"
                      type="file"
                      onChange={(e) => setIndividualPanCard(e.target.files[0])}
                      readOnly
                    />
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material/24/submit-progress--v2.png"
                      alt="submit-progress--v2"
                      onClick={(e) => {
                        editGSTLeadLoan(e, "IndividualPanCard");
                      }}
                    />
                  </>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                {popupdata.hasOwnProperty("IndividualAdharCard") && (
                  <img
                    src={`http://localhost:5000/${popupdata.IndividualAdharCard.split(
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
                  Individual Adhar Card*
                </label>
                <p className="cursor-pointer" onClick={() => setAdr(!adr)}>
                  <AiFillEdit />
                </p>
                {adr && (
                  <>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      type="file"
                      placeholder="Albuquerque"
                      onChange={(e) => {
                        setIndividualAdharCard(e.target.files[0]);
                      }}
                    />
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material/24/submit-progress--v2.png"
                      alt="submit-progress--v2"
                      onClick={(e) => {
                        editGSTLeadLoan(e, "IndividualAdharCard");
                      }}
                    />
                  </>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                {popupdata.hasOwnProperty("IndividualPhotograph") && (
                  <img
                    src={`http://localhost:5000/${popupdata.IndividualPhotograph.split(
                      "public"
                    )[1].substring(1)}`}
                    alt=""
                    srcset=""
                  />
                )}
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  Individual Photograph*
                </label>
                <p
                  className="cursor-pointer"
                  onClick={() =>
                    setIndividualPhotographInput(!IndividualPhotographInput)
                  }
                >
                  <AiFillEdit />
                </p>
                {IndividualPhotographInput && (
                  <>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-zip"
                      type="file"
                      placeholder=""
                      onChange={(e) => {
                        setIndividualPhotograph(e.target.files[0]);
                      }}
                    />
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material/24/submit-progress--v2.png"
                      alt="submit-progress--v2"
                      onClick={(e) => {
                        editGSTLeadLoan(e, "IndividualPhotograph");
                      }}
                    />
                  </>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                {popupdata.hasOwnProperty("IndividualBankAccountDetails") && (
                  <img
                    src={`http://localhost:5000/${popupdata.IndividualBankAccountDetails.split(
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
                  Individual Bank Account Details*
                </label>
                <p
                  className="cursor-pointer"
                  onClick={() => setBnkDetail(!bnkdtl)}
                >
                  <AiFillEdit />
                </p>
                {bnkdtl && (
                  <>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      type="file"
                      placeholder="Albuquerque"
                      onChange={(e) => {
                        setIndividualBankAccountDetails(e.target.files[0]);
                      }}
                    />
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material/24/submit-progress--v2.png"
                      alt="submit-progress--v2"
                      onClick={(e) => {
                        editGSTLeadLoan(e, "IndividualBankAccountDetails");
                      }}
                    />
                  </>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                {popupdata.hasOwnProperty("IndividualAddress") && (
                  <img
                    src={`http://localhost:5000/${popupdata.IndividualAddress.split(
                      "public"
                    )[1].substring(1)}`}
                    alt=""
                    srcset=""
                  />
                )}
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  Individual Address*
                </label>
                <p
                  className="cursor-pointer"
                  onClick={() =>
                    setIndividualAddressInput(!individualAddressInput)
                  }
                >
                  <AiFillEdit />
                </p>
                {individualAddressInput && (
                  <>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-zip"
                      type="file"
                      placeholder=""
                      onChange={(e) => {
                        setIndividualAddress(e.target.files[0]);
                      }}
                    />
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material/24/submit-progress--v2.png"
                      alt="submit-progress--v2"
                      onClick={(e) => {
                        editGSTLeadLoan(e, "IndividualAddress");
                      }}
                    />
                  </>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                {popupdata.hasOwnProperty("HUFPanCard") && (
                  <img
                    src={`http://localhost:5000/${popupdata.HUFPanCard.split(
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
                  HUF Pan Card*
                </label>
                <p
                  className="cursor-pointer"
                  onClick={() => setHufPan(!hufpan)}
                >
                  <AiFillEdit />
                </p>
                {hufpan && (
                  <>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      type="file"
                      placeholder="Albuquerque"
                      onChange={(e) => {
                        setHUFPanCard(e.target.files[0]);
                      }}
                    />
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material/24/submit-progress--v2.png"
                      alt="submit-progress--v2"
                      onClick={(e) => {
                        editGSTLeadLoan(e, "HUFPanCard");
                      }}
                    />
                  </>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                {popupdata.hasOwnProperty("AdharcardOfKartaHUF") && (
                  <img
                    src={`http://localhost:5000/${popupdata.AdharcardOfKartaHUF.split(
                      "public"
                    )[1].substring(1)}`}
                    alt=""
                    srcset=""
                  />
                )}
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  Adharcard Of Karta HUF*
                </label>
                <p
                  className="cursor-pointer"
                  onClick={() => setAdharKartaHuf(!adharKartaHuf)}
                >
                  <AiFillEdit />
                </p>
                {adharKartaHuf && (
                  <>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-zip"
                      type="file"
                      placeholder=""
                      onChange={(e) => {
                        setAdharcardOfKartaHUF(e.target.files[0]);
                      }}
                    />
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material/24/submit-progress--v2.png"
                      alt="submit-progress--v2"
                      onClick={(e) => {
                        editGSTLeadLoan(e, "AdharcardOfKartaHUF");
                      }}
                    />
                  </>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                {popupdata.hasOwnProperty("HUFPhotographOfTheOwner") && (
                  <img
                    src={`http://localhost:5000/${popupdata.HUFPhotographOfTheOwner.split(
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
                  HUF Photograph Of The Owner*
                </label>
                <p
                  className="cursor-pointer"
                  onClick={() => setHufPhoto(!hufphoto)}
                >
                  <AiFillEdit />
                </p>
                {hufphoto && (
                  <>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      type="file"
                      placeholder="Albuquerque"
                      onChange={(e) => {
                        setHUFPhotographOfTheOwner(e.target.files[0]);
                      }}
                    />
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material/24/submit-progress--v2.png"
                      alt="submit-progress--v2"
                      onClick={(e) => {
                        editGSTLeadLoan(e, "HUFPhotographOfTheOwner");
                      }}
                    />
                  </>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                {popupdata.hasOwnProperty("HUFBankAccountDetails") && (
                  <img
                    src={`http://localhost:5000/${popupdata.HUFBankAccountDetails.split(
                      "public"
                    )[1].substring(1)}`}
                    alt=""
                    srcset=""
                  />
                )}
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  HUF Bank Account Details*
                </label>
                <p
                  className="cursor-pointer"
                  onClick={() => setHudBankAccount(!hudBankAccount)}
                >
                  <AiFillEdit />
                </p>
                {hudBankAccount && (
                  <>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-zip"
                      type="file"
                      placeholder=""
                      onChange={(e) => {
                        setHUFBankAccountDetails(e.target.files[0]);
                      }}
                    />
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material/24/submit-progress--v2.png"
                      alt="submit-progress--v2"
                      onClick={(e) => {
                        editGSTLeadLoan(e, "HUFBankAccountDetails");
                      }}
                    />
                  </>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                {popupdata.hasOwnProperty("HUFAddressProof") && (
                  <img
                    src={`http://localhost:5000/${popupdata.HUFAddressProof.split(
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
                  HUF Address Proof*
                </label>
                <p
                  className="cursor-pointer"
                  onClick={() => setHufAdd(!hufAdd)}
                >
                  <AiFillEdit />
                </p>
                {hufAdd && (
                  <>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      type="file"
                      placeholder="Albuquerque"
                      onChange={(e) => {
                        setHUFAddressProof(e.target.files[0]);
                      }}
                    />
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material/24/submit-progress--v2.png"
                      alt="submit-progress--v2"
                      onClick={(e) => {
                        editGSTLeadLoan(e, "HUFAddressProof");
                      }}
                    />
                  </>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                {popupdata.hasOwnProperty("CompanyPanCard") && (
                  <img
                    src={`http://localhost:5000/${popupdata.CompanyPanCard.split(
                      "public"
                    )[1].substring(1)}`}
                    alt=""
                    srcset=""
                  />
                )}
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  Company Pan Card*
                </label>
                <p
                  className="cursor-pointer"
                  onClick={() => setCompanyPan(!companyPan)}
                >
                  <AiFillEdit />
                </p>
                {companyPan && (
                  <>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-zip"
                      type="file"
                      placeholder=""
                      onChange={(e) => {
                        setCompanyPanCard(e.target.files[0]);
                      }}
                    />
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material/24/submit-progress--v2.png"
                      alt="submit-progress--v2"
                      onClick={(e) => {
                        editGSTLeadLoan(e, "CompanyPanCard");
                      }}
                    />
                  </>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                {popupdata.hasOwnProperty("CompanyCertificateOfIncorporation") && (
                  <img
                    src={`http://localhost:5000/${popupdata.CompanyCertificateOfIncorporation.split(
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
                  Company Certificate Of Incorporation*
                </label>
                <p
                  className="cursor-pointer"
                  onClick={() => setIncorporation(!incorporation)}
                >
                  <AiFillEdit />
                </p>
                {incorporation && (
                  <>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      type="file"
                      placeholder="Albuquerque"
                      onChange={(e) => {
                        setCompanyCertificateOfIncorporation(e.target.files[0]);
                      }}
                    />
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material/24/submit-progress--v2.png"
                      alt="submit-progress--v2"
                      onClick={(e) => {
                        editGSTLeadLoan(e, "CompanyCertificateOfIncorporation");
                      }}
                    />
                  </>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                {popupdata.hasOwnProperty("CompanyArticlesOfAssoication") && (
                  <img
                    src={`http://localhost:5000/${popupdata.CompanyArticlesOfAssoication.split(
                      "public"
                    )[1].substring(1)}`}
                    alt=""
                    srcset=""
                  />
                )}
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  Company Articles Of Assoication*
                </label>
                <p
                  className="cursor-pointer"
                  onClick={() => setCompanyArticle(!companyArticle)}
                >
                  <AiFillEdit />
                </p>
                {companyArticle && (
                  <>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-zip"
                      type="file"
                      placeholder=""
                      onChange={(e) => {
                        setCompanyArticlesOfAssoication(e.target.files[0]);
                      }}
                    />
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material/24/submit-progress--v2.png"
                      alt="submit-progress--v2"
                      onClick={(e) => {
                        editGSTLeadLoan(e, "CompanyArticlesOfAssoication");
                      }}
                    />
                  </>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                {popupdata.hasOwnProperty("CompanyPanCardOfAuthorizedSignature") && (
                  <img
                    src={`http://localhost:5000/${popupdata.CompanyPanCardOfAuthorizedSignature.split(
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
                  Company Pan Card Of Authorized Signature*
                </label>
                <p
                  className="cursor-pointer"
                  onClick={() => setCompanyPanAuth(!companyPanAuth)}
                >
                  <AiFillEdit />
                </p>
                {authorized && (
                  <>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      type="file"
                      placeholder="Albuquerque"
                      onChange={(e) => {
                        setCompanyPanCardOfAuthorizedSignature(
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
                        editGSTLeadLoan(e, "CompanyPanCardOfAuthorizedSignature");
                      }}
                    />
                  </>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                {popupdata.hasOwnProperty("CompanyAdharCardOfAuthorizedSignature") && (
                  <img
                    src={`http://localhost:5000/${popupdata.CompanyAdharCardOfAuthorizedSignature.split(
                      "public"
                    )[1].substring(1)}`}
                    alt=""
                    srcset=""
                  />
                )}
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  Company Adhar Card Of Authorized Signature*
                </label>
                <p
                  className="cursor-pointer"
                  onClick={() => setCompanyAdhar(!companyAdhar)}
                >
                  <AiFillEdit />
                </p>
                {companyAdhar && (
                  <>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-zip"
                      type="file"
                      placeholder=""
                      onChange={(e) => {
                        setCompanyAdharCardOfAuthorizedSignature(
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
                        editGSTLeadLoan(e, "CompanyAdharCardOfAuthorizedSignature");
                      }}
                    />
                  </>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                {popupdata.hasOwnProperty("CompanyBoardresolutionappointingauthorizedsignatory") && (
                  <img
                    src={`http://localhost:5000/${popupdata.CompanyBoardresolutionappointingauthorizedsignatory.split(
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
                  Company Board resolution appointing authorized signatory*
                </label>
                <p
                  className="cursor-pointer"
                  onClick={() => setSignatory(!signatory)}
                >
                  <AiFillEdit />
                </p>
                {signatory && (
                  <>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      type="file"
                      placeholder="Albuquerque"
                      onChange={(e) => {
                        setCompanyBoardresolutionappointingauthorizedsignatory(
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
                        editGSTLeadLoan(e, "CompanyBoardresolutionappointingauthorizedsignatory");
                      }}
                    />
                  </>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                {popupdata.hasOwnProperty("CompanyBankAccountDetails") && (
                  <img
                    src={`http://localhost:5000/${popupdata.CompanyBankAccountDetails.split(
                      "public"
                    )[1].substring(1)}`}
                    alt=""
                    srcset=""
                  />
                )}
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  Company Bank Account Details*
                </label>
                <p
                  className="cursor-pointer"
                  onClick={() => setCompanyBank(!CompanyBank)}
                >
                  <AiFillEdit />
                </p>
                {CompanyBank && (
                  <>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-zip"
                      type="file"
                      placeholder=""
                      onChange={(e) => {
                        setCompanyBankAccountDetails(e.target.files[0]);
                      }}
                    />
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material/24/submit-progress--v2.png"
                      alt="submit-progress--v2"
                      onClick={(e) => {
                        editGSTLeadLoan(e, "CompanyBankAccountDetails");
                      }}
                    />
                  </>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                {popupdata.hasOwnProperty("CompanyAddressProof") && (
                  <img
                    src={`http://localhost:5000/${popupdata.CompanyAddressProof.split(
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
                  Company Address Proof*
                </label>
                <p
                  className="cursor-pointer"
                  onClick={() => setCompanyAd(!companyAd)}
                >
                  <AiFillEdit />
                </p>
                {companyAd && (
                  <>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      type="file"
                      placeholder="Albuquerque"
                      onChange={(e) => {
                        setCompanyAddressProofs(e.target.files[0]);
                      }}
                    />
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material/24/submit-progress--v2.png"
                      alt="submit-progress--v2"
                      onClick={(e) => {
                        editGSTLeadLoan(e, "CompanyAddressProof");
                      }}
                    />
                  </>
                )}
              </div>
            </div>
          </form>
          <ToastContainer />
          </div>
              )};
                
             </div>
          </main>
        </div>
      </div>
      
    </>
  );
};

export default GSTregistration;
