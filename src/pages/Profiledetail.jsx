import React from "react";
import { useNavigate } from "react-router-dom";

const Profiledetail = ({ Profiledata }) => {
  const url =
    "https://i0.wp.com/www.society19.com/wp-content/uploads/2020/04/pinterest__tbhjessica-%E2%98%BC-%E2%98%BE%E2%99%A1.png?w=1024&ssl=1";
  const navigate = useNavigate();
  const change_into_date = (dte) => {
    const data = new Date(dte);
    const newdate = data.toLocaleDateString();
    return newdate;
  };


  return (
    <>
      {Profiledata ? (
        <div className="grid grid-rows-2 pt-8 pl-10 h-full sm:h-full xs:h-full bg-gradient-to-br from-cyan-300 via-cyan-200 to-gray-200">
          <div className="backdrop-blur-md grid gap-24 grid-cols-2">
            <div className="grid gap-4 grid-cols-2  justify-between">
              <div>
                <h3 className="font-bold text-2xl uppercase  sm:text-base xs:text-sm">
                  {Profiledata.first_name} {Profiledata.last_name}
                </h3>
                <p className="font-bold uppercase sm:text-base xs:text-sm">{Profiledata.role}</p>
                <p className="font-semibold sm:text-base xs:text-sm">Team: {Profiledata.Team}</p>
                <p className="font-semibold sm:text-base xs:text-sm">
                  Date of Joining: {change_into_date(Profiledata.joiningdate)}
                </p>
                <p className="font-semibold sm:text-base xs:text-sm">{Profiledata.CompanyName}</p>
              </div>
            </div>
            <div className=" pl-3 h-28 sm:text-base xs:text-sm">
              <p className="font-semibold">Email: {Profiledata.email}</p>
              <p className="font-semibold">
                Birthday: {change_into_date(Profiledata.dob)}
              </p>
              <p className="font-semibold">Address: {Profiledata.address}</p>
              <p className="font-semibold">Gender: {Profiledata.gender}</p>
              <p className="font-semibold">Aadhar No: {Profiledata.adharno}</p>
              <p className="font-semibold">Report to: {Profiledata.reportto}</p>
            </div>
          </div>
          <div className="backdrop-blur-md extra-information-div   grid grid-rows-2 grid-cols-2">
            <div className="sm:text-base xs:text-sm">
              <h5 className="font-bold text-2xl uppercase sm:text-lg xs:text-sm">
                Personal information
              </h5>
              <div className="grid grid-cols-2 sm:text-base xs:text-sm">
                <div>
                  <p className="font-semibold sm:text-base xs:text-sm">Nationality:</p>
                  <p className="font-semibold sm:text-base xs:text-sm">Religion:</p>
                  <p className="font-semibold sm:text-base xs:text-sm">Marital Status:</p>
                </div>
                <div className=" sm:text-base xs:text-sm">
                  <p className="font-semibold sm:text-base xs:text-sm">{Profiledata.nationality}</p>
                  <p className="font-semibold sm:text-base xs:text-sm">{Profiledata.religion}</p>
                  <p className="font-semibold sm:text-base xs:text-sm">{Profiledata.MartialStatus}</p>
                </div>
              </div>
            </div>
            <div className="">
              <h5 className="font-bold text-2xl uppercase sm:text-base xs:text-sm">
                Emergency Contacts
              </h5>
              <div className="grid grid-cols-2">
                <div>
                  <p className="font-semibold sm:text-base xs:text-sm">Name</p>
                  <p className="font-semibold sm:text-base xs:text-sm">Relationship</p>
                  <p className="font-semibold sm:text-base xs:text-sm">Phone</p>
                </div>
                <div className="">
                  <p className="font-semibold sm:text-base xs:text-sm">
                    {Profiledata.emergencyContactName}
                  </p>
                  <p className="font-semibold sm:text-base xs:text-sm">
                    {Profiledata.emergencyContactRelationship}
                  </p>
                  <p className="font-semibold sm:text-base xs:text-sm">
                    {Profiledata.EmergencyContactNumber}
                  </p>
                </div>
              </div>
            </div>
            <div className=" mt--1">
              <h5 className="font-bold text-2xl uppercase sm:text-base xs:text-sm">Bank information</h5>
              <div className="grid grid-cols-2">
                <div>
                  <p className="font-semibold sm:text-base xs:text-sm">Account Holder Name</p>
                  <p className="font-semibold sm:text-base xs:text-sm">Bank Account No</p>
                  <p className="font-semibold sm:text-base xs:text-sm">IFSC Code</p>
                  <p className="font-semibold sm:text-base xs:text-sm">Pan Number</p>
                </div>
                <div className="">
                  <p className="font-semibold sm:text-base xs:text-sm">{Profiledata.BankName}</p>
                  <p className="font-semibold sm:text-base xs:text-sm">{Profiledata.BankAccNo}</p>
                  <p className="font-semibold sm:text-base xs:text-sm">{Profiledata.IFSCcode}</p>
                  <p className="font-semibold sm:text-base xs:text-sm">{Profiledata.PanNo}</p>
                </div>
              </div>
            </div>
            {Profiledata.role === "admin" ?  (
              <div>
                <button
                  onClick={() => {
                    navigate(`/update`);
                  }}
                  className="rounded-full bg-violet-500 p-3 text-white font-semibold"
                >
                  Update Profile
                </button>
              </div>
            ) :(
              <p>Admin can change only</p>
            )}
          </div>
        </div>
      ) : (
        processing
      )}
    </>
  );
};

export default Profiledetail;