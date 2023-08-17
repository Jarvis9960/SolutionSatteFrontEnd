import React, { useState , useEffect} from "react";
import Updatepassword from "../components/Updatepassword";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Updateemployeepass = () => {
    const navigate = useNavigate();
    const [Profiledata, setProfiledata] = useState({});
    const [authScreen, setAuthScreen] = useState(true);
    const {id} = useParams();
    let tokenData = localStorage.getItem("token");
    let tokenExpiry;
    let token;
    if (tokenData) {
      tokenExpiry = new Date(JSON.parse(tokenData).expiry);
      token = JSON.parse(tokenData).usertoken;
    }
    let currentDate = new Date();
  
    
    const fetchid= async()=>{
      const response = await axios({
        method: "get",
        url: `https://api.solutionsathee.com/api/v1/crm/getEmpolyeeIDforadmin/${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      if (response) {
        setProfiledata(response.data.fetchdata)
      
      }
    }
  
    useEffect(() => {
      if (!tokenData) {
        navigate("/login");
      } else {
        if (currentDate > tokenExpiry) {
          localStorage.removeItem("token");
          navigate("/login");
        }
        
        fetchid();
        setTimeout(() => {
          setAuthScreen(false);
        }, 500);
      }
    }, []);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden bg-white">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <WelcomeBanner />
            <div className="flex justify-center items-center">
              <Updatepassword Profiledata={Profiledata} id={id} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Updateemployeepass;
