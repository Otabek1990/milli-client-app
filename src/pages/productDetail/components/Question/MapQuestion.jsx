import React from "react";

const MapQuestion = ({ question }) => {
  // 
  return (
    <>
      <div
        className={`text-base font-raleway py-5 flex sm:flex-row flex-col justify-between gap-x-44`}
      >
        <div className="flex sm:flex-col flex-row sm:justify-start justify-between gap-y-5 text-gray-lightGray">
          <h4 className="font-bold text-black-topBlack">{question.name}</h4>
          <div className="flex sm:flex-col flex-row items-center">
            <p className="sm:pb-5 pb-0">{question.address}</p>
            <div className="text-xs flex sm:flex-col flex-row sm:items-start items-center">
              <p className="sm:px-0 px-2.5">{question.day}</p>
              <p>{question.time}</p>
            </div>
          </div>
        </div>
        <div className="sm:w-8/12 w-full sm:mt-0 mt-5">
          <p>{question.desc}</p>
        </div>
      </div>
      <div
        className={`${
          question.line && "w-full border-b-2 border-gray-borderGray my-5"
        }`}
      ></div>
    </>
  );
};

export default MapQuestion;
