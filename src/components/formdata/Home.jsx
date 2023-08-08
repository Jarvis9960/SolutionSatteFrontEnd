import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ClientAdminContext, ClientListContext } from "../../Context/ClientList";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
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

  useEffect(() => {
    if(role === "admin"){
     setClientData(clientAdminState.clientAdmin.already);
    }else if (clientState.isError === false) {
     setClientData(clientState.clients.clients);
    }
  }, [])

  const handleLeadForm = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("clientId", client);
      formData.append("loanAmount", LoanAmount);
      formData.append("serviceId", serviceId);
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

      const leadApiCall = await axios({
        method: "post",
        url: "https://api.solutionsathee.com/api/v1/crm/createleadforhomeloan",
        data: formData,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Submitted", {
        position: toast.POSITION.TOP_RIGHT})

setTimeout(() => {
            navigate("/addlead");
        }, 2000);

} catch (error) {
toast.error("something Went Wrong ", {
position: toast.POSITION.TOP_RIGHT});
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
              for="grid-first-name"
            >
              Loan Amount
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="number"
              placeholder=""
              onChange={(e) => {
                setLoanAmount(e.target.value);
              }}
            />
          </div>
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
              Employee Identity Card
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="file"
              placeholder="Albuquerque"
              onChange={(e) => {
                setEmployeeIdentityCard(e.target.files[0]);
              }}
            />
            
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Loan Application
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="file"
              placeholder=""
              onChange={(e) => {
                setLoanApplication(e.target.files[0]);
              }}

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
              Proof Of Residency
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
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Permission Of Construction
            </label>
             <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="file"
              placeholder="Albuquerque"
              onChange={(e) => {
                setPermissionOfConstruction(e.target.files[0]);
              }}
            /> 
            
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Registered Agreement For Sales
            </label>
             <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="file"
              placeholder=""
              onChange={(e) => {
                setRegisteredAgreementForSales(e.target.files[0]);
              }}
            />
            
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Allotment Letter
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="file"
              placeholder="Albuquerque"
              onChange={(e) => {
                setAllotmentletter(e.target.files[0]);
              }}
            /> 
            
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Stamped Agreement
            </label>
             <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="file"
              placeholder=""
              onChange={(e) => {
                setStampedAgreement(e.target.files[0]);
              }}
            /> 
            
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Occupancy Certificate
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="file"
              placeholder="Albuquerque"
              onChange={(e) => {
                setOccupancyCertificate(e.target.files[0]);
              }}
            />
            
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Share Certification
            </label>
             <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="file"
              placeholder=""
              onChange={(e) => {
                setShareCertification(e.target.files[0]);
              }}
            />
            
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Maintainance Bill
            </label>
             <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="file"
              placeholder="Albuquerque"
              onChange={(e) => {
                setMaintainanceBill(e.target.files[0]);
              }}
            /> 
            
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Electricity Bill
            </label>
             <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="file"
              placeholder=""
              onChange={(e) => {
                setElectricityBill(e.target.files[0]);
              }}
            /> 
            
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Property Tax Receipt
            </label>
             <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="file"
              placeholder="Albuquerque"
              onChange={(e) => {
                setPropertyTaxReceipt(e.target.files[0]);
              }}
            /> 
            
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Approved Plan Copy Registered Development Agreement Of The Builder
              Conveyance Deed
            </label>
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
            
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Payment Made To Builder Recept
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="file"
              placeholder="Albuquerque"
              onChange={(e) => {
                setPaymentMadetoBuilderRecept(e.target.files[0]);
              }}
            /> 
            
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Six Month Bank Statement
            </label>
             <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="file"
              placeholder=""
              onChange={(e) => {
                setSixMonthBankStatement(e.target.files[0]);
              }}
            />
            
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Loan AccountStatement
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="file"
              placeholder="Albuquerque"
              onChange={(e) => {
                setLoanAccountStatement(e.target.files[0]);
              }}
            />
            
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Three Month Salary Slip
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="file"
              placeholder=""
              onChange={(e) => {
                setThreeMonthSalarySlip(e.target.files[0]);
              }}
            />
            
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Two Year Of Form sixteen Or It Return
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="file"
              placeholder="Albuquerque"
              onChange={(e) => {
                setTwoYearOfFormsixteenOrItReturn(e.target.files[0]);
              }}
            /> 
             
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Business Address Proof
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="file"
              placeholder=""
              onChange={(e) => {
                setBusinessAddressProof(e.target.files[0]);
              }}
            />
            
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Three YearIt Return
            </label>
             <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="file"
              placeholder="Albuquerque"
              onChange={(e) => {
                setThreeYearItReturn(e.target.files[0]);
              }}
            /> 
            
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Business Lisence Detail
            </label>
             <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="file"
              placeholder=""
              onChange={(e) => {
                setBusinessLisenceDetail(e.target.files[0]);
              }}
            /> 
            
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              TDS Certification
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="file"
              placeholder="Albuquerque"
              onChange={(e) => {
                setTDScertification(e.target.files[0]);
              }}
            /> 
            
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Certification Of Qualification
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="file"
              placeholder=""
              onChange={(e) => {
                setcertificationOfQualification(e.target.files[0]);
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
          <ToastContainer/>
        </div>
      </form>
    </div>
  );
};

export default Home;
