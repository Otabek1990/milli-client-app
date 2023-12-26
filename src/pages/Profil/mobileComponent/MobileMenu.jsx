import React from "react";

const MobileMenu = ({ mobileMenu }) => {
  // 
  return (
    <div
      className="flex gap-x-4 py-4 px-5 rounded-[5px] border border-gray-borderGray mb-2.5 cursor-pointer"
      style={{ background: `${mobileMenu.back}` }}
    >
      <span>{mobileMenu.icon}</span>
      <p className="text-base font-raleway font-bold">{mobileMenu.title}</p>
    </div>
  );
};

export default MobileMenu;
