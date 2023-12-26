import React, { useContext } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../App";

const MyDetailUi = ({ profileData }) => {
  const { setAccess, setRefresh, dispatch } = useContext(Context)
  const navigate = useNavigate()
  const logout = () => {
    setAccess(null)
    setRefresh(null)
    dispatch({ type: "EMPTY_CART" })
    navigate("/")
  }
  return (
    <button
      onClick={() => {
        navigate(profileData.path)
        profileData.action && logout()
      }}
      className="py-2.5 flex justify-between items-center cursor-pointer border-b border-gray-borderGray last:border-none"
    >
      <p className={`${!profileData.icon && "text-red-danger"}`}>
        {profileData.title}
      </p>
      {profileData.icon && (
        <MdOutlineKeyboardArrowRight className="text-3xl font-extralight" />
      )}
    </button>
  );
};

export default MyDetailUi;
