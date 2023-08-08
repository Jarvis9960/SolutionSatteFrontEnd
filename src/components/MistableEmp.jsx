

import React, { useState } from "react";
import { CSVLink, CSVDownload } from "react-csv";

const MistableEmp = ({ misdata }) => {
  let arr = [];

  for (let index = 0; index < misdata.length; index++) {
    let obj = {
      employeeid: misdata[index].employee.employeeid,
      date:misdata[index].createdAt,
      employeeName: `${misdata[index].employee.first_name} ${misdata[index].employee.last_name}`,
      clientName: `${misdata[index].client.first_name} ${misdata[index].client.last_name}`,
      employeeDob: misdata[index].client.dob,
      service: misdata[index].service.service_name,
      amount: misdata[index].LoanAmount,
    };
    arr.push(obj)
  }

  const misdatacount = misdata.map((e) => {
    

  });


  const array = misdatacount;
  const sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return (
    <div className="bg-white">
      <div className="my-5 flex items-center">
        <h1 className="text-black px-3 text-xl">
          Download Mis Report for employees (default: last month):
        </h1>
        <CSVLink
          data={arr}
          className="bg-slate-600 px-5 py-3 rounded text-white"
        >
          Mis Report
        </CSVLink>
      </div>
      <div className="h-64 max-h-96 overflow-y-auto" >

      <table className="table-fixed h-32 overflow-y-auto bg-white">
        <thead>
          <tr>
            <th className="w-1/12 px-2 py-2">Sr. No</th>
            <th className="w-1/6 px-2 py-2">Date</th>
            <th className="w-1/12 px-2 py-2">Employee Id</th>
            <th className="w-1/6 px-2 py-2">Employee name</th>
            <th className="w-1/6 px-2 py-2">DOB</th>
            <th className="w-1/6 px-2 py-2">Name</th>
            <th className="w-1/6 px-2 py-2">Services</th>
            <th className="w-1/12 px-2 py-2">Amt</th>
          </tr>
        </thead>
        <tbody>
          {misdata.map((e, id) => {
            var date = new Date(e.createdAt);
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();

            day = day < 10 ? "0" + day : day;
            month = month < 10 ? "0" + month : month;

            var formattedDate = day + "/" + month + "/" + year;

            function formatDate(dateString) {
              const options = {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              };
              const formattedDate = new Date(dateString).toLocaleDateString(
                "en-GB",
                options
              );
              return formattedDate.replace(/\//g, "-");
            }
            const formattedDateDOB = formatDate(e.client.dob);
            return (
              <tr key={id}>
                <td className="border px-1 py-2 text-center">{id + 1}</td>
                <td className="border px-1 py-2 text-center">
                  {formattedDate}
                </td>
                <td className="border px-1 py-2 text-center">
                  {e.employee.employeeid}
                </td>
                <td className="border px-1 py-2 text-center">
                  {e.employee.first_name} {e.employee.last_name}
                </td>
                <td className="border px-1 py-2 text-center">
                  {formattedDateDOB}
                </td>
                <td className="border px-1 py-2 text-center">
                  {e.client.first_name} {e.client.middle_name}{" "}
                  {e.client.last_name}
                </td>
                <td className="border px-1 py-2 text-center">
                  {e.service.service_name}
                </td>
                <td className="border px-1 py-2 text-center">{e.LoanAmount}</td>
              </tr>
            );
          })}
        </tbody>
        <tbody>
          <tr>
            <td className="border-0 px-1 py-2 text-center"></td>
            <td className="border-0 px-1 py-2 text-center"></td>
            <td className="border-0 px-1 py-2 text-center"></td>
            <td className="border-0 px-1 py-2 text-center"></td>
            <td className="border-0 px-1 py-2 text-center"></td>
            <td className="border-0 px-1 py-2 text-center"></td>
        
          </tr>
        </tbody>
      </table>
    </div>
     </div>
     

  );
};

export default MistableEmp;
