import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Button from "./Button";

const TopMobilMenu = ({path, textMenu, textMenuTwo, boxStyle, textStyle, sendName}) => {
  return (
    <div className={`${boxStyle} flex items-center px-6 py-5 bg-green-Default text-white-whites`}>
      <Link className="font-bold text-3xl" to={path}>
        <MdOutlineKeyboardArrowLeft />
      </Link>
      <p className={`${textStyle} text-base font-bold`}>{textMenu}</p>
      <Button handleClick={sendName} text={textMenuTwo} />
    </div>
  );
};

export default TopMobilMenu;
