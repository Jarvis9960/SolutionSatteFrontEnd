import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const AllleadGraph = ({ employeeId }) => {
  const [authScreen, setAuthScreen] = useState(true);
  const [dataval, setDataVal] = useState();
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
      if (currentDate > tokenExpiry) {
        localStorage.removeItem("token");
        navigate("/login");
      }
      setTimeout(() => {
        setAuthScreen(false);
      }, 500);
    }
  }, []);
  

  const data = [
    {
      name: "Business",
      service: dataval ? dataval.businessLoanLeadCount : 0,
      amt: 500,
    },
    {
      name: "Home",
      service: dataval ? dataval.homeLoanLeadCount : 0,
      amt: 500,
    },
    {
      name: "Personal",
      service: dataval ? dataval.personalLoanLeadCount : 0,
      amt: 500,
    },
    {
      name: "Mortgage",
      service: dataval ? dataval.mortgageLoanLeadCount : 0,
      amt: 500,
    },
    {
      name: "Credit card",
      service: dataval ? dataval.creditLoanLeadCount : 0,
      amt: 500,
    },
    {
      name: "Car",
      service: dataval ? dataval.carLoanLeadCount : 0,
      amt: 500,
    },
    {
      name: "Used Car",
      service: dataval ? dataval.businessLoanLeadCount : 0,
      amt: 500,
    },
    {
      name: "Passport",
      service: dataval ? dataval.passportLoanLeadCount : 0,
      amt: 500,
    },
    {
      name: "Shop",
      service: dataval ? dataval.shopActLeadCount : 0,
      amt: 500,
    },
    {
      name: "GST",
      service: dataval ? dataval.gstLoanLeadCount : 0,
      amt: 500,
    },
    {
      name: "Home Insurance",
      service: dataval ? dataval.businessLoanLeadCount : 0,
      amt: 500,
    },
    {
      name: "Food Liscence",
      service: dataval ? dataval.foodLisenceLoanLeadCount : 0,
      amt: 500,
    },
    {
      name: "Motor Insurance",
      service: dataval ? dataval.businessLoanLeadCount : 0,
      amt: 500,
    },
    {
      name: "Udhyam Registration",
      service: dataval ? dataval.udyamCertificateLoanLeadCount : 0,
      amt: 500,
    },
    {
      name: "NCPA",
      service: dataval ? dataval.newCorrectionPanApplicationCount : 0,
      amt: 500,
    },
    {
      name: "HLBT",
      service: dataval ? dataval.businessLoanLeadCount : 0,
      amt: 500,
    },
    {
      name: "Gold Loan",
      service: dataval ? dataval.goldLoanLeadCount : 0,
      amt: 500,
    },
  ];

  useEffect(() => {
    (async function() {
    if(employeeId){
  await axios({
      method: "get",
      url: `https://api.solutionsathee.com/api/v1/crm/getemployeenumberoflead?currentUserId=${employeeId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      setDataVal(res.data);
    });
  }
})();
  }, [employeeId]);

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <ResponsiveContainer>
        <BarChart
         
          data={data}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" style={{ fontSize: "10px" }} />
          <YAxis datakey="amt" style={{ fontSize: "10px" }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="service" fill="#1c78b6" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};


export default AllleadGraph;