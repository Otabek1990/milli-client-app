import React from "react";
import LeaveComent from "./LeaveComent";
import ComentLeft from "./ComentLeft";
import { IoIosCloseCircleOutline } from "react-icons/io";

const ReviewTwo = ({ modalTwo, setModalTwo }) => {
  
  return (
    <section
      className={`${
        modalTwo ? "visible" : "invisible"
      } transition-all duration-150 ease-linear font-raleway sm:relative absolute inset-0 px-6 bg-white-Default h-auto z-50 md:w-9/12 w-full`}
    >
      <div className="flex justify-between items-center sm:hidden py-5">
        <div onClick={() => setModalTwo(false)}>
          <IoIosCloseCircleOutline className="text-3xl" />
        </div>
        <p className="text-base font-bold w-8/12">Отзывы покупателей</p>
      </div>
      <LeaveComent />
      <ComentLeft />
    </section>
  );
};

export default ReviewTwo;
