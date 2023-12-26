import React from "react";
import { Button } from "../../../../components";
import { milliyIcons } from "../../../../Assets";
import { useNavigate } from "react-router-dom";

const LeaveComent = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/reviewform");
  };
  
  return (
    <div className="flex justify-between">
      <h3 className="sm:block hidden text-base font-bold">
        Здесь пока нет комментарий, будьте первыми!
      </h3>
      <Button
        styleBtn={`sm:w-auto w-full py-2 px-4 sm:border-none border border-green-Default sm:text-white-whites text-green-Default text-base font-raleway flex items-center justify-center gap-x-2.5 sm:bg-green-Default bg-white-Default rounded`}
        icon={milliyIcons.magicpen}
        text={`Оставить отзыв`}
        iconStyle={`sm:block hidden`}
        iconTwo={milliyIcons.magicpenHover}
        iconStyleTwo={`sm:hidden block`}
        handleClick={handleClick}
      />
    </div>
  );
};

export default LeaveComent;
