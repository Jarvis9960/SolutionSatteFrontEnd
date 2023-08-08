import axios from "axios";
import React, { useState, useEffect } from "react";
import { ClientListContext } from "../Context/ClientList";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import {FaUserEdit} from  "react-icons/fa"

const Tableclient = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState();
  const [fname, setFname] = useState();
  const [Lname, setLname] = useState();
  const [searchedVal, setSearchedVal] = useState("");
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [pan, setPan] = useState();
  const [view, setview] = useState(false);
  const [popupdata, setpopupdata] = useState([]);
  const [authScreen, setAuthScreen] = useState(true);

  const navigate = useNavigate();
  const url =
    "https://i0.wp.com/www.society19.com/wp-content/uploads/2020/04/pinterest__tbhjessica-%E2%98%BC-%E2%98%BE%E2%99%A1.png?w=1024&ssl=1";

  let tokenData = localStorage.getItem("token");
  let tokenExpiry;
  let token;
  if (tokenData) {    tokenExpiry = new Date(JSON.parse(tokenData).expiry);
    token = JSON.parse(tokenData).usertoken;
  }
  let currentDate = new Date();

  const { clientState, dispatch } = useContext(ClientListContext);

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

  useEffect(() => {
    dispatch({ type: "Loading" });
    try {
      axios({
        method: "get",
        url: "https://api.solutionsathee.com/api/v1/crm/getclientforemployee",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        if (res.status) {
          dispatch({ type: "Success", payload: res.data });
        }
        setData(res.data.clients)
      });
    } catch (error) {
      dispatch({ type: "Failed" });
    }
  }, []);


  const viewclick = () => {
  };

  const handleEdit = async () => {
    const response = await axios
      .patch(`https://api.solutionsathee.com/api/v1/crm/myclient/${id}`)
      .catch((error) => console.log("Error: ", error));
    if (response && response.data) {
      
    }
  };


  // single data fetch FUNCTION

  const singlefetch = async (id) => {
    await axios({
      method: "get",
      url: `https://api.solutionsathee.com/api/v1/crm/getclientbyid?clientId=${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      setpopupdata(res.data.response);
      popupdata ? setview(true) : setview(false);
    });
  };

  const change_into_date = (dte) => {
    const data = new Date(dte);
    const newdate = data.toLocaleDateString();
   
    return newdate;
  };


  return (
    <>
    <div className="flex items-center my-5">
        <div className="flex border border-purple-200 rounded w-full">
          <input
            type="text"
            className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search By Phone no..."
            onChange={(e) => setSearchedVal(e.target.value)}
          />
          <button className="px-4 text-white bg-blue-500 border-l rounded ">
            Search
          </button>
        </div>
      </div>
      <table className="table-fixed w-full h-32 overflow-y-auto bg-white">
        <thead>
          <tr>
            <th className="w-1/6 px-4 py-2">#</th>
            <th className="w-1/4 px-4 py-2">Name</th>
            <th className="w-1/4 px-4 py-2">Phone No.</th>
            <th className="w-1/2 px-4 py-2">Email</th>
            <th className="w-1/3 px-4 py-2">PAN Number</th>
            <th className="w-1/4 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.filter(
                (row) =>
                  !searchedVal.length ||
                  row.phone  
                    .toString()
                    .toLowerCase()
                    .includes(searchedVal.toString().toLowerCase())
              ).map((e, id) => {
              return (
                <tr>
                  <td className="border px-1 py-2 text-center">{id + 1}</td>
                  <td className="border px-1 py-2 text-center sm:overflow-hidden xs:overflow-hidden xxs:overflow-hidden ">
                    {e.first_name || e.firstName} {e.last_name || e.lastname}
                  </td>
                  <td className="border px-1 py-2 text-center sm:overflow-hidden xs:overflow-hidden xxs:overflow-hidden">{e.phone}</td>
                  <td className="border px-1 py-2 text-center md: overflow-hidden sm:overflow-hidden xs:overflow-hidden xxs:overflow-hidden">{e.email}</td>
                  <td className="border px-1 py-2 text-center sm:overflow-hidden xs:overflow-hidden xxs:overflow-hidden">{e.pan}</td>
                  <td className="border px-1 py-2 text-center sm:overflow-hidden xs:overflow-hidden xxs:overflow-hidden">
                    <button
                      className="bg-blue-500 mx-2 p-2 text-white"
                      onClick={() => {
                        singlefetch(e._id);
                      }}
                    >
                      <AiFillEye/>
                    </button>
                    <button
                      className="bg-green-500 p-2 text-white"
                      onClick={() => {
                        navigate(`/updateclient/${e._id}`);
                      }}
                    >
                     <FaUserEdit/>
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      {view ? (
        <>
          <div className="bg-gradient-to-br from-violet-600 via-violet-400 to-gray-600 h-11/12 w-11/12 z-20 absolute top-48 left-10 rounded-2xl">
            <div className="pt-8 pl-10 h-fit w-full text-white">
              <div className="backdrop-blur-md grid gap-24 grid-cols-2">
                <div className="grid gap-4 grid-cols-2">
                  <div>
                    <h3 className="font-bold text-2xl uppercase">
                      {popupdata.first_name} {popupdata.last_name}
                    </h3>
                    <p className="font-bold uppercase">{popupdata.role}</p>
                    <p className="font-semibold">
                      Agent: {popupdata.empolyeeid.first_name}{" "}
                      {popupdata.empolyeeid.last_name}
                    </p>
                    <p className="font-semibold">
                      Date of Creating:{" "}
                      {change_into_date(popupdata.createdAt)}
                    </p>
                  </div>
                </div>
                <div className=" pl-3 h-44">
                  <p className="font-semibold">Email: {popupdata.email}</p>
                  <p className="font-semibold">
                    Birthday: {change_into_date(popupdata.dob)}
                  </p>
                  <p className="font-semibold">
                    Address: {popupdata.city},{popupdata.state}
                  </p>
                  <p className="font-semibold">Gender: {popupdata.gender}</p>
                  <p className="font-semibold">Aadhar No: {popupdata.aadhar}</p>
                  <p className="font-semibold">
                    Contact number: {popupdata.phone}
                  </p>
                  <p className="font-semibold">
                    Remark: {popupdata.remark}
                  </p>
                </div>
              </div>
              <div className="backdrop-blur-md extra-information-div -mt-1 pb-4 grid grid-rows-2 grid-cols-2">
                <div>
                  <button
                    onClick={() => {
                      navigate(`/updateclient/${popupdata._id}`);
                    }}
                    className="rounded-full bg-cyan-300 p-3 text-white font-semibold"
                  >
                    Update Profile
                  </button>

                  <button
                    onClick={() => {
                      setview(false);
                    }}
                    className="rounded-full bg-cyan-300 p-3 mx-2 text-white font-semibold"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Tableclient;

