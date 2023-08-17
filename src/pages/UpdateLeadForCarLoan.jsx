
import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {AiFillEdit}  from 'react-icons/ai';
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Car = () => {
  const tokenData = localStorage.getItem("token");
  const token = JSON.parse(tokenData).usertoken;
  const location = useLocation();
  const {
    state: { serviceID },
  } = location;
  const [clientData, setClientData] = useState("");
  const [client, setClient] = useState("");
  const [LoanAmount, setLoanAmount] = useState("");
  const [Selectclient, setSelectClient] = useState("Select a client");
  const [SalariedIdentityProof, setSalariedIdentityProof] = useState(null);
  const [SalariedAddressProof, setSalariedAddressProof] = useState(null);
  const [SalariedAgeProof, setSalariedAgeProof] = useState(null);
  const [SalariedBankStatement, setSalariedBankStatement] = useState(null);
  const [SalariedProofOfIncome, setSalariedProofOfIncome] = useState(null);
  const [
    SalariedSignatureVerificationProof,
    setSalariedSignatureVerificationProof,
  ] = useState(null);
  const [SalariedProformaInvoice, setSalariedProformaInvoice] = useState(null);
  const [SelfEmployedIdentityProof, setSelfEmployedIdentityProof] =
    useState(null);
  const [SelfEmployeeAddressProof, setSelfEmployeeAddressProof] =
    useState(null);
  const [SelfEmployeeAgeProof, setSelfEmployeeAgeProof] = useState(null);
  const [SelfEmployeeBankStatement, setSelfEmployeeBankStatement] =
    useState(null);
  const [SelfEmployeeBusinessOwnership, setSelfEmployeeBusinessOwnership] =
    useState(null);
  const [SelfEmployeeProofOIncome, setSelfEmployeeProofOIncome] =
    useState(null);
  const [
    SelfEmployeeSignatureVerification,
    setSelfEmployeeSignatureVerification,
  ] = useState(null);
  const [SelfEmployeeProformaInvoice, setSelfEmployeeProformaInvoice] =
    useState(null);
  const [selfEmpPreform, setSelfEmpPreform] = useState(false);
  const [selfEmpSignature, setSelfEmpSignature] = useState(false);
  const [selfEmpIncome, setSelfEmpIncome] = useState(false);
  const [selfEmpBns, setSelfEmpBns] = useState(false);
  const [selfEmpBnk, setSelfEmpBnk] = useState(false);
  const [selfEmpAge, setSelfEmpAge] = useState(false);
  const [selfEmpAdd, setSelfEmpAdd] = useState(false);
  const [selfIndentity, setSelfIndentity] = useState(false);
  const [salariedPPffInvoice, setSalariedPPffInvoice] = useState(false);
  const [salariedPSignature, setSalariedSignature] = useState(false);
  const [salariedPIncome, setSalariedIncome] = useState(false);
  const [salariedBnk, setSalariedBnk] = useState(false);
  const [salariedAge, setSalariedAge] = useState(false);
  const [salariedAddPff, setSalariedAddPff] = useState(false);
  const [salaryProofId, setSalaryProofId] = useState(false);
  const [loading, setLoading] = useState(false);
  const [popupdata, setpopupdata] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    try {
      axios({
        method: "get",
        url: `https://api.solutionsathee.com/api/v1/crm/getcarloanbyid?carLoanId=${serviceID}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setpopupdata(res.data.response);
      });
    } catch (error) {
    }
  }, [serviceID, loading]);

  const editCarLoanLead = async (e, fieldToEdit) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("leadId", serviceID);
      formData.append("fieldToEdit", fieldToEdit);
      formData.append("SalariedIdentityProof", SalariedIdentityProof);
      formData.append("SalariedAddressProof", SalariedAddressProof);
      formData.append("SalariedAgeProof", SalariedAgeProof);
      formData.append("SalariedBankStatement", SalariedBankStatement);
      formData.append("SalariedProofOfIncome", SalariedProofOfIncome);
      formData.append(
        "SalariedSignatureVerificationProof",
        SalariedSignatureVerificationProof
      );
      formData.append("SalariedProformaInvoice", SalariedProformaInvoice);
      formData.append("SelfEmployedIdentityProof", SelfEmployedIdentityProof);
      formData.append("SelfEmployeeAddressProof", SelfEmployeeAddressProof);
      formData.append("SelfEmployeeAgeProof", SelfEmployeeAgeProof);
      formData.append("SelfEmployeeBankStatement", SelfEmployeeBankStatement);
      formData.append(
        "SelfEmployeeBusinessOwnership",
        SelfEmployeeBusinessOwnership
      );
      formData.append("SelfEmployeeProofOIncome", SelfEmployeeProofOIncome);
      formData.append(
        "SelfEmployeeSignatureVerification",
        SelfEmployeeSignatureVerification
      );
      formData.append(
        "SelfEmployeeProformaInvoice",
        SelfEmployeeProformaInvoice
      );

      const editedResponse = await axios({
        method: "patch",
        url: "https://api.solutionsathee.com/api/v1/crm/updatecarloan",
        data: formData,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (editedResponse.data.status) {
        setLoading(false);
        toast.success("Updated Successfuly", {
          position: toast.POSITION.TOP_RIGHT })
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
      < div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
    <div className="flex justify-center items-center">
      <form className="w-full max-w-lg">
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
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              Client Type*
            </label>
            <div className="relative">
              <select
                className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                onChange={(e) => {
                  setSelectClient(e.target.value);
                }}
              >
                <option value="Select a client" selected>
                  Select a client
                </option>
                <option key="" value="Salaried">
                  Salaried
                </option>
                <option key="" value="Self Employed">
                  Self Employed
                </option>
              </select>
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
        {Selectclient === "Select a client" ? (
          ""
        ) : (
          <div>
            {Selectclient === "Salaried" ? (
              <div>
                <h3 className="my-5 block uppercase tracking-wide text-gray-700 text-xl underline font-bold">
                  Salaried
                </h3>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    {popupdata.hasOwnProperty("SalariedIdentityProof") && (
                      <img
                        src={`https://api.solutionsathee.com/${popupdata.SalariedIdentityProof.split(
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
                      Salaried Identity Proof*
                    </label>
                    <p
                      className="cursor-pointer"
                      onClick={() => setSalaryProofId(!salaryProofId)}
                    >
                      <AiFillEdit />
                    </p>
                    {salaryProofId && (
                      <>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-city"
                          type="file"
                          placeholder="Albuquerque"
                          onChange={(e) => {
                            setSalariedIdentityProof(e.target.files[0]);
                          }}
                        />
                        <img
                          width="24"
                          height="24"
                          src="https://img.icons8.com/material/24/submit-progress--v2.png"
                          alt="submit-progress--v2"
                          onClick={(e) => {
                            editCarLoanLead(e, "SalariedIdentityProof");
                          }}
                        />
                      </>
                    )}
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    {popupdata.hasOwnProperty("SalariedAddressProof") && (
                      <img
                        src={`https://api.solutionsathee.com/${popupdata.SalariedAddressProof.split(
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
                      Salaried Address Proof*
                    </label>
                    <p
                      className="cursor-pointer"
                      onClick={() => setSalariedAddPff(!salariedAddPff)}
                    >
                      <AiFillEdit />
                    </p>
                    {salariedAddPff && (
                      <>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-city"
                          type="file"
                          name="residence"
                          placeholder="Albuquerque"
                          onChange={(e) =>
                            setSalariedAddressProof(e.target.files[0])
                          }
                        />
                        <img
                          width="24"
                          height="24"
                          src="https://img.icons8.com/material/24/submit-progress--v2.png"
                          alt="submit-progress--v2"
                          onClick={(e) => {
                            editCarLoanLead(e, "SalariedAddressProof");
                          }}
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    {popupdata.hasOwnProperty("SalariedAgeProof") && (
                      <img
                        src={`https://api.solutionsathee.com/${popupdata.SalariedAgeProof.split(
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
                      Salaried Age Proof*
                    </label>
                    <p
                      className="cursor-pointer"
                      onClick={() => setSalariedAge(!salariedAge)}
                    >
                      <AiFillEdit />
                    </p>
                    {salariedAge && (
                      <>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-city"
                          type="file"
                          placeholder="Albuquerque"
                          onChange={(e) => {
                            setSalariedAgeProof(e.target.files[0]);
                          }}
                        />
                        <img
                          width="24"
                          height="24"
                          src="https://img.icons8.com/material/24/submit-progress--v2.png"
                          alt="submit-progress--v2"
                          onClick={(e) => {
                            editCarLoanLead(e, "SalariedAgeProof");
                          }}
                        />
                      </>
                    )}
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    {popupdata.hasOwnProperty("SalariedBankStatement") && (
                      <img
                        src={`https://api.solutionsathee.com/${popupdata.SalariedBankStatement.split(
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
                      Salaried Bank Statement*
                    </label>
                    <p
                      className="cursor-pointer"
                      onClick={() => setSalariedBnk(!salariedBnk)}
                    >
                      <AiFillEdit />
                    </p>
                    {salariedBnk && (
                      <>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-city"
                          type="file"
                          placeholder="Albuquerque"
                          onChange={(e) => {
                            setSalariedBankStatement(e.target.files[0]);
                          }}
                        />
                        <img
                          width="24"
                          height="24"
                          src="https://img.icons8.com/material/24/submit-progress--v2.png"
                          alt="submit-progress--v2"
                          onClick={(e) => {
                            editCarLoanLead(e, "SalariedBankStatement");
                          }}
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    {popupdata.hasOwnProperty("SalariedProofOfIncome") && (
                      <img
                        src={`https://api.solutionsathee.com/${popupdata.SalariedProofOfIncome.split(
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
                      Salaried Proof Of Income*
                    </label>
                    <p
                      className="cursor-pointer"
                      onClick={() => setSalariedIncome(!salariedPIncome)}
                    >
                      <AiFillEdit />
                    </p>
                    {salariedPIncome && (
                      <>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-city"
                          type="file"
                          placeholder="Albuquerque"
                          onChange={(e) => {
                            setSalariedProofOfIncome(e.target.files[0]);
                          }}
                        />
                        <img
                          width="24"
                          height="24"
                          src="https://img.icons8.com/material/24/submit-progress--v2.png"
                          alt="submit-progress--v2"
                          onClick={(e) => {
                            editCarLoanLead(e, "SalariedProofOfIncome");
                          }}
                        />
                      </>
                    )}
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    {popupdata.hasOwnProperty(
                      "SalariedSignatureVerificationProof"
                    ) && (
                      <img
                        src={`https://api.solutionsathee.com/${popupdata.SalariedSignatureVerificationProof.split(
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
                      Salaried Signature Verification Proof*
                    </label>
                    <p
                      className="cursor-pointer"
                      onClick={() => setSalariedSignature(!salariedPSignature)}
                    >
                      <AiFillEdit />
                    </p>
                    {salariedPSignature && (
                      <>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-city"
                          type="file"
                          placeholder="Albuquerque"
                          onChange={(e) => {
                            setSalariedSignatureVerificationProof(
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
                            editCarLoanLead(
                              e,
                              "SalariedSignatureVerificationProof"
                            );
                          }}
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    {popupdata.hasOwnProperty("SalariedProformaInvoice") && (
                      <img
                        src={`https://api.solutionsathee.com/${popupdata.SalariedProformaInvoice.split(
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
                      Salaried Performa Invoice*
                    </label>
                    <p
                      className="cursor-pointer"
                      onClick={() =>
                        setSalariedPPffInvoice(!salariedPPffInvoice)
                      }
                    >
                      <AiFillEdit />
                    </p>
                    {salariedPPffInvoice && (
                      <>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-city"
                          type="file"
                          placeholder="Albuquerque"
                          onChange={(e) => {
                            setSalariedProformaInvoice(e.target.files[0]);
                          }}
                        />
                        <img
                          width="24"
                          height="24"
                          src="https://img.icons8.com/material/24/submit-progress--v2.png"
                          alt="submit-progress--v2"
                          onClick={(e) => {
                            editCarLoanLead(e, "SalariedProformaInvoice");
                          }}
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="my-5 block uppercase tracking-wide text-gray-700 text-xl underline font-bold">
                  Self Employeed
                </h3>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    {popupdata.hasOwnProperty("SelfEmployedIdentityProof") && (
                      <img
                        src={`https://api.solutionsathee.com/${popupdata.SelfEmployedIdentityProof.split(
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
                      Self Employed Identity Proof*
                    </label>
                    <p
                      className="cursor-pointer"
                      onClick={() => setSelfIndentity(!selfIndentity)}
                    >
                      <AiFillEdit />
                    </p>
                    {selfIndentity && (
                      <>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-city"
                          type="file"
                          placeholder="Albuquerque"
                          onChange={(e) => {
                            setSelfEmployedIdentityProof(e.target.files[0]);
                          }}
                        />
                        <img
                          width="24"
                          height="24"
                          src="https://img.icons8.com/material/24/submit-progress--v2.png"
                          alt="submit-progress--v2"
                          onClick={(e) => {
                            editCarLoanLead(e, "SelfEmployedIdentityProof");
                          }}
                        />
                      </>
                    )}
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    {popupdata.hasOwnProperty("SelfEmployeeAddressProof") && (
                      <img
                        src={`https://api.solutionsathee.com/${popupdata.SelfEmployeeAddressProof.split(
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
                      Self Employee Address Proof*
                    </label>
                    <p
                      className="cursor-pointer"
                      onClick={() => setSelfEmpAdd(!selfEmpAdd)}
                    >
                      <AiFillEdit />
                    </p>
                    {selfEmpAdd && (
                      <>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-city"
                          type="file"
                          name="residence"
                          placeholder="Albuquerque"
                          onChange={(e) =>
                            setSelfEmployeeAddressProof(e.target.files[0])
                          }
                        />
                        <img
                          width="24"
                          height="24"
                          src="https://img.icons8.com/material/24/submit-progress--v2.png"
                          alt="submit-progress--v2"
                          onClick={(e) => {
                            editCarLoanLead(e, "SelfEmployeeAddressProof");
                          }}
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    {popupdata.hasOwnProperty("SelfEmployeeAgeProof") && (
                      <img
                        src={`https://api.solutionsathee.com/${popupdata.SelfEmployeeAgeProof.split(
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
                      Self Employee Age Proof*
                    </label>
                    <p
                      className="cursor-pointer"
                      onClick={() => setSelfEmpAge(!selfEmpAge)}
                    >
                      <AiFillEdit />
                    </p>
                    {selfEmpAge && (
                      <>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-city"
                          type="file"
                          placeholder="Albuquerque"
                          onChange={(e) => {
                            setSelfEmployeeAgeProof(e.target.files[0]);
                          }}
                        />
                        <img
                          width="24"
                          height="24"
                          src="https://img.icons8.com/material/24/submit-progress--v2.png"
                          alt="submit-progress--v2"
                          onClick={(e) => {
                            editCarLoanLead(e, "SelfEmployeeAgeProof");
                          }}
                        />
                      </>
                    )}
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    {popupdata.hasOwnProperty("SelfEmployeeBankStatement") && (
                      <img
                        src={`https://api.solutionsathee.com/${popupdata.SelfEmployeeBankStatement.split(
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
                      Self Employee Bank Statement*
                    </label>
                    <p
                      className="cursor-pointer"
                      onClick={() => setSelfEmpBnk(!selfEmpBnk)}
                    >
                      <AiFillEdit />
                    </p>
                    {selfEmpBnk && (
                      <>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-city"
                          type="file"
                          placeholder="Albuquerque"
                          onChange={(e) => {
                            setSelfEmployeeBankStatement(e.target.files[0]);
                          }}
                        />
                        <img
                          width="24"
                          height="24"
                          src="https://img.icons8.com/material/24/submit-progress--v2.png"
                          alt="submit-progress--v2"
                          onClick={(e) => {
                            editCarLoanLead(e, "SelfEmployeeBankStatement");
                          }}
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    {popupdata.hasOwnProperty(
                      "SelfEmployeeBusinessOwnership"
                    ) && (
                      <img
                        src={`https://api.solutionsathee.com/${popupdata.SelfEmployeeBusinessOwnership.split(
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
                      Self Employee Business Ownership*
                    </label>
                    <p
                      className="cursor-pointer"
                      onClick={() => setSelfEmpBns(!selfEmpBns)}
                    >
                      <AiFillEdit />
                    </p>
                    {selfEmpBns && (
                      <>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-city"
                          type="file"
                          placeholder="Albuquerque"
                          onChange={(e) => {
                            setSelfEmployeeBusinessOwnership(e.target.files[0]);
                          }}
                        />
                        <img
                          width="24"
                          height="24"
                          src="https://img.icons8.com/material/24/submit-progress--v2.png"
                          alt="submit-progress--v2"
                          onClick={(e) => {
                            editCarLoanLead(e, "SelfEmployeeBusinessOwnership");
                          }}
                        />
                      </>
                    )}
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    {popupdata.hasOwnProperty("SelfEmployeeProofOIncome") && (
                      <img
                        src={`https://api.solutionsathee.com/${popupdata.SelfEmployeeProofOIncome.split(
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
                      Self Employee Proof Of Income*
                    </label>
                    <p
                      className="cursor-pointer"
                      onClick={() => setSelfEmpIncome(!selfEmpIncome)}
                    >
                      <AiFillEdit />
                    </p>
                    {selfEmpIncome && (
                      <>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-city"
                          type="file"
                          placeholder="Albuquerque"
                          onChange={(e) => {
                            setSelfEmployeeProofOIncome(e.target.files[0]);
                          }}
                        />
                        <img
                          width="24"
                          height="24"
                          src="https://img.icons8.com/material/24/submit-progress--v2.png"
                          alt="submit-progress--v2"
                          onClick={(e) => {
                            editCarLoanLead(e, "SelfEmployeeProofOIncome");
                          }}
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    {popupdata.hasOwnProperty(
                      "SelfEmployeeSignatureVerification"
                    ) && (
                      <img
                        src={`https://api.solutionsathee.com/${popupdata.SelfEmployeeSignatureVerification.split(
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
                      Self Employee Signature Verification*
                    </label>
                    <p
                      className="cursor-pointer"
                      onClick={() => setSelfEmpSignature(!selfEmpSignature)}
                    >
                      <AiFillEdit />
                    </p>
                    {selfEmpSignature && (
                      <>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-city"
                          type="file"
                          placeholder="Albuquerque"
                          onChange={(e) => {
                            setSelfEmployeeSignatureVerification(
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
                            editCarLoanLead(e, "SelfEmployeeSignatureVerification");
                          }}
                        />
                      </>
                    )}
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    {popupdata.hasOwnProperty(
                      "SelfEmployeeProformaInvoice"
                    ) && (
                      <img
                        src={`https://api.solutionsathee.com/${popupdata.SelfEmployeeProformaInvoice.split(
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
                      Self Employee Preform Invoice*
                    </label>
                    <p
                      className="cursor-pointer"
                      onClick={() => setSelfEmpPreform(!selfEmpPreform)}
                    >
                      <AiFillEdit />
                    </p>
                    {selfEmpPreform && (
                      <>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-city"
                          type="file"
                          placeholder="Albuquerque"
                          onChange={(e) => {
                            setSelfEmployeeProformaInvoice(e.target.files[0]);
                          }}
                        />
                        <img
                          width="24"
                          height="24"
                          src="https://img.icons8.com/material/24/submit-progress--v2.png"
                          alt="submit-progress--v2"
                          onClick={(e) => {
                            editCarLoanLead(e, "SelfEmployeeProformaInvoice");
                          }}
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </form>
      <ToastContainer />
    </div>
    </div>
    </main>
      </div>
    </div>
  );
};

export default Car;