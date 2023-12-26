import React from "react";
import { LabtopGroup } from "../../Assets";

const InfoBox = ({ title, style }) => {
  return (
    <div
      className={`${style} overflow-hidden md:h-[200px] sm:h-[120px] h-[67px] relative md:pl-12 pl-2 sm:pl-4 rounded text-white-Default flex items-center`}
    >
      <p className="z-10 md:text-3xl text-sm sm:text-xl font-raleway font-extrabold">{title}</p>
      <img className="absolute sm:-right-20 -right-16 md:right-0 z-0 md:h-auto h-[67px] sm:h-[120px]" src={LabtopGroup} alt="labtop" />
    </div>
  );
};

export default InfoBox;
