import React, { useContext } from "react";
import { mobileMenu } from "./components/SubNavbar/data";
import MobileMenu from "./mobileComponent/MobileMenu";
import { ProfilImg, milliyIcons } from "../../Assets";
import { Link, NavLink } from "react-router-dom";
import { response } from "../../components/Global/Response";
import { Context } from "../../App";

const MobileProfile = () => {
  const {userName}=useContext(Context)
  return (
    <section className={response.positionAbsolute}>
      <div className="px-6 py-5 flex justify-between items-center bg-green-Default">
        <Link to={"/notification"}>{milliyIcons.notification}</Link>
        <p className="text-base font-bold text-white-whites">
          Привет, {userName}
        </p>
        <Link to={"/mydetail"} className="relative">
          <span className="absolute bottom-0 -left-2">
            {milliyIcons.settingProfil}
          </span>
          <img src={ProfilImg} alt="avatar" />
        </Link>
      </div>
      <div className={`${response.containerBoxPadding} h-screen px-6 mt-8`}>
        {mobileMenu.map((item) => (
          <NavLink
            to={`${item.link}`}
            style={{ background: `${item.back}` }}
            key={item.id}
            className="flex gap-x-4 py-4 px-5 rounded-[5px] border border-gray-borderGray mb-2.5 cursor-pointer text-base font-raleway font-bold"
          >
            {item.icon} {item.title}
          </NavLink>
        ))}
        {/* {mobileMenu.map((item) => (
          <MobileMenu key={item.id} mobileMenu={item} />
        ))} */}
      </div>
      <span className="bg-green-Default p-2.5 rounded-full cursor-pointer z-50 fixed bottom-20 right-6">
        {milliyIcons.foiz}
      </span>
    </section>
  );
};

export default MobileProfile;
