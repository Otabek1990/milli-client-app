import React from "react";
import { response } from "../../../components/Global/Response";
import { TopMobilMenu } from "../../../components";
import { milliyIcons } from "../../../Assets";
import { checkProfile } from "./data";
import OrdersMap from "./OrdersMap";

const Checks = () => {
  return (
    <div className={`${response.positionAbsolute} h-screen sm:h-auto`}>
      <div className="mb-10 sm:hidden block">
        <TopMobilMenu
          textStyle={"pl-[30%]"}
          path={"/profile"}
          textMenu={"Чеки"}
        />
      </div>
      <div className={`${response.containerBoxPadding} pb-32`}>
        {checkProfile.map(item => (
            <OrdersMap key={item.id} product={item} />
        ))}
      </div>
      <span className="bg-green-Default p-2.5 rounded-full cursor-pointer z-50 fixed bottom-20 right-6">
        {milliyIcons.foiz}
      </span>
    </div>
  );
};

export default Checks;
