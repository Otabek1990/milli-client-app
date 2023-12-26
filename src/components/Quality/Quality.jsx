import React from "react";
import { qualityData } from "./data";
import QualityEach from "./QualityEach";
import { response } from "../Global/Response";

const Quality = () => {
  return (
    <section className={`${response.containerBoxPadding} bg-gray-lightlyGray w-full flex justify-center items-center`}>
      <div className="">
        <div className={`flex flex-wrap md:gap-7 gap-4 py-[75px]`}>
          {qualityData?.map((item) => (
            <QualityEach key={item.id} quality={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quality;
