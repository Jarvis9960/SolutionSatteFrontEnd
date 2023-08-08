import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import DashboardAvatars from "../partials/dashboard/DashboardAvatars";
import FilterButton from "../partials/actions/FilterButton";
import Datepicker from "../partials/actions/Datepicker";
import DashboardCard01 from "../partials/dashboard/DashboardCard01";
import DashboardCard02 from "../partials/dashboard/DashboardCard02";
import DashboardCard03 from "../partials/dashboard/DashboardCard03";
import DashboardCard04 from "../partials/dashboard/DashboardCard04";
import DashboardCard05 from "../partials/dashboard/DashboardCard05";
import DashboardCard06 from "../partials/dashboard/DashboardCard06";
import DashboardCard07 from "../partials/dashboard/DashboardCard07";
import DashboardCard08 from "../partials/dashboard/DashboardCard08";
import DashboardCard09 from "../partials/dashboard/DashboardCard09";
import DashboardCard10 from "../partials/dashboard/DashboardCard10";
import DashboardCard11 from "../partials/dashboard/DashboardCard11";
import DashboardCard12 from "../partials/dashboard/DashboardCard12";
import DashboardCard13 from "../partials/dashboard/DashboardCard13";
import Banner from "../partials/Banner";
import Innerdashborad from "./Innerdashborad";
import BarChart from "../components/graphs/BarChart";
import ShapeChart from "../components/graphs/ShapeGraph";
import LoanInfoCard from "../utils/LoanInfoCard";
import DashboardData from "../components/DashboardData";
import AllleadGraph from "../components/AllleadGraph";
import MistableEmp from "../components/MistableEmp";
import { useContext } from "react";
import axios from "axios";
import { ClientAdminContext, ClientListContext } from "../Context/ClientList";
import MistableReport from "../components/MistableReport";
import Selector from "./Selector";

import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import Status from "./Status";

function Dashboard() {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [authScreen, setAuthScreen] = useState(true);
  const [searchOption, setSearchOption] = useState(false);

  const { clientState } = useContext(ClientListContext);
  const { clientAdminState } = useContext(ClientAdminContext);
  const [data, setData] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [misdata, setMisData] = useState([]);
  const [mistabledata, setMisTableData] = useState();
  const [empId, setEmpId] = useState();
  const [employee, setEmployee] = useState();
  const [status, setstatus] = useState();
  const [clientData, setClientData] = useState("");
  const [input, setInput] = useState("");
  const [arr, setArr] = useState([]);
  const [employeeId, setEmployeeId] = useState("")

  const currentDate = new Date();
  const todateInitial = currentDate
    .toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .split("/")
    .reverse()
    .join("/");
  const fromdateInitial = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() - 1,
    currentDate.getDate()
  )
    .toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .split("/")
    .reverse()
    .join("/");
  const [todate, settodate] = useState(todateInitial);
  const [fromdate, setfromdate] = useState(fromdateInitial);


  let tokenData = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  let tokenExpiry;
  let token;
  if (tokenData) {

    tokenExpiry = new Date(JSON.parse(tokenData).expiry);
    token = JSON.parse(tokenData).usertoken;
  }

  const fetchData = (value) => {
    if (arr.length == 0) {
      setArr();
    } else {
    }
    fetch("https://api.solutionsathee.com/api/v1/crm/getallemployee");
  };

  useEffect(() => {
    (async function () {
      await axios
        .get("https://api.solutionsathee.com/api/v1/crm/getallemployee")
        .then((res) => {
          setData(res.data.fetchdata);
          setEmpId(res.data.fetchdata);
        });
    })();
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.solutionsathee.com/api/v1/crm/getmisreportofleads?FromDate=${fromdate}&Todate=${todate}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      setMisData(res.data.response);
    });

    axios({
      method: "get",
      url: `https://api.solutionsathee.com/api/v1/crm/getmistabledata`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      setMisTableData(res.data.data);
    });
  }, []);

  const handleFormSubmit = () => {
    axios({
      method: "get",
      url: `https://api.solutionsathee.com/api/v1/crm/getmisreportofleads?FromDate=${fromdate}&Todate=${todate}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      setMisData(res.data.response);
    });


    axios({
      method: "get",
      url: `https://api.solutionsathee.com/api/v1/crm/getmistabledata`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      setMisTableData(res.data.data);
    });
  };

  useEffect(() => {
    if (role === "admin") {
      setClientData(clientAdminState.clientAdmin.already);
    } else if (clientState.isError === false) {
      setClientData(clientState.clients.clients);
    }
  }, []);

  useEffect(() => {
    let apiUrl = "";

    if (role === "admin") {
      apiUrl = "/getnumberofsuccessfailedpendingleadforallserviceadmin";
    } else {
      apiUrl = "/getnumberofSuccerssFailedandPendingleadforallservice";
    }

    axios
      .get(`https://api.solutionsathee.com/api/v1/crm${apiUrl}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const { Success, Failed, Pending } = res.data.response;
        
        const statusProps = {
          Success,
          Failed,
          Pending,
        };
        setstatus(statusProps);
      })
      .catch((error) => {
        console.error("Error fetching status:", error);
      });
  }, [role, token]);

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
    const today = new Date();
    const oneMonthBack = new Date(
      today.getFullYear(),
      today.getMonth() - 1,
      today.getDate()
    );
    setfromdate(oneMonthBack);
    settodate(today);
  }, []);

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


  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  const handleInputChange = (event) => {
    const userInput = event.target.value;
    if (userInput) {
      settodate(new Date(userInput));
    } else {
      settodate(new Date());
    }
  };
  
  const handleInputChange1 = (event) => {
    const userInput = event.target.value;
    if (userInput) {
      setfromdate(new Date(userInput));
    } else {
      const today = new Date();
      const oneMonthBack = new Date(
        today.getFullYear(),
        today.getMonth() - 1,
        today.getDate()
      );
      setfromdate(oneMonthBack);
    }
  };


  return (
    <div className="flex h-screen overflow-hidden bg-white">
   
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

     
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
     
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          role={role}
        />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <WelcomeBanner />

            <div className="sm:flex sm:justify-between sm:items-center mb-8 ">
              <DashboardData />
            </div>
            <div className="my-20">
              <Status {...status} />
            </div>

            <div className="sm:flex sm:justify-between sm:items-center mb-8 overflow-x-scroll ">
              {role === "admin" ?
                <div className="flex">
                  <div>
                    From : <input type="date" onChange={handleInputChange1} />
                  </div>
                  <div className="ml-4">
                    To : <input type="date" onChange={handleInputChange} />
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={handleFormSubmit}
                      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                    >
                      Submit
                    </button>
                  </div>
                </div>
                : <></>}
              {role === "admin" ? <MistableEmp misdata={misdata} /> : <></>}
            </div>

            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {role === "admin" ? (
                <MistableReport mistabledata={mistabledata} />
              ) : (
                <></>
              )}
            </div>
              {role === 'admin' ? 
              <div>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto my-15">

              <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto my-5">
                <h1 className="font-bold text-2xl underline">
                  All Leads Analysis Details:-
                </h1>
                
                  <Selector setEmployeeId={setEmployeeId} />
                
               
              </div>
            </div>
            
         

              <div className="my-5">
                <AllleadGraph
                  className="overflow-x-scroll w-full"
                  employeeId={employeeId}
                />
              </div>
              
              </div>
              : <> </>}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <Innerdashborad />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
