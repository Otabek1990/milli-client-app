import React, { useContext } from "react";
import { Button } from "../index";
// import { BackgroundBanner } from "../../Assets";
import parse from "html-react-parser";
import { response } from "../Global/Response";
import { Context } from "../../App";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Carousel = ({ carusel }) => {
  const { lang } = useContext(Context)
  const { t } = useTranslation()
  const navigate = useNavigate()
  return (
    <div className={`${response.containerBoxPadding} bg-banner bg-cover bg-center text-left flex gap-20  w-full items-center justify-between font-raleway`}>
      <div className="w-8/12">
        <h3 className="md:text-3xl sm:text-lg text-xs capitalize font-bold">
          {carusel[`title_${lang}`]}
        </h3>
        <div className="mt-5 md:block hidden text-base capitalize opacity-60">
          {parse(carusel[`description_${lang}`])}
        </div>
        <Button

          handleClick={() => window.location.replace(carusel?.url)}
          text={`${t('banner.koproqBilish')}`}
          styleBtn={`font-raleway sm:text-base text-xs  md:px-4 px-2.5 md:py-2 py-1.5 text-white-whites bg-green-Default rounded mt-10`}
        />
      </div>
      <div className=" flex justify-center items-center w-80 h-full">
        <img className="object-cover" src={carusel.image} alt="carousel" />
      </div>
    </div>
  );
};

export default Carousel;
