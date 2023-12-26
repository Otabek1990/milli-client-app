import React from "react";

const CardMap = ({ data }) => {
  return (
    <div className="text-base rounded-[10px] bg-gray-lightlyGray p-5">
      <p>{data.title}</p>
      <div className="mt-12 flex items-center justify-between">
        <div className="flex gap-x-2.5 items-center">
          <p>{data.cart}</p>
          <div className="rounded-full w-1 h-1 bg-black-topBlack"></div>
          <div className="rounded-full w-1 h-1 bg-black-topBlack"></div>
          <p>{data.number}</p>
        </div>
        <img src={data.img} alt="cart" />
      </div>
    </div>
  );
};

export default CardMap;
