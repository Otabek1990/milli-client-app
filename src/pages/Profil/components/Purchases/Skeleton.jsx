import React from "react";
import { response } from "../../../../components/Global/Response";

const Skeleton = () => {
  return (
    <>
      <div
        className={`${response.containerBoxPadding} sm:grid hidden w-full animate-pulse mt-3`}
      >
        <div className="flex px-5 gap-x-16 items-center">
          <div className="bg-slate-200 rounded-md w-7 h-7"></div>
          <div className="bg-slate-200 rounded-md w-20 h-5"></div>
          <div className="flex gap-x-[90px] items-center">
            <div className="bg-slate-200 rounded-md w-28 h-5"></div>
            <div className="bg-slate-200 rounded-md w-28 h-5"></div>
            <div className="bg-slate-200 rounded-md w-28 h-5"></div>
            <div className="bg-slate-200 rounded-md w-28 h-5"></div>
            <div className="bg-slate-200 rounded-md w-28 h-5"></div>
          </div>
        </div>
        <div className="bg-slate-200 h-1 w-full my-1"></div>
        <div className="flex px-5 gap-x-16 items-center">
          <div className="bg-slate-200 rounded-md w-7 h-7"></div>
          <div className="bg-slate-200 rounded-md w-16 h-16"></div>
          <div className="bg-slate-200 rounded-md w-40 h-5"></div>
          <div className="bg-slate-200 rounded-md w-28 h-5"></div>
          <div className="bg-slate-200 rounded-md w-28 h-5"></div>
          <div className="bg-slate-200 rounded-md w-44 h-5"></div>
          <div className="bg-slate-200 rounded-md w-32 h-5"></div>
        </div>
        <div className="bg-slate-200 h-1 w-full my-1"></div>
        <div className="flex px-5 gap-x-16 items-center">
          <div className="bg-slate-200 rounded-md w-7 h-7"></div>
          <div className="bg-slate-200 rounded-md w-16 h-16"></div>
          <div className="bg-slate-200 rounded-md w-40 h-5"></div>
          <div className="bg-slate-200 rounded-md w-28 h-5"></div>
          <div className="bg-slate-200 rounded-md w-28 h-5"></div>
          <div className="bg-slate-200 rounded-md w-44 h-5"></div>
          <div className="bg-slate-200 rounded-md w-32 h-5"></div>
        </div>
        <div className="bg-slate-200 h-1 w-full my-1"></div>
        <div className="flex px-5 gap-x-16 items-center">
          <div className="bg-slate-200 rounded-md w-7 h-7"></div>
          <div className="bg-slate-200 rounded-md w-16 h-16"></div>
          <div className="bg-slate-200 rounded-md w-40 h-5"></div>
          <div className="bg-slate-200 rounded-md w-28 h-5"></div>
          <div className="bg-slate-200 rounded-md w-28 h-5"></div>
          <div className="bg-slate-200 rounded-md w-44 h-5"></div>
          <div className="bg-slate-200 rounded-md w-32 h-5"></div>
        </div>
        <div className="bg-slate-200 h-1 w-full my-1"></div>
        <div className="flex px-5 gap-x-16 items-center">
          <div className="bg-slate-200 rounded-md w-7 h-7"></div>
          <div className="bg-slate-200 rounded-md w-16 h-16"></div>
          <div className="bg-slate-200 rounded-md w-40 h-5"></div>
          <div className="bg-slate-200 rounded-md w-28 h-5"></div>
          <div className="bg-slate-200 rounded-md w-28 h-5"></div>
          <div className="bg-slate-200 rounded-md w-44 h-5"></div>
          <div className="bg-slate-200 rounded-md w-32 h-5"></div>
        </div>
        <div className="bg-slate-200 h-1 w-full my-1"></div>
        <div className="flex px-5 gap-x-16 items-center">
          <div className="bg-slate-200 rounded-md w-7 h-7"></div>
          <div className="bg-slate-200 rounded-md w-16 h-16"></div>
          <div className="bg-slate-200 rounded-md w-40 h-5"></div>
          <div className="bg-slate-200 rounded-md w-28 h-5"></div>
          <div className="bg-slate-200 rounded-md w-28 h-5"></div>
          <div className="bg-slate-200 rounded-md w-44 h-5"></div>
          <div className="bg-slate-200 rounded-md w-32 h-5"></div>
        </div>
      </div>
      <div
        className={`${response.containerBoxPadding} grid grid-cols-2 gap-5 w-full animate-pulse sm:hidden`}
      >
        <div className="bg-slate-200 rounded-sm w-full h-56"></div>
        <div className="bg-slate-200 rounded-sm w-full h-56"></div>
        <div className="bg-slate-200 rounded-sm w-full h-56"></div>
        <div className="bg-slate-200 rounded-sm w-full h-56"></div>
      </div>
    </>
  );
};

export default Skeleton;
