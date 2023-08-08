
import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {AiFillEdit}  from 'react-icons/ai';
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Food = () => {
  const tokenData = localStorage.getItem("token");
  const token = JSON.parse(tokenData).usertoken;
  const location = useLocation();
  const {
    state: { serviceID },
  } = location;
  const [clientData, setClientData] = useState("");
  const [LoanAmount, setLoanAmount] = useState("");
  const [client, setClient] = useState("");
  const [NRMOfLisence, setNRMOfLisence] = useState(null);
  const [NewRegistration, setNewRegistration] = useState(null);
  const [ProprietorshipDeclaration, setProprietorshipDeclaration] =
    useState(null);
  const [CSGWNocNoted, setCSGWNocNoted] = useState(null);
  const [OnlineSaleOfAlcohol, setOnlineSaleOfAlcohol] = useState(null);
  const [AdditionalDocumentForExpoters, setAdditionalDocumentForExpoters] =
    useState(null);
  const [SampleFoodRecallPlanAndGuide, setSampleFoodRecallPlanAndGuide] =
    useState(null);
  const [BISLiscense, setBISLiscense] = useState(null);
  const [Repacker, setRepacker] = useState(null);
  const [repackertoggle, setRepackertoggle] = useState(false);
  const [bis, setBIS] = useState(false);
  const [recall, setRecall] = useState(false);
  const [expoters, setExpoters] = useState(false);
  const [alcohol, setAlcohol] = useState(false);
  const [onlinesale, setOnlinesale] = useState(false);
  const [CSGWNoc, setCSGWNoc] = useState(false);
  const [proprietorship, setProprietorship] = useState(false);
  const [newregister, setNewregister] = useState(false);
  const [nrm, setNrm] = useState(false);
  const [popupdata, setpopupdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    try {
      axios({
        method: "get",
        url: `http://localhost:5000/api/v1/crm/getfoodlisencebyid?foodlisenceById=${serviceID}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setpopupdata(res.data.response);
      });
    } catch (error) {
    }
  }, [serviceID, loading]);

  const editFoodLisenceLead = async (e, fieldToEdit) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("leadId", serviceID);
      formData.append("fieldToEdit", fieldToEdit);
      formData.append("NRMOfLisence", NRMOfLisence);
      formData.append("NewRegistration", NewRegistration);
      formData.append("ProprietorshipDeclaration", ProprietorshipDeclaration);
      formData.append("CSGWNocNoted", CSGWNocNoted);
      formData.append("OnlineSaleOfAlcohol", OnlineSaleOfAlcohol);
      formData.append("AdditionalDocumentForExpoters", AdditionalDocumentForExpoters);
      formData.append("SampleFoodRecallPlanAndGuide", SampleFoodRecallPlanAndGuide);
      formData.append("BISLiscense", BISLiscense);
      formData.append("Repacker", Repacker);

      const editedResponse = await axios({
        method: "patch",
        url: `http://localhost:5000/api/v1/crm/updatefoodlisence`,
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
            {popupdata.hasOwnProperty("NRMOfLisence") && (
              <img
                src={`http://localhost:5000/${popupdata.NRMOfLisence.split(
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
              NRM Of Lisence*
            </label>
            <p className="cursor-pointer" onClick={() => setNrm(!nrm)}>
              <AiFillEdit />
            </p>
            {nrm && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setNRMOfLisence(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editFoodLisenceLead(e, "NewRegistration");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("NewRegistration") && (
              <img
                src={`http://localhost:5000/${popupdata.NewRegistration.split(
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
              New Registration*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setNewregister(!newregister)}
            >
              <AiFillEdit />
            </p>
            {newregister && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="file"
                  placeholder=""
                  onChange={(e) => {
                    setNewRegistration(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editFoodLisenceLead(e, "NewRegistration");
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("ProprietorshipDeclaration") && (
              <>
                <img
                  src={`http://localhost:5000/${popupdata.ProprietorshipDeclaration.split(
                    "public"
                  )[1].substring(1)}`}
                  alt=""
                  srcset=""
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editFoodLisenceLead(e, "ProprietorshipDeclaration");
                  }}
                />
              </>
            )}
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Proprietorship Declaration*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setProprietorship(!proprietorship)}
            >
              <AiFillEdit />
            </p>
            {proprietorship && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setProprietorshipDeclaration(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editFoodLisenceLead(e, "ProprietorshipDeclaration");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("CSGWNocNoted") && (
              <img
                src={`http://localhost:5000/${popupdata.CSGWNocNoted.split(
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
              CSGWNoc Noted*
            </label>
            <p className="cursor-pointer" onClick={() => setCSGWNoc(!CSGWNoc)}>
              <AiFillEdit />
            </p>
            {CSGWNoc && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="file"
                  placeholder=""
                  onChange={(e) => {
                    setCSGWNocNoted(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editFoodLisenceLead(e, "CSGWNocNoted");
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("OnlineSaleOfAlcohol") && (
              <img
                src={`http://localhost:5000/${popupdata.OnlineSaleOfAlcohol.split(
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
              Online Sale Of Alcohol*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setOnlinesale(!onlinesale)}
            >
              <AiFillEdit />
            </p>
            {onlinesale && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setOnlineSaleOfAlcohol(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editFoodLisenceLead(e, "OnlineSaleOfAlcohol");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("OnlineSaleOfAlcohol") && (
              <img
                src={`http://localhost:5000/${popupdata.OnlineSaleOfAlcohol.split(
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
              Online Sale Of Alcohol*
            </label>
            <p className="cursor-pointer" onClick={() => setAlcohol(!alcohol)}>
              <AiFillEdit />
            </p>
            {alcohol && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="file"
                  placeholder=""
                  onChange={(e) => {
                    setOnlineSaleOfAlcohol(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editFoodLisenceLead(e, "OnlineSaleOfAlcohol");
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("AdditionalDocumentForExpoters") && (
              <img
                src={`http://localhost:5000/${popupdata.AdditionalDocumentForExpoters.split(
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
              Additional Document For Expoters*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setExpoters(!expoters)}
            >
              <AiFillEdit />
            </p>
            {expoters && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setAdditionalDocumentForExpoters(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editFoodLisenceLead(e, "AdditionalDocumentForExpoters");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("SampleFoodRecallPlanAndGuide") && (
              <img
                src={`http://localhost:5000/${popupdata.SampleFoodRecallPlanAndGuide.split(
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
              Sample Food Recall Plan And Guide*
            </label>
            <p className="cursor-pointer" onClick={() => setRecall(!recall)}>
              <AiFillEdit />
            </p>
            {recall && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="file"
                  placeholder=""
                  onChange={(e) => {
                    setSampleFoodRecallPlanAndGuide(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editFoodLisenceLead(e, "SampleFoodRecallPlanAndGuide");
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("BISLiscense") && (
              <img
                src={`http://localhost:5000/${popupdata.BISLiscense.split(
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
              BIS Liscense*
            </label>
            <p className="cursor-pointer" onClick={() => setBIS(!bis)}>
              <AiFillEdit />
            </p>
            {bis && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setBISLiscense(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editFoodLisenceLead(e, "BISLiscense");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("Repacker") && (
              <img
                src={`http://localhost:5000/${popupdata.Repacker.split(
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
              Repacker*
            </label>
            <p
              className="cursor-pointer"
              onClick={() => setRepackertoggle(!repackertoggle)}
            >
              <AiFillEdit />
            </p>
            {repackertoggle && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="file"
                  placeholder=""
                  onChange={(e) => {
                    setRepacker(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editFoodLisenceLead(e, "Repacker");
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

export default Food;