
import React from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineClockCircle } from 'react-icons/ai';

const Status = ({ Success, Pending, Failed }) => {
  return (
    <>
      <div className="flex gap-2 justify-around mb-8">
        <div className="w-80 rounded-md shadow-xl bg-green-300 p-5 h-44 cursor-pointer">
          <AiOutlineCheckCircle className="w-20 h-10" />
          <span className="text-2xl leading-loose tracking-wide">Success</span>
          <p className='uppercase'>{Success} total lead</p>
        </div>
        <div className="w-80 rounded-md shadow-xl bg-purple-200 p-5 h-44 cursor-pointer">
          <AiOutlineClockCircle className="w-20 h-10" />
          <span className="text-2xl leading-loose tracking-wide">Pending</span>
          <p className='uppercase'>{Pending} total lead</p>
        </div>
        <div className="w-80 rounded-md shadow-xl bg-red-400 p-5 h-44 cursor-pointer">
          <AiOutlineCloseCircle className="w-20 h-10" />
          <span className="text-2xl leading-loose tracking-wide">Failed</span>
          <p className='uppercase'>{Failed} total lead</p>
        </div>
      </div>
    </>
  );
};

export default Status;
