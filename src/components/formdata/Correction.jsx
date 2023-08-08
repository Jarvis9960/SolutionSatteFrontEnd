import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import {
  ClientAdminContext,
  ClientListContext,
} from "../../Context/ClientList";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Correction = () => {
  const navigate = useNavigate();
  const tokenData = localStorage.getItem("token");
  const token = JSON.parse(tokenData).usertoken;
  const location = useLocation();
  const {
    state: { serviceId, service },
  } = location;
  const role = localStorage.getItem("role");
  const { clientState } = useContext(ClientListContext);
  const { clientAdminState } = useContext(ClientAdminContext);
  const [clientData, setClientData] = useState("");
  const [client, setClient] = useState("");
  const [ProofOfIdentity, setProofOfIdentity] = useState(null);
  const [ProofOfResidency, setProofOfResidency] = useState(null);
  const [DateofBirthProof, setDateofBirthProof] = useState(null);

  useEffect(() => {
    if (role === "admin") {
      setClientData(clientAdminState.clientAdmin.already);
    } else if (clientState.isError === false) {
      setClientData(clientState.clients.clients);
    }
  }, []);

  const handleLeadForm = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("clientId", client);
      formData.append("serviceId", serviceId);
      formData.append("ProofOfIdentity", ProofOfIdentity);
      formData.append("ProofOfResidency", ProofOfResidency);
      formData.append("DateofBirthProof", DateofBirthProof);

      const leadApiCall = await axios({
        method: "post",
        url: "https://api.solutionsathee.com/api/v1/crm/createleadfornewcorrectionpanapplication",
        data: formData,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Submitted", {
        position: toast.POSITION.TOP_RIGHT,
      });

      setTimeout(() => {
        navigate("/addlead");
      }, 2000);
    } catch (error) {
      toast.error("something Went Wrong ", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
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
              for="grid-state"
            >
              My Client
            </label>
            <div className="relative">
              <select
                className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                onChange={(e) => {
                  setClient(e.target.value);
                }}
              >
                <option value="" disabled selected>
                  Select a client
                </option>
                {clientData &&
                  clientData.map((client) => {
                    return (
                      <>
                        <option key={client._id} value={client._id}>
                          {client.first_name}
                        </option>
                      </>
                    );
                  })}
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
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Service
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              defaultValue={service}
              readOnly
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Proof Of Identity
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="file"
              placeholder="Albuquerque"
              onChange={(e) => {
                setProofOfIdentity(e.target.files[0]);
              }}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Proof Of Resident
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="file"
              placeholder=""
              onChange={(e) => {
                setProofOfResidency(e.target.files[0]);
              }}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Date of Birth Proof
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="file"
              placeholder=""
              onChange={(e) => {
                setDateofBirthProof(e.target.files[0]);
              }}
            />
          </div>
        </div>

        <div className="mt-5 flex justify-center">
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            SUBMIT
          </button>

          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default Correction;
