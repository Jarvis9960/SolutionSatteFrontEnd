import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Updateform = ({ Profiledata, id }) => {
  const navigate = useNavigate();
  const [first_name, setfirst_name] = useState(Profiledata.first_name);
  const [last_name, setlast_name] = useState(Profiledata.last_name);
  const [email, setemail] = useState(Profiledata.email);
  const [address, setaddress] = useState(Profiledata.address);
  const [number, setnumber] = useState(Profiledata.number); 
  const [nationality, setnationality] = useState(Profiledata.nationality);
  const [religion, setreligion] = useState(Profiledata.religion);
  const [martialStatus, setmartialStatus] = useState(Profiledata.martialStatus);
  const [emergencyContactName, setemergencyContactName] = useState(
    Profiledata.emergencyContactName
  );
  const [emergencyContactRelationship, setemergencyContactRelationship] =
    useState(Profiledata.emergencyContactRelationship);
  const [EmergencyContactNumber, setEmergencyContactNumber] = useState(
    Profiledata.EmergencyContactNumber
  );
  const [age, setAge] = useState(Profiledata.age);
  const [bankName, setBankName] = useState(Profiledata.BankName);
  const [branch, setBranchName] = useState(Profiledata.BranchName);
  const [dateOfBirth, setDateOfBirth] = useState(Profiledata.BankName);
  const [authScreen, setAuthScreen] = useState(true);
  const [IFSC, setIFSC] = useState(Profiledata.IFSCcode);
  const [accHolderName, setAccHolderName] = useState(Profiledata.ACholdername);
  const [bankAccNumber, setBankAccNumber] = useState(Profiledata.BankAccNo);
  const [panNumber, setPanNumber] = useState(Profiledata.PanNo);
  const [employeerole, setEmployeeRole] = useState(Profiledata.BankName);
  const [adhar, setAdhar] = useState(Profiledata.adharno);

  let role = localStorage.getItem("role");
  let tokenData = localStorage.getItem("token");
  let tokenExpiry;
  let token;
  if (tokenData) {
    tokenExpiry = new Date(JSON.parse(tokenData).expiry);
    token = JSON.parse(tokenData).usertoken;
  }
  let currentDate = new Date();

  useEffect(() => {
    if (!tokenData) {
      navigate("/login");
    } else {
      if (role === "employee") {
        navigate("/login");
      }
      if (currentDate > tokenExpiry) {
        localStorage.removeItem("token");
        navigate("/login");
      }
      setTimeout(() => {
        setAuthScreen(false);
      }, 500);
    }
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();

    await axios({
      method: "patch",
      url: `http://localhost:5000/api/v1/crm/updateempolyee/${id}`,
      data: {
        first_name: first_name,
        last_name: last_name,
        email: email,
        address: address,
        number: number,
        nationality: nationality,
        religion: religion,
        martialStatus: martialStatus,
        emergencyContactName: emergencyContactName,
        emergencyContactRelationship: emergencyContactRelationship,
        EmergencyContactNumber: EmergencyContactNumber,
        adharno: adhar,
        PanNo: panNumber,
        age: age,
        BankName: bankName,
        BranchName: branch,
        IFSCcode: IFSC,
        ACholdername: accHolderName,
        BankAccNo: bankAccNumber,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(() => {
      toast.success("Updated Successfuly", {
        position: toast.POSITION.TOP_RIGHT
      })
    }
    ).catch(()=>{
      toast.error("Failed to Update", {
        position: toast.POSITION.TOP_RIGHT});
    });
  };

  return (
    <>
      <form
        className="w-full mt-12"
        onSubmit={(e) => {
          handleUpdate(e);
        }}
      >
        <div className="flex flex-wrap mx-3 mb-6 justify-center items-center">
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder=""
              defaultValue={Profiledata.first_name}
              onChange={(e) => {
                setfirst_name(e.target.value);
              }}
            />
          </div>
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Middle Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder=""
            />
          </div>
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder=""
              defaultValue={Profiledata.last_name}
              onChange={(e) => {
                setlast_name(e.target.value);
              }}
            />
          </div>
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Adhaar Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="number"
              placeholder=""
              defaultValue={Profiledata.adharno}
              onChange={(e) => {
                setAdhar(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-wrap mx-3 mb-6 justify-center items-center">
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="email"
              placeholder=""
              defaultValue={Profiledata.email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
          </div>
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Address
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder=""
              defaultValue={Profiledata.address}
              onChange={(e) => {
                setaddress(e.target.value);
              }}
            />
          </div>
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Reported To
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder=""
              defaultValue={Profiledata.reportto}
            />
          </div>
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Mobile Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="number"
              placeholder=""
              defaultValue={Profiledata.number}
              onChange={(e) => {
                setnumber(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-wrap mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              Age
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="number"
              placeholder=""
              defaultValue={Profiledata.age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Role
            </label>
            <div className="relative">
              <select
                name=""
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                id="grid-state"
              >
                <option defaultValue="employee">{Profiledata.role}</option>
              </select>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Gender
            </label>
            <div className="relative">
              <select
                name=""
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                id="grid-state"
              >
                <option defaultValue="">{Profiledata.gender}</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mx-3 mb-6 justify-center items-center">
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Nationality
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder=""
              defaultValue={Profiledata.nationality}
              onChange={(e) => {
                setnationality(e.target.value);
              }}
            />
          </div>
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Religion
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder=""
              defaultValue={Profiledata.religion}
              onChange={(e) => {
                setreligion(e.target.value);
              }}
            />
          </div>
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Joining Date
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="date"
              placeholder=""
              defaultValue={Date(Profiledata.joiningdate)}
            />
          </div>
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Martial Status
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder=""
              defaultValue={Profiledata.martialStatus}
              onChange={(e) => {
                setmartialStatus(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-wrap mx-3 mb-6 justify-center items-center">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Emergency Contact Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder=""
              defaultValue={Profiledata.emergencyContactName}
              onChange={(e) => {
                setemergencyContactName(e.target.value);
              }}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Emergency Contact Relationship
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder=""
              defaultValue={Profiledata.emergencyContactRelationship}
              onChange={(e) => {
                setemergencyContactRelationship(e.target.value);
              }}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Emergency Contact Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="number"
              placeholder=""
              defaultValue={Profiledata.EmergencyContactNumber}
              onChange={(e) => {
                setEmergencyContactNumber(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-wrap mx-3 mb-6 justify-center items-center">
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Bank Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder=""
              defaultValue={Profiledata.BankName}
              onChange={(e) => {
                setBankName(e.target.value);
              }}
            />
          </div>
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Branch Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder=""
              defaultValue={Profiledata.BranchName}
              onChange={(e) => {
                setBranchName(e.target.value);
              }}
            />
          </div>
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Date Of Birth
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white uppercase"
              id="grid-first-name"
              type="date"
              placeholder=""
              defaultValue={Date(Profiledata.dob)}
              onChange={(e) => {
                setDateOfBirth(e.target.value);
              }}
            />
          </div>
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              IFSC Code
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white uppercase"
              id="grid-first-name"
              type="text"
              placeholder=""
              defaultValue={Profiledata.IFSCcode}
              onChange={(e) => {
                setIFSC(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-wrap mx-3 mb-6 justify-center items-center">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              AC Holder Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder=""
              defaultValue={Profiledata.ACholdername}
              onChange={(e) => {
                setAccHolderName(e.target.value);
              }}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Bank Account Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="number"
              placeholder=""
              defaultValue={Profiledata.BankAccNo}
              onChange={(e) => {
                setBankAccNumber(e.target.value);
              }}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Pan Card Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white uppercase"
              id="grid-first-name"
              type="text"
              placeholder=""
              defaultValue={Profiledata.PanNo}
              onChange={(e) => {
                setPanNumber(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex justify-end mr-6 mt-5 ">
          <input
            type="submit"
            className="rounded-none bg-blue-600 text-white p-3 cursor-pointer"
          />
        </div>
      </form>
      <ToastContainer/>
    </>
  );
};

export default Updateform;
