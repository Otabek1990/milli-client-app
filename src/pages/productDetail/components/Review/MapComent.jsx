import React from "react";
// import Rating from "@mui/material/Rating";
// import Stack from "@mui/material/Stack";

const MapComent = ({ commentUser }) => {
  return (
    <div className="text-base font-raleway py-5 flex sm:flex-row flex-col justify-between gap-x-48">
      <div className="flex sm:flex-col flex-row sm:justify-start justify-between gap-y-5 text-gray-lightGray">
        <h4 className="font-bold text-black-topBlack">{commentUser.name}</h4>
        <div className="flex sm:flex-col flex-row items-center">
          <p className="sm:pb-5 pb-0">{commentUser.address}</p>
          <div className="text-xs flex sm:flex-col flex-row sm:items-start items-center">
            <p className="sm:px-0 px-2.5">{commentUser.day}</p>
            <p>{commentUser.time}</p>
          </div>
        </div>
      </div>
      <div className="sm:mt-0 mt-5">
        <div className="mb-5">
          {/* <Stack spacing={1}>
            <Rating name="half-rating" defaultValue={2} precision={1} />
          </Stack> */}
        </div>
        <p>{commentUser.desc}</p>
        <div className="flex gap-2.5 mt-5">
          {commentUser.img && (
            <div className="sm:w-24 w-14 sm:h-24 h-14 rounded-[5px] bg-gray-backgroundBox"></div>
          )}
          {commentUser.img && (
            <div className="sm:w-24 w-14 sm:h-24 h-14 rounded-[5px] bg-gray-backgroundBox"></div>
          )}
          {commentUser.img && (
            <div className="sm:w-24 w-14 sm:h-24 h-14 rounded-[5px] bg-gray-backgroundBox"></div>
          )}
          {commentUser.img && (
            <div className="sm:w-24 w-14 sm:h-24 h-14 rounded-[5px] bg-gray-backgroundBox"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MapComent;
