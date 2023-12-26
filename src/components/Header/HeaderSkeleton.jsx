import React from "react";

const HeaderSkeleton = () => {
  return (
    <div className="w-full">
      <div className="grid w-full">
        <div className="md:flex hidden justify-between mb-7">
          <div className="bg-slate-200 rounded-md w-4/12 h-5"></div>
          <div className="bg-slate-200 rounded-md w-2/12 h-5 mr-24"></div>
        </div>
        <div className="animate-pulse flex md:flex-row flex-col gap-8 w-full ">
          <div className="md:h-[400px] sm:h-48 h-36 bg-slate-200 rounded-sm md:rounded-lg w-full"></div>
          <div className="md:h-[400px] sm:h-48 h-36 bg-slate-200 rounded-sm md:rounded-lg md:w-4/12 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSkeleton;
