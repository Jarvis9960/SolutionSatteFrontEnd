
import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {AiFillEdit}  from 'react-icons/ai';
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Business = () => {
  const tokenData = localStorage.getItem("token");
  const token = JSON.parse(tokenData).usertoken;
  const location = useLocation();
  const {
    state: { serviceID },
  } = location;
  const [clientData, setClientData] = useState("");
  const [LoanAmount, setLoanAmount] = useState("");
  const [client, setClient] = useState("");
  const [PanCard, setPanCard] = useState(null);
  const [IdentityProof, setIdentityProof] = useState(null);
  const [AddressProof, setAddressProof] = useState(null);
  const [SixMonthBankStatement, setSixMonthBankStatement] = useState(null);
  const [LatestITR, setLatestITR] = useState(null);
  const [ProofOfContinuationITR, setProofOfContinuationITR] = useState(null);
  const [
    ProofOfContinuationTradeLiscense,
    setProofOfContinuationTradeLiscense,
  ] = useState(null);
  const [
    ProofOfContinuationEstablishment,
    setProofOfContinuationEstablishment,
  ] = useState(null);
  const [ProofOfContinuationSalesTax, setProofOfContinuationSalesTax] =
    useState(null);
  const [PropDeclaration, setPropDeclaration] = useState(null);
  const [PartnershipDeed, setPartnershipDeed] = useState(null);
  const [TrueCopyMemorandum, setTrueCopyMemorandum] = useState(null);
  const [TrueCopyArticleofAssociation, setTrueCopyArticleofAssociation] =
    useState(null);
  const [TrueCopyBoardResolution, setTrueCopyBoardResolution] = useState(null);
  const [popupdata, setpopupdata] = useState([]);
  const [show, setShow] = useState(false);
  const [address, setAddress] = useState(false);
  const [pan, setPan] = useState(false);
  const [iproof, setIproof] = useState(false);
  const [itr, setItr] = useState(false);
  const [itr2, setItr2] = useState(false);
  const [trade, setTrade] = useState(false);
  const [establish, setEstablish] = useState(false);
  const [tax, setTax] = useState(false);
  const [decleration, setDecleration] = useState(false);
  const [partner, setPartner] = useState(false);
  const [memorandom, setMemorandom] = useState(false);
  const [six, setSix] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);



  useEffect(() => {
    try {
      axios({
        method: "get",
        url: `https://api.solutionsathee.com/api/v1/crm/getbusinessloanbyid?businessLoanId=${serviceID}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setpopupdata(res.data.response);
        toast.success("Updated Successfuly", {
          position: toast.POSITION.TOP_RIGHT })
      });
    } catch (error) {
      toast.error("Failed to Update", {
        position: toast.POSITION.TOP_RIGHT});
    }
  }, [serviceID, loading]);

  const editBusinessLoanLead = async (e, fieldToEdit) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("leadId", serviceID);
      formData.append("fieldToEdit", fieldToEdit);
      formData.append("PanCard", PanCard);
      formData.append("IdentityProof", IdentityProof);
      formData.append("AddressProof", AddressProof);
      formData.append("SixMonthBankStatement", SixMonthBankStatement);
      formData.append("LatestITR", LatestITR);
      formData.append("ProofOfContinuationITR", ProofOfContinuationITR);
      formData.append(
        "ProofOfContinuationEstablishment",
        ProofOfContinuationEstablishment
      );
      formData.append(
        "ProofOfContinuationTradeLiscense",
        ProofOfContinuationTradeLiscense
      );
      formData.append(
        "ProofOfContinuationSalesTax",
        ProofOfContinuationSalesTax
      );
      formData.append("PropDeclaration", PropDeclaration);
      formData.append("PartnershipDeed", PartnershipDeed);
      formData.append("TrueCopyMemorandum", TrueCopyMemorandum);
      formData.append(
        "TrueCopyArticleofAssociation",
        TrueCopyArticleofAssociation
      );
      formData.append("TrueCopyBoardResolution", TrueCopyBoardResolution);

      const editedResponse = await axios({
        method: "patch",
        url: "https://api.solutionsathee.com/api/v1/crm/updatebusinessloan",
        data: formData,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (editedResponse.data.status) {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
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
            {popupdata.hasOwnProperty("TrueCopyArticleofAssociation") && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.TrueCopyArticleofAssociation.split(
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
              True Copy Article Of Association*
            </label>
            <p className="cursor-pointer" onClick={() => setShow(!show)}>
              <AiFillEdit />
            </p>
            {show && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setTrueCopyArticleofAssociation(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editBusinessLoanLead(e, "TrueCopyArticleofAssociation");
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("PanCard") && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.PanCard.split(
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
              Pan Card*
            </label>
            <p className="cursor-pointer" onClick={() => setPan(!pan)}>
              <AiFillEdit />
            </p>
            {pan && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setPanCard(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editBusinessLoanLead(e, "PanCard");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("IdentityProof") && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.IdentityProof.split(
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
              Identity Proof*
            </label>
            <p className="cursor-pointer" onClick={() => setIproof(!iproof)}>
              <AiFillEdit />
            </p>
            {iproof && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="file"
                  placeholder=""
                  onChange={(e) => {
                    setIdentityProof(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editBusinessLoanLead(e, "IdentityProof");
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("AddressProof") && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.AddressProof.split(
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
              Address Proof*
            </label>
            <p className="cursor-pointer" onClick={() => setAddress(!address)}>
              <AiFillEdit />
            </p>
            {address && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setAddressProof(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editBusinessLoanLead(e, "AddressProof");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("SixMonthBankStatement") && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.SixMonthBankStatement.split(
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
              Six Month Salary Slip*
            </label>
            <p className="cursor-pointer" onClick={() => setSix(!six)}>
              <AiFillEdit />
            </p>
            {six && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
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
                    editBusinessLoanLead(e, "SixMonthBankStatement");
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("LatestITR") && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.LatestITR.split(
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
              Latest ITR*
            </label>
            <p className="cursor-pointer" onClick={() => setItr(!itr)}>
              <AiFillEdit />
            </p>
            {itr && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setLatestITR(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editBusinessLoanLead(e, "LatestITR");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("ProofOfContinuationITR") && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.ProofOfContinuationITR.split(
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
              Proof Of Continuation ITR*
            </label>
            <p className="cursor-pointer" onClick={() => setItr2(!itr2)}>
              <AiFillEdit />
            </p>
            {itr2 && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setProofOfContinuationITR(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editBusinessLoanLead(e, "ProofOfContinuationITR");
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("ProofOfContinuationTradeLiscense") && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.ProofOfContinuationTradeLiscense.split(
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
              Proof Of Continuation Trade Liscense*
            </label>
            <p className="cursor-pointer" onClick={() => setTrade(!trade)}>
              <AiFillEdit />
            </p>
            {trade && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setProofOfContinuationTradeLiscense(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editBusinessLoanLead(e, "ProofOfContinuationTradeLiscense");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("ProofOfContinuationEstablishment") && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.ProofOfContinuationEstablishment.split(
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
              Proof Of Continuation Establishment*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setEstablish(!establish)}
            >
              <AiFillEdit />
            </p>
            {establish && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setProofOfContinuationEstablishment(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editBusinessLoanLead(e, "ProofOfContinuationEstablishment");
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("ProofOfContinuationSalesTax") && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.ProofOfContinuationSalesTax.split(
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
              Proof Of Continuation Sales Tax*
            </label>
            <p className="cursor-pointer" onClick={() => setTax(!tax)}>
              <AiFillEdit />
            </p>
            {tax && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setProofOfContinuationSalesTax(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editBusinessLoanLead(e, "ProofOfContinuationSalesTax");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("PropDeclaration") && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.PropDeclaration.split(
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
              Prop Declaration*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setDecleration(!decleration)}
            >
              <AiFillEdit />
            </p>
            {decleration && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setPropDeclaration(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editBusinessLoanLead(e, "PropDeclaration");
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("PartnershipDeed") && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.PartnershipDeed.split(
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
              Partnership Deed*
            </label>
            <p className="cursor-pointer" onClick={() => setPartner(!partner)}>
              <AiFillEdit />
            </p>
            {partner && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setPartnershipDeed(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editBusinessLoanLead(e, "PartnershipDeed");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("TrueCopyBoardResolution") && (
              <img
                src={`https://api.solutionsathee.com/${popupdata.TrueCopyBoardResolution.split(
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
              True Copy Memorandum*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setMemorandom(!memorandom)}
            >
              <AiFillEdit />
            </p>
            {memorandom && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setTrueCopyBoardResolution(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editBusinessLoanLead(e, "TrueCopyBoardResolution");
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

export default Business;