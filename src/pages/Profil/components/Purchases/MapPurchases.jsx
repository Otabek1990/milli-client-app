import React, { useContext } from "react";
import { formatDate } from "../../../../utils/formatDate";
import { Context } from "../../../../App";

const MapPurchases = ({ product, index }) => {
  const { lang } = useContext(Context);
  return (
    <>
      <tr className="md:text-base text-sm ">
        <td>{index + 1}</td>
        <td className="flex items-center justify-center">
          <img
            className="h-16 w-16 object-cover"
            src={product?.image}
            alt="product"
          />
        </td>
        <td>{product?.product[`title_${lang}`]}</td>
        <td>{product?.price} сум</td>
        <td>{product?.quantity} dona</td>
        <td>{formatDate(product?.created_at)}</td>
        <td>{product?.status}</td>
      </tr>

     
    </>
  );
};

export default MapPurchases;
