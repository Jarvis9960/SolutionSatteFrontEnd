
import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import {AiFillEdit}  from 'react-icons/ai';
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Shop = () => {
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
  const [AdharCard, setAdharCard] = useState(null);
  const [DetailsOfBusiness, setDetailsOfBusiness] = useState(null);
  const [NatureOfBusiness, setNatureOfBusiness] = useState(null);
  const [ElectricityBill, setElectricityBill] = useState(null);
  const [RentAgreement, setRentAgreement] = useState(null);
  const [MOA, setMOA] = useState(null);
  const [AON, setAON] = useState(null);
  const [CIN, setCIN] = useState(null);
  const [pncd, setPnCd] = useState(false);
  const [adhar, setAdhar] = useState(false);
  const [business, setBusiness] = useState(false);
  const [nature, setNature] = useState(false);
  const [bill, setBill] = useState(false);
  const [rent, setRent] = useState(false);
  const [mmm, setMmm] = useState(false);
  const [aaa, setAaa] = useState(false);
  const [ccc, setCcc] = useState(false);
  const [popupdata, setpopupdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    try {
      axios({
        method: "get",
        url: `http://localhost:5000/api/v1/crm/getshopactbyid?shopActId=${serviceID}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setpopupdata(res.data.response);
      });
    } catch (error) {
    }
  }, [serviceID, loading]);

  const editShopActLead = async (e, fieldToEdit) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("leadId", serviceID);
      formData.append("fieldToEdit", fieldToEdit);
      formData.append("PanCard", PanCard);
      formData.append("AdharCard", AdharCard);
      formData.append("detailsOfBusiness", DetailsOfBusiness);
      formData.append("natureOfBusiness", NatureOfBusiness);
      formData.append("ElectricityBill", ElectricityBill);
      formData.append("RentAgreement", RentAgreement);
      formData.append("MOA", MOA);
      formData.append("AON", AON);
      formData.append("CIN", CIN);

      const editedResponse = await axios({
        method: "patch",
        url: "http://localhost:5000/api/v1/crm/updateshopact",
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
              for="grid-city"
            >
              Pan Card*
            </label>
            <p className="cursor-pointer" onClick={() => setPnCd(!pncd)}>
              <AiFillEdit />
            </p>
            {pncd && (
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
                    editShopActLead(e, "PanCard");
                  }}
                />
              </>
            )}
          </div>
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
              for="grid-zip"
            >
              Adhar Card*
            </label>
            <p className="cursor-pointer" onClick={() => setAdhar(!adhar)}>
              <AiFillEdit />
            </p>
            {adhar && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="file"
                  placeholder=""
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
                    editShopActLead(e, "AdharCard");
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Details Of Business*
            </label>
            {popupdata && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="text"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setDetailsOfBusiness(e.target.value);
                  }}
                  defaultValue={popupdata.DetailsOfBusiness}
                  readOnly
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Nature Of Business*
            </label>
            {popupdata && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="text"
                  placeholder=""
                  onChange={(e) => {
                    setNatureOfBusiness(e.target.value);
                  }}
                  defaultValue={popupdata.NatureOfBusiness}
                  readOnly
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("ElectricityBill") && (
              <img
                src={`http://localhost:5000/${popupdata.ElectricityBill.split(
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
              Electricity Bill*
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
                    setElectricityBill(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editShopActLead(e, "ElectricityBill");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("RentAgreement") && (
              <img
                src={`http://localhost:5000/${popupdata.RentAgreement.split(
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
              Rent Agreement*
            </label>
            <p className="cursor-pointer" onClick={() => setRent(!rent)}>
              <AiFillEdit />
            </p>
            {rent && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="file"
                  placeholder=""
                  onChange={(e) => {
                    setRentAgreement(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editShopActLead(e, "RentAgreement");
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("MOA") && (
              <img
                src={`http://localhost:5000/${popupdata.MOA.split(
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
              MOA*
            </label>
            <p className="cursor-pointer" onClick={() => setMmm(!mmm)}>
              <AiFillEdit />
            </p>
            {mmm && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setMOA(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editShopActLead(e, "MOA");
                  }}
                />
              </>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("AON") && (
              <img
                src={`http://localhost:5000/${popupdata.AON.split(
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
              AON*
            </label>
            <p className="cursor-pointer" onClick={() => setAaa(!aaa)}>
              <AiFillEdit />
            </p>
            {aaa && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="file"
                  placeholder=""
                  onChange={(e) => {
                    setAON(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editShopActLead(e, "AON");
                  }}
                />
              </>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            {popupdata.hasOwnProperty("CIN") && (
              <img
                src={`http://localhost:5000/${popupdata.CIN.split(
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
              CIN*
            </label>
            <p className="cursor-pointer" onClick={() => setCcc(!ccc)}>
              <AiFillEdit />
            </p>
            {ccc && (
              <>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="file"
                  placeholder="Albuquerque"
                  onChange={(e) => {
                    setCIN(e.target.files[0]);
                  }}
                />
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material/24/submit-progress--v2.png"
                  alt="submit-progress--v2"
                  onClick={(e) => {
                    editShopActLead(e, "CIN");
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

export default Shop;