import React from "react";
import { Boxes, PersonBox } from "../../Assets";
import { Button } from "../index";
import { response } from "../Global/Response";
import { useTranslation } from "react-i18next";

const Supplier = () => {
  const { t } = useTranslation()
  return (
    <section className={`${response.containerBox}`}>
      <div
        style={{ boxShadow: "0px 0px 20px 3px rgba(0, 0, 0, 0.15)" }}
        className="flex flex-col-reverse md:flex-row md:items-center items-end justify-end sm:p-5 p-2 my-[50px] bg-white-whites rounded-[10px] relative md:h-[440px] sm:h-[300px] h-[202px]"
      >
        <div className="">
          <img
            className="absolute w-[106px] sm:w-52 md:w-auto h-auto top-12 md:top-0 left-0"
            src={Boxes}
            alt="boxes"
          />
          <img
            className="absolute w-32 sm:w-64 md:w-auto z-10 bottom-0 md:left-64 sm:left-36 left-[60px]"
            src={PersonBox}
            alt="person box"
          />
        </div>
        <div className="font-raleway text-right md:text-left md:w-[500px] sm:w-[350px] w-[280px] md:mr-28 mr-0 z-20">
          <h2 className="md:text-4xl sm:text-2xl text-xl font-bold">
            {t('supplier.title1')}
          </h2>
          <p className="font-semibold md:text-xl sm:text-base text-[10.5px] sm:mt-5 mt-2 sm:mb-10 mb-4">
            {t('supplier.title2')}

          </p>
          <Button
            text={t('supplier.btn')}
            styleBtn={`sm:px-4 px-2 sm:py-2 py-1 text-base font-raleway text-white-whites rounded border border-gray-borderGray bg-green-Default`}
          />
        </div>
      </div>
    </section>
  );
};

export default Supplier;
