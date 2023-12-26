import React from "react";

const OrderProduct = ({ data }) => {
  return (
    <div className="flex w-full mb-2.5 font-raleway text-base">
      <img src={data.img} alt="product" />
      <div className="ml-4 w-full">
        <p>{data.nameProduct}</p>
        <p className="text-xs text-gray-lightGray">Цвет: {data.color}</p>
        <div className="flex justify-between items-center mt-1.5">
          <p>2 шт.</p>
          <p>{data.price} сум</p>
        </div>
      </div>
    </div>
  );
};

export default OrderProduct;
