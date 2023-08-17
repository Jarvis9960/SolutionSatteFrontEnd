import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateCorrectionForm = () => {
  const tokenData = localStorage.getItem("token");
  const token = JSON.parse(tokenData).usertoken;
  const location = useLocation();
  const {
    state: { serviceID },
  } = location;
  const [clientData, setClientData] = useState("");
  const [LoanAmount, setLoanAmount] = useState("");
  const [client, setClient] = useState("");
  const [loading, setLoading] = useState(false);
  const [ProofOfIdentity, setProofOfIdentity] = useState(null);
  const [ProofOfResidency, setProofOfResidency] = useState(null);
  const [DateofBirthProof, setDateofBirthProof] = useState(null);
  const [popupdata, setpopupdata] = useState("");
  const [ProofOfIdentityOpen, setProofOfIdentityOpen] = useState(false);
  const [ProofOfResidencyOpen, setProofOfResidencytOpen] = useState(false);
  const [DateofBirthProofOpen, setDateofBirthProofOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    try {
      axios({
        method: "get",
        url: `http://localhost:5000/api/v1/crm/getnewcorrectionpanapplicationforadminbyId?getNewCorrectionPanApplicationbyId=${serviceID}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        setpopupdata(res.data.response);
      });
    } catch (error) {}
  }, [serviceID, loading]);

  const editNewPanCorrectionLead = async (e, fieldToEdit) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("leadId", serviceID);
      formData.append("fieldToEdit", fieldToEdit);
      formData.append("ProofOfIdentity", ProofOfIdentity);
      formData.append("ProofOfResidency", ProofOfResidency);
      formData.append("DateofBirthProof", DateofBirthProof);

      const editedResponse = await axios({
        method: "patch",
        url: "http://localhost:5000/api/v1/crm/updatenewcorrectionpanapplication",
        data: formData,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (editedResponse.data.status) {
        toast.success("Updated Successfuly", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setLoading(false);
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
              <form
                onSubmit={(e) => {
                  handleLeadForm(e);
                }}
                className="w-full max-w-lg"
              >
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      Loan Amount*
                    </label>
                    {popupdata && (
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="number"
                        placeholder=""
                        onChange={(e) => {
                          setLoanAmount(e.target.value);
                        }}
                        defaultValue={popupdata.LoanAmount}
                        readOnly
                      />
                    )}
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-state"
                    >
                      My Client*
                    </label>
                    <div className="relative">
                      {popupdata && (
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
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-zip"
                    >
                      Service*
                    </label>
                    {popupdata && (
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-zip"
                        type="text"
                        defaultValue={popupdata.service.service_name}
                        readOnly
                      />
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    {popupdata.hasOwnProperty("ProofOfIdentity") && (
                      <img
                        src={`http://localhost:5000/${popupdata.ProofOfIdentity.split(
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
                      Proof Of Identity
                    </label>
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/fluency-systems-regular/48/edit--v1.png"
                      alt="edit--v1"
                      onClick={() => {
                        setProofOfIdentityOpen(!ProofOfIdentityOpen);
                      }}
                    />
                    {ProofOfIdentityOpen && (
                      <>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-city"
                          type="file"
                          placeholder=""
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
                            editNewPanCorrectionLead(e, "ProofOfIdentity");
                          }}
                        />
                      </>
                    )}
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    {popupdata.hasOwnProperty("ProofOfResidency") && (
                      <img
                        src={`http://localhost:5000/${popupdata.ProofOfResidency.split(
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
                      Proof Of Resident
                    </label>
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/fluency-systems-regular/48/edit--v1.png"
                      alt="edit--v1"
                      onClick={() => {
                        setProofOfResidencytOpen(!ProofOfResidencyOpen);
                      }}
                    />
                    {ProofOfResidencyOpen && (
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
                            editNewPanCorrectionLead(e, "ProofOfResidency");
                          }}
                        />
                      </>
                    )}
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    {popupdata.hasOwnProperty("DateofBirthProof") && (
                      <img
                        src={`http://localhost:5000/${popupdata.DateofBirthProof.split(
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
                      Date Of Birth Proof
                    </label>
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/fluency-systems-regular/48/edit--v1.png"
                      alt="edit--v1"
                      onClick={() => {
                        setDateofBirthProofOpen(!DateofBirthProofOpen);
                      }}
                    />
                    {DateofBirthProofOpen && (
                      <>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-zip"
                          type="file"
                          placeholder=""
                          onChange={(e) => {
                            setDateofBirthProof(e.target.files[0]);
                          }}
                        />
                        <img
                          width="24"
                          height="24"
                          src="https://img.icons8.com/material/24/submit-progress--v2.png"
                          alt="submit-progress--v2"
                          onClick={(e) => {
                            editNewPanCorrectionLead(e, "DateofBirthProof");
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

export default UpdateCorrectionForm;
