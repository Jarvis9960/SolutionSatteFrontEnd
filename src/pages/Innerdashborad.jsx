
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { BsFillChatRightFill } from "react-icons/bs";
import { BsSendFill } from "react-icons/bs";

const Innerdashborad = () => {
  const [chatbox, setchatbox] = useState(false);
  const [MailBox, setMailBox] = useState(false);
  const [Subject, setSubject] = useState("");
  const [Mail, setMail] = useState("");
  const [role, setrole] = useState("");

  const data = {
    Subject: Subject,
    Mail: Mail,
  };

  const fetchid = async () => {
    const response = await axios({
      method: "post",
      url: "http://localhost:5000/api/v1/crm/sendmail",
      data: data,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (response) {
      setMailBox(false);
     
    }
  };
  const SendMAil = () => {
    fetchid();
  };


  const Role_Fun = () => {
    let user_role = localStorage.getItem("role");
    setrole(user_role);
  };

  useEffect(() => {
    Role_Fun();
  }, []);
  return (
    <>
     
      {MailBox ? (
        role === "employee" ? (
          <></>
        ) : (
          <>
            <div className="z-60 sticky bottom-2 left-6  w-3/4 h-fit bg-white rounded-xl border-white border-solid border-3 shadow-2xl"style={{position:"fixed",bottom:"0px",left:"850px",width:"500px"}}
             >
            
              <div className=" w-full flex flex-row rounded-t-xl pb-2 pt-2 pr-2 bg-gradient-to-br from-cyan-300 via-violet-300 to-violet-500 justify-between border-b-2 border-gray-300 border-solid"
                >
                <h1 className="pl-4 font-semibold text-xl">Mail</h1>
                <h1
                  className="font-extrabold order-last text-2xl cursor-pointer left-8"
                  onClick={() => {
                    setMailBox(false);
                  }}
                >
                 
                  <AiOutlineClose />
                </h1>
              </div>
             
              <div className="py-2 mx-3 border-b border-gray-300 border-solid">
                <h4>
                  To <b>All Client</b>
                </h4>
              </div>
              
              <div className="py-2 mx-3 border-b border-gray-300 border-solid">
                <input
                  className="border-0 outline-none w-full p-0 focus:border-0 focus:outline-0"
                  type="text"
                  placeholder="Subject"
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                />
              </div>
              {/* contant */}
              <div className="py-2 mx-3 border-gray-300 border-solid">
                <textarea
                  className="outline-none rounded-b-xl border-0 w-full p-0 focus:border-0 focus:outline-none h-60"
                  type="text"
                  onChange={(e) => {
                    setMail(e.target.value);
                  }}
                />
              </div>
              <div className="z-60 w-fit h-fit bg-gradient-to-br from-cyan-300 via-violet-300 to-violet-500 rounded-full border-white border-solid border-3 shadow-2xl">
                <div
                  className="text-3xl p-4 cursor-pointer"
                  onClick={() => {
                    SendMAil();
                  }}
                >
                  <BsSendFill />
                </div>
              </div>
            </div>
          </>
        )
      ) : role === "employee" ? (
        <></>
      ) : (
        <>
          <div className="fixed bottom-2 right-2 mr-8 sm:right-auto sm:left-8 bg-gradient-to-br from-cyan-300 via-violet-300 to-violet-500 rounded-full border-3 border-white shadow-2xl">
            <div
              className="text-3xl p-4 cursor-pointer"
              onClick={() => {
                setMailBox(true);
              }}
            >
              <AiTwotoneMail />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Innerdashborad;