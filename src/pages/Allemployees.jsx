import React, { useEffect, useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import Tableempolyee from "./Tableempolyee";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Allemployees = () => {
  const navigate = useNavigate();
  const [authScreen, setAuthScreen] = useState(true);
  const [number, setnumber] = useState();
  const [loandetail, setloandetail] = useState([]);
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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  
  // searching _
  const Searchbynum = async () => {
    await axios({
      method: "get",
      url: `https://api.solutionsathee.com/api/v1/crm/getemployeebyIdNum?employeeId=${number}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.data) {
          setloandetail(res.data.fetchdata);
        }
      })
      .catch((err) => {
      });
  };


  const length = loandetail;

  if (authScreen) {
    return (
      <div className="lds-roller-container">
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );;
  }
  return (
    <div className="flex h-screen overflow-hidden bg-white">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <WelcomeBanner />
            <h1 className="text-xl my-5 bg-slate-700 text-white p-3 text-center">All Employee</h1>
            <div className="">
              <Tableempolyee loandetail ={loandetail} length={length}/>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Allemployees;
