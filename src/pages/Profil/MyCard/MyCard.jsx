import React from "react";
import { response } from "../../../components/Global/Response";
import { TopMobilMenu } from "../../../components";
import { dataCard } from "./data";
import CardMap from "./CardMap";
import { milliyIcons } from "../../../Assets";

const MyCard = () => {
  return (
    <div className={`${response.positionAbsolute} h-screen sm:h-auto`}>
      <div className="mb-10 sm:hidden block">
        <TopMobilMenu
          textStyle={"pl-[30%]"}
          path={"/profile"}
          textMenu={"Мои карты"}
        />
      </div>
      <div
        className={`${response.containerBoxPadding} grid grid-cols-1 gap-y-5 pb-20`}
      >
        {dataCard.map((item, ind) => (
          <CardMap key={ind} data={item} />
        ))}
        <div className="flex flex-col items-center justify-center cursor-pointer rounded-[10px] border-2 border-gray-lightGray gap-y-4 py-6">
          <span>{milliyIcons.addCard}</span>
          <p>Привязать карту</p>
        </div>
      </div>
      <span className="bg-green-Default p-2.5 rounded-full cursor-pointer z-50 fixed bottom-20 right-6">
        {milliyIcons.foiz}
      </span>
    </div>
  );
};

export default MyCard;
