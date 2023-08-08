import React, { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
const Status = () => {
  return (
    <>
      <div className="flex justify-between items-center my-5 gap-4">
        <div className="w-1/3 rounded-md shadow-xl bg-green-300 p-5 h-44 cursor-pointer ">
          <AiOutlineCheckCircle className="w-20 h-10" />
          <span className="text-xl leading-loose tracking-wide">Success</span>
          <p>total lead</p>
        </div>
        <div className="w-1/3 rounded-md shadow-xl bg-purple-200 p-5 h-44 cursor-pointer">
          <AiOutlineClockCircle className="w-20 h-10" />
          <span className="text-xl leading-loose tracking-wide">Pending</span>
          <p>total lead</p>
        </div>
        <div className="w-1/3 rounded-md shadow-xl bg-red-400 p-5 h-44 cursor-pointer">
          <AiOutlineCloseCircle className="w-20 h-10" />
          <span className="text-xl leading-loose tracking-wide">Failed</span>
          <p>total lead</p>
        </div>
      </div>
    </>
  );
};

export default Status;
