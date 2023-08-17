import React, { useEffect, useState } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import Tableclient from "./Tableclient";
import { Link, useNavigate } from "react-router-dom";


const Myclient = () => {
  const navigate = useNavigate();
  const [view, setview] = useState(false);
  const [popupdata, setpopupdata] = useState([]);
  const [number, setnumber] = useState();
  const [loandetail, setloandetail] = useState([]);
  const [authScreen, setAuthScreen] = useState(true);
  let tokenData = localStorage.getItem("token");
  let tokenExpiry;
  let token;
  if (tokenData) {
    
    tokenExpiry = new Date(JSON.parse(tokenData).expiry);
    token = JSON.parse(tokenData).usertoken;
  }
  let currentDate = new Date();


  const Searchbynum = async () => {
    await axios({
      method: "get",
      url: `http://localhost:5000/api/v1/crm/getclientbyNumber?phone=${number}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.data.status) {
          setloandetail(res.data.response);
        }
      })
      .catch((err) => {
      });
  };

  useEffect(() => {
    if (!tokenData) {
      navigate("/login");
    } else {
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
    );
  }
  return (
    <>
      <div className="flex h-screen overflow-hidden bg-white">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              <WelcomeBanner />
              
              <button
                onClick={() => navigate("/addclient")}
                className="bg-blue-500 mx-2 p-2 text-white my-5"
              >
                Add Client
              </button>
              <div className=" mb-8">
                <Tableclient />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Myclient;
