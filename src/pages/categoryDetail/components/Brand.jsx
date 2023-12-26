import React from "react";
import RadioInput from "../../../components/Inputs/RadioInput";
import { useTranslation } from "react-i18next";


const Brand = ({ dataInfo, headTitle, viewMore }) => {
  // 
  const { t } = useTranslation()
  return (
    <div>
      <div className="font-raleway text-base flex justify-between">
        <p className="font-bold">{headTitle}</p>
        <p className="text-gray-lightGray">{t('categoryDetail.sbros')}</p>
      </div>
      <div className="w-full">
        {dataInfo?.map((item, ind) => (
          <RadioInput key={ind} data={item} />
        ))}
      </div>
      <p className="font-bold text-green-Default mt-6">{viewMore}</p>
    </div>
  );
};

export default Brand;