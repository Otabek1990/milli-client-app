import React from "react";
import { Link } from "react-router-dom";
import { Avatar, milliyIcons } from "../../../Assets";
import { profileInfo } from "./data";
import MyDetailUi from "./MyDetailUi";
import { response } from "../../../components/Global/Response";
import { TopMobilMenu } from "../../../components";

const MyDetail = () => {
  
  return (
    <section className={`${response.positionAbsolute} font-raleway text-base text-black-topBlack h-screen`}>
      <TopMobilMenu textStyle={'pl-[30%]'} path={'/profile'} textMenu={'Мои данные'} />
      <div className="flex items-center gap-4 px-6 my-5">
        <div className="relative">
          <img src={Avatar} alt="avatar" />
          <span className="absolute top-6 left-6">{milliyIcons.camera}</span>
        </div>
        <p>Имя Фамилия</p>
      </div>
      <div className="px-6">
        {profileInfo.map((item) => (
          <MyDetailUi key={item.id} profileData={item} />
        ))}
      </div>
      <span className="bg-green-Default p-2.5 rounded-full cursor-pointer z-50 fixed bottom-20 right-6">
        {milliyIcons.foiz}
      </span>
    </section>
  );
};

export default MyDetail;
