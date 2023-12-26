import React from "react";
import { InputRadio } from "../index";

const Brand = ({ dataInfo, headTitle, viewMore }) => {
  // 
  return (
    <div>
      <div className="font-raleway text-base flex justify-between">
        <p className="font-bold">{headTitle}</p>
        <p className="text-gray-lightGray">Сбросить</p>
      </div>
      <div className="w-full">
        {dataInfo?.map((item, ind) => (
          <InputRadio key={ind} data={item} />
        ))}
      </div>
      <p className="font-bold text-green-Default mt-6">{viewMore}</p>
    </div>
  );
};

export default Brand;
