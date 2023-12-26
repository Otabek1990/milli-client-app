import React, { useContext } from "react";
import { formatDate } from "../../../../utils/formatDate";
import { Context } from "../../../../App";

const MapPurchaseMobile = ({ product, index }) => {
    const { lang } = useContext(Context);
  return (
    <div className="sm:hidden block border border-gray-lightlyGray rounded-sm bg-white-whites p-2.5">
      <div className="">
        <img
          className="h-36 w-full object-cover"
          src={product?.image}
          alt="product"
        />
      </div>
      <div className="mt-1.5">
        <p className="text-sm">{product?.product[`title_${lang}`]}</p>
        <div className="flex gap-x-1 text-xs my-1">
          <p>{product?.status},</p>
          <p>{formatDate(product?.created_at)}</p>
        </div>
        <p className="text-sm">{product?.price} сум</p>
      </div>
    </div>
  );
};

export default MapPurchaseMobile;
