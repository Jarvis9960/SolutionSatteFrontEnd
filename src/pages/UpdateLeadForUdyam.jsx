import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { AiFillEdit } from "react-icons/ai";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Udyam = () => {
  const tokenData = localStorage.getItem("token");
  const token = JSON.parse(tokenData).usertoken;
  const location = useLocation();
  const {
    state: { serviceID },
  } = location;
  const [clientData, setClientData] = useState("");
  const [LoanAmount, setLoanAmount] = useState("");
  const [client, setClient] = useState("");
  const [AdharCard, setAdharCard] = useState(null);
  const [PanCard, setPanCard] = useState(null);
  const [BankAccountDetails, setBankAccountDetails] = useState(null);
  const [BusinessAdress, setBusinessAdress] = useState(null);
  const [DetailsOfBusinessActivites, setDetailsOfBusinessActivites] =
    useState(null);
  const [InformationOfTheInvestment, setInformationOfTheInvestment] =
    useState(null);
  const [InformationOfTheTurnOver, setInformationOfTheTurnOver] =
    useState(null);
  const [DuplicateBillOfSale, setDuplicateBillOfSaler] = useState(null);
  const [adhar, setAadhar] = useState(false);
  const [pan, setPan] = useState(false);
  const [bankAccount, setBankAccount] = useState(false);
  const [business, setBusiness] = useState(false);
  const [activites, setActivites] = useState(false);
  const [investment, setInvestment] = useState(false);
  const [turnOver, setTurnOver] = useState(false);
  const [bill, setBill] = useState(false);
  const [popupdata, setpopupdata] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    try {
      axios({
        method: "get",
        url: `http://localhost:5000/api/v1/crm/getudyamcertificatebyid?UdyamCertificateId=${serviceID}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setpopupdata(res.data.response);
      });
    } catch (error) {}
  }, [serviceID, loading]);

  const editUdyamCertificateLead = async (e, fieldToEdit) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("leadId", serviceID);
      formData.append("fieldToEdit", fieldToEdit);
      formData.append("AdharCard", AdharCard);
      formData.append("PanCard", PanCard);
      formData.append("BankAccountDetails", BankAccountDetails);
      formData.append("businessAdress", BusinessAdress);
      formData.append("DetailsOfBusinessActivites", DetailsOfBusinessActivites);
      formData.append("InformationOfTheInvestment", InformationOfTheInvestment);
      formData.append("InformationOfTheTurnOver", InformationOfTheTurnOver);
      formData.append("DuplicateBillOfSale", DuplicateBillOfSale);

      const editedResponse = await axios({
        method: "patch",
        url: "http://localhost:5000/api/v1/crm/updateudyamcertificate",
        data: formData,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (editedResponse.data.status) {
        setLoading(false);
        toast.success("Updated Successfuly", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      setLoading(false);
      toast.error("Failed to Update", {
        position: toast.POSITION.TOP_RIGHT,
      });
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
                    {popupdata.hasOwnProperty("AdharCard") && (
                      <img
                        src={`http://localhost:5000/${popupdata.AdharCard.split(
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
                      Aadhar Card*
                    </label>
                    <p
                      className="cursor-pointer"
                      onClick={() => setAadhar(!adhar)}
                    >
                      <AiFillEdit />
                    </p>
                    {adhar && (
                      <>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-city"
                          type="file"
                          placeholder="Albuquerque"
                          onChange={(e) => {
                            setAdharCard(e.target.files[0]);
                          }}
                        />
                        <img
                          width="24"
                          height="24"
                          src="https://img.icons8.com/material/24/submit-progress--v2.png"
                          alt="submit-progress--v2"
                          onClick={(e) => {
                            editUdyamCertificateLead(e, "AdharCard");
                          }}
                        />
                      </>
                    )}
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    {popupdata.hasOwnProperty("PanCard") && (
                      <img
                        src={`http://localhost:5000/${popupdata.PanCard.split(
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
                      Pan Card*
                    </label>
                    <p className="cursor-pointer" onClick={() => setPan(!pan)}>
                      <AiFillEdit />
                    </p>
                    {pan && (
                      <>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-zip"
                          type="file"
                          placeholder=""
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
                            editUdyamCertificateLead(e, "PanCard");
                          }}
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    {popupdata.hasOwnProperty("BankAccountDetails") && (
                      <img
                        src={`http://localhost:5000/${popupdata.BankAccountDetails.split(
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
                      Bank Account Details*
                    </label>
                    <p
                      className="cursor-pointer"
                      onClick={() => setBankAccount(!bankAccount)}
                    >
                      <AiFillEdit />
                    </p>
                    {bankAccount && (
                      <>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-city"
                          type="file"
                          placeholder="Albuquerque"
                          onChange={(e) => {
                            setBankAccountDetails(e.target.files[0]);
                          }}
                        />
                        <img
                          width="24"
                          height="24"
                          src="https://img.icons8.com/material/24/submit-progress--v2.png"
                          alt="submit-progress--v2"
                          onClick={(e) => {
                            editUdyamCertificateLead(e, "BankAccountDetails");
                          }}
                        />
                      </>
                    )}
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-zip"
                    >
                      Business Address*
                    </label>
                    {popupdata && (
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-zip"
                        type="text"
                        placeholder=""
                        onChange={(e) => {
                          setBusinessAdress(e.target.value);
                        }}
                        defaultValue={popupdata.BusinessAdress}
                      />
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    {popupdata.hasOwnProperty("DetailsOfBusinessActivites") && (
                      <img
                        src={`http://localhost:5000/${popupdata.DetailsOfBusinessActivites.split(
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
                      Details Of Business Activites*
                    </label>
                    <p
                      className="cursor-pointer"
                      onClick={() => setActivites(!activites)}
                    >
                      <AiFillEdit />
                    </p>
                    {activites && (
                      <>
                        {" "}
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-city"
                          type="file"
                          placeholder="Albuquerque"
                          onChange={(e) => {
                            setDetailsOfBusinessActivites(e.target.files[0]);
                          }}
                        />
                        <img
                          width="24"
                          height="24"
                          src="https://img.icons8.com/material/24/submit-progress--v2.png"
                          alt="submit-progress--v2"
                          onClick={(e) => {
                            editUdyamCertificateLead(
                              e,
                              "DetailsOfBusinessActivites"
                            );
                          }}
                        />
                      </>
                    )}
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    {popupdata.hasOwnProperty("InformationOfTheInvestment") && (
                      <img
                        src={`http://localhost:5000/${popupdata.InformationOfTheInvestment.split(
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
                      Information Of The Investment*
                    </label>
                    <p
                      className="cursor-pointer"
                      onClick={() => setInvestment(!investment)}
                    >
                      <AiFillEdit />
                    </p>
                    {investment && (
                      <>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-zip"
                          type="file"
                          placeholder=""
                          onChange={(e) => {
                            setInformationOfTheInvestment(e.target.files[0]);
                          }}
                        />
                        <img
                          width="24"
                          height="24"
                          src="https://img.icons8.com/material/24/submit-progress--v2.png"
                          alt="submit-progress--v2"
                          onClick={(e) => {
                            editUdyamCertificateLead(
                              e,
                              "InformationOfTheInvestment"
                            );
                          }}
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    {popupdata.hasOwnProperty("InformationOfTheTurnOver") && (
                      <img
                        src={`http://localhost:5000/${popupdata.InformationOfTheTurnOver.split(
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
                      Information Of The TurnOver*
                    </label>
                    <p
                      className="cursor-pointer"
                      onClick={() => setTurnOver(!turnOver)}
                    >
                      <AiFillEdit />
                    </p>
                    {turnOver && (
                      <>
                        {" "}
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-city"
                          type="file"
                          placeholder="Albuquerque"
                          onChange={(e) => {
                            setInformationOfTheTurnOver(e.target.files[0]);
                          }}
                        />
                        <img
                          width="24"
                          height="24"
                          src="https://img.icons8.com/material/24/submit-progress--v2.png"
                          alt="submit-progress--v2"
                          onClick={(e) => {
                            editUdyamCertificateLead(
                              e,
                              "InformationOfTheTurnOver"
                            );
                          }}
                        />
                      </>
                    )}
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    {popupdata.hasOwnProperty("DuplicateBillOfSale") && (
                      <img
                        src={`http://localhost:5000/${popupdata.DuplicateBillOfSale.split(
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
                      Duplicate Bill Of Saler*
                    </label>
                    <p
                      className="cursor-pointer"
                      onClick={() => setBill(!bill)}
                    >
                      <AiFillEdit />
                    </p>
                    {bill && (
                      <>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-zip"
                          type="file"
                          placeholder=""
                          onChange={(e) => {
                            setDuplicateBillOfSaler(e.target.files[0]);
                          }}
                        />
                        <img
                          width="24"
                          height="24"
                          src="https://img.icons8.com/material/24/submit-progress--v2.png"
                          alt="submit-progress--v2"
                          onClick={(e) => {
                            editUdyamCertificateLead(e, "DuplicateBillOfSale");
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

export default Udyam;
