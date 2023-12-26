import React, { useContext} from "react";
import { formatPrice } from "../../utils/priceFormatter";
import { useTranslation } from "react-i18next";
import { Context } from "../../App";
import { useNavigate } from "react-router-dom";

const Carousel2 = ({ carusel }) => {
  const { t } = useTranslation()
  const { lang } = useContext(Context)
  const navigate=useNavigate()
  return (
    <div className=" w-full flex md:flex-col flex-row md:justify-center justify-between items-center font-raleway">
      <div className="flex flex-col items-start">
        <p className="md:hidden block mb-2 text-sm font-semibold">{t('banner.kunTovari')}</p>
        <img
          onClick={() => navigate(`/product/${carusel?.item_id}`)
          }
          className="md:h-80 cursor-pointer sm:h-56 h-[120px] md:!w-full sm:w-48 !w-[120px] object-cover "
          src={carusel.image}
          alt={carusel[`title_${lang}`]}
        />

      </div>
      <div className=" flex flex-col  mt-2 items-center justify-center">
        <p className="md:text-base text-xs">{carusel.title_ln || ""} </p>
        <h3 className="md:text-2xl sm:text-lg text-base font-semibold mt-2.5">
          {formatPrice(carusel.price || "14000")}
        </h3>
      </div>
    </div>
  );
};

export default Carousel2;
