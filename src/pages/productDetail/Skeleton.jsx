import React from "react";

const Skeleton = () => {
  return (
    <div className="w-full">
      <div className="grid w-full">
        <div className="flex flex-col gap-y-4 mb-4">
          <div className="bg-slate-200 rounded-md w-4/12 h-5 md:block hidden"></div>
          <div className="bg-slate-200 rounded-md md:w-1/12 sm:w-2/12 w-4/12 h-5"></div>
          <div className="bg-slate-200 rounded-md md:w-2/12 sm:w-4/12 w-6/12 h-5"></div>
        </div>
        <div className="animate-pulse sm:flex gap-5 w-full hidden">
          <div className="flex gap-y-2 flex-col w-1/4">
            <div className="bg-slate-200 rounded-lg w-full h-20"></div>
            <div className="bg-slate-200 rounded-lg w-full h-20"></div>
            <div className="bg-slate-200 rounded-lg w-full h-20"></div>
            <div className="bg-slate-200 rounded-lg w-full h-20"></div>
          </div>
          <div className="h-[400px] bg-slate-200 rounded-lg w-full"></div>
          <div className="h-[400px] bg-slate-200 rounded-lg w-full md:block hidden"></div>
          <div className="h-[400px] bg-slate-200 rounded-lg w-9/12 md:block hidden"></div>
        </div>
        <div className="animate-pulse sm:hidden flex">
          <div className="bg-slate-200 rounded-lg w-full h-80"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
