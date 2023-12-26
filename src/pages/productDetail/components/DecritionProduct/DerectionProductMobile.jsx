import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const DerectionProductMobile = ({desc, modal, setModal}) => {
  return (
    <div
      className={`${
        modal ? "visible" : "invisible"
      } transition-all duration-150 ease-linear font-raleway sm:relative fixed inset-0 px-6 w-full bg-white-Default h-screen z-50`}
    >
      <div className="flex justify-between items-center sm:hidden py-5">
        <div onClick={() => setModal(false)}>
          <IoIosCloseCircleOutline className="text-3xl" />
        </div>
        <p className="text-base font-bold w-7/12">Описание</p>
      </div>
      <img className="rounded-[10px] sm:w-full mt-2.5" src={desc.img} alt="" />
      <div className="md:w-7/12 w-full">
        <h3 className="md:text-3xl sm:text-xl text-base font-bold sm:my-2.5 my-5">
          {desc.title}
        </h3>
        <p className="md:text-base text-sm">{desc.desc}</p>
      </div>
    </div>
  );
};

export default DerectionProductMobile;
