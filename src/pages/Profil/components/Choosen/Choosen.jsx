import React from "react";
import { dataProduct } from "./data";
import MapChoosen from "./MapChoosen";
import { response } from "../../../../components/Global/Response";
import { TopMobilMenu } from "../../../../components";

const Choosen = () => {
  return (
    <div className={`${response.positionAbsolute} h-screen sm:h-auto`}>
      <div className="mb-10 sm:hidden block">
        <TopMobilMenu
          textStyle={"pl-[30%]"}
          path={"/profile"}
          textMenu={"Избранное"}
        />
      </div>
      <div className={`${response.containerBoxPadding} mb-10`}>
        <h3 className="sm:block hidden text-2xl font-semibold text-black-topBlack my-10">
          Избранные
        </h3>
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-start gap-5">
          {dataProduct?.map((item, ind) => (
            <MapChoosen key={ind} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Choosen;
