import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {AiFillEdit}  from 'react-icons/ai';
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Mortgage = () => {
  const tokenData = localStorage.getItem("token");
  const token = JSON.parse(tokenData).usertoken;
  const location = useLocation();
  const {
    state: { serviceID },
  } = location;
  const [clientData, setClientData] = useState("");
  const [LoanAmount, setLoanAmount] = useState("");
  const [client, setClient] = useState("");
  const [latestSalarySlip, setlatestSalarySlip] = useState(null);
  const [threeMonthsBankStatement, setthreeMonthsBankStatement] =
    useState(null);
  const [panCard, setpanCard] = useState(null);
  const [idProof, setidProof] = useState(null);
  const [addressProof, setaddressProof] = useState(null);
  const [
    documentOfThePropertyTobeMortgage,
    setdocumentOfThePropertyTobeMortgage,
  ] = useState(null);
  const [itReturns, setitReturns] = useState(null);
  const [popupdata, setpopupdata] = useState("");
  const [rtns, setRtns] = useState(false);
  const [lateSalary, setLateSalary] = useState(false);
  const [threeMonths, setThreeMonths] = useState(false);
  const [pnCd, setPnCd] = useState(false);
  const [pffId, setPffId] = useState(false);
  const [adPff, setAdPff] = useState(false);
  const [doc, setDoc] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);


  useEffect(() => {
    try {
      axios({
        method: "get",
        url: `https://api.solutionsathee.com/api/v1/crm/getmortgageloanbyid?mortgageLoanId=${serviceID}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setpopupdata(res.data.response);
      });
    } catch (error) {
    }
  }, [serviceID, loading]);


  const editMortgageLoanLead = async (e, fieldToEdit) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("leadId", serviceID);
      formData.append("fieldToEdit", fieldToEdit);
      formData.append("latestSalarySlip", latestSalarySlip);
      formData.append("threeMonthsBankStatement", threeMonthsBankStatement);
      formData.append("panCard", panCard);
      formData.append("idProof", idProof);
      formData.append("addressProof", addressProof);
      formData.append(
        "documentOfThePropertyTobeMortgage",
        documentOfThePropertyTobeMortgage
      );
      formData.append("itReturns", itReturns);

      const editedResponse = await axios({
        method: "patch",
        url: "https://api.solutionsathee.com/api/v1/crm/updatemortgageloan",
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
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              {popupdata && (
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
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
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
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        {popupdata.hasOwnProperty("itReturns") && (
                          <img
                            src={`https://api.solutionsathee.com/${popupdata.itReturns
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
                          It Returns*
                        </label>
                        <p className="cursor-pointer" onClick={() => setRtns(!rtns)}>
                          <AiFillEdit />
                        </p>
                        {rtns && (
                          <>
                            <input
                              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-city"
                              type="file"
                              placeholder="Albuquerque"
                              onChange={(e) => {
                                setitReturns(e.target.files[0]);
                              }}
                            />
                            <img
                              width="24"
                              height="24"
                              src="https://img.icons8.com/material/24/submit-progress--v2.png"
                              alt="submit-progress--v2"
                              onClick={(e) => {
                                editMortgageLoanLead(e, "itReturns");
                              }}
                            />
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        {popupdata.hasOwnProperty("latestSalarySlip") && (
                          <img
                            src={`https://api.solutionsathee.com/${popupdata.latestSalarySlip
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
                          Latest Salary Slip*
                        </label>
                        <p
                          className="cursor-pointer"
                          onClick={() => setLateSalary(!lateSalary)}
                        >
                          <AiFillEdit />
                        </p>
                        {lateSalary && (
                          <>
                            <input
                              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-city"
                              type="file"
                              placeholder="Albuquerque"
                              onChange={(e) => {
                                setlatestSalarySlip(e.target.files[0]);
                              }}
                            />
                            <img
                              width="24"
                              height="24"
                              src="https://img.icons8.com/material/24/submit-progress--v2.png"
                              alt="submit-progress--v2"
                              onClick={(e) => {
                                editMortgageLoanLead(e, "latestSalarySlip");
                              }}
                            />
                          </>
                        )}
                      </div>

                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        {popupdata.hasOwnProperty("threeMonthsBankStatement") && (
                          <img
                            src={`https://api.solutionsathee.com/${popupdata.threeMonthsBankStatement
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
                          Three Months Bank Statement*
                        </label>
                        <p
                          className="cursor-pointer"
                          onClick={() => setThreeMonths(!threeMonths)}
                        >
                          <AiFillEdit />
                        </p>
                        {threeMonths && (
                          <>
                            <input
                              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-zip"
                              type="file"
                              placeholder=""
                              onChange={(e) => {
                                setthreeMonthsBankStatement(e.target.files[0]);
                              }}
                            />
                            <img
                              width="24"
                              height="24"
                              src="https://img.icons8.com/material/24/submit-progress--v2.png"
                              alt="submit-progress--v2"
                              onClick={(e) => {
                                editMortgageLoanLead(e, "threeMonthsBankStatement");
                              }}
                            />
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        {popupdata.hasOwnProperty("panCard") && (
                          <img
                            src={`https://api.solutionsathee.com/${popupdata.panCard
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
                          Pan Card*
                        </label>
                        <p className="cursor-pointer" onClick={() => setPnCd(!pnCd)}>
                          <AiFillEdit />
                        </p>
                        {pnCd && (
                          <>
                            <input
                              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-city"
                              type="file"
                              placeholder="Albuquerque"
                              onChange={(e) => {
                                setpanCard(e.target.files[0]);
                              }}
                            />
                            <img
                              width="24"
                              height="24"
                              src="https://img.icons8.com/material/24/submit-progress--v2.png"
                              alt="submit-progress--v2"
                              onClick={(e) => {
                                editMortgageLoanLead(e, "panCard");
                              }}
                            />
                          </>
                        )}
                      </div>
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        {popupdata.hasOwnProperty("idProof") && (
                          <img
                            src={`https://api.solutionsathee.com/${popupdata.idProof
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
                          Id Proof*
                        </label>
                        <p className="cursor-pointer" onClick={() => setPffId(!pffId)}>
                          <AiFillEdit />
                        </p>
                        {pffId && (
                          <>
                            <input
                              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-city"
                              type="file"
                              placeholder="Albuquerque"
                              onChange={(e) => {
                                setidProof(e.target.files[0]);
                              }}
                            />
                            <img
                              width="24"
                              height="24"
                              src="https://img.icons8.com/material/24/submit-progress--v2.png"
                              alt="submit-progress--v2"
                              onClick={(e) => {
                                editMortgageLoanLead(e, "idProof");
                              }}
                            />
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        {popupdata.hasOwnProperty("addressProof") && (
                          <img
                            src={`https://api.solutionsathee.com/${popupdata.addressProof
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
                          Address Proof*
                        </label>
                        <p className="cursor-pointer" onClick={() => setAdPff(!adPff)}>
                          <AiFillEdit />
                        </p>
                        {adPff && (
                          <>
                            <input
                              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-city"
                              type="file"
                              placeholder="Albuquerque"
                              onChange={(e) => {
                                setaddressProof(e.target.files[0]);
                              }}
                            />
                            <img
                              width="24"
                              height="24"
                              src="https://img.icons8.com/material/24/submit-progress--v2.png"
                              alt="submit-progress--v2"
                              onClick={(e) => {
                                editMortgageLoanLead(e, "addressProof");
                              }}
                            />
                          </>
                        )}
                      </div>
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        {popupdata.hasOwnProperty(
                          "documentOfThePropertyTobeMortgage"
                        ) && (
                            <img
                              src={`https://api.solutionsathee.com/${popupdata.documentOfThePropertyTobeMortgage
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
                          Document Of The Property To Be Mortgage*
                        </label>
                        <p className="cursor-pointer" onClick={() => setDoc(!doc)}>
                          <AiFillEdit />
                        </p>
                        {doc && (
                          <>
                            <input
                              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-city"
                              type="file"
                              placeholder="Albuquerque"
                              onChange={(e) => {
                                setdocumentOfThePropertyTobeMortgage(e.target.files[0]);
                              }}
                            />
                            <img
                              width="24"
                              height="24"
                              src="https://img.icons8.com/material/24/submit-progress--v2.png"
                              alt="submit-progress--v2"
                              onClick={(e) => {
                                editMortgageLoanLead(
                                  e,
                                  "documentOfThePropertyTobeMortgage"
                                );
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

export default Mortgage;
