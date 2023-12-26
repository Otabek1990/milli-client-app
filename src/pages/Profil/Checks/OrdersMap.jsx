import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import OrderProduct from "./OrderProduct";

const OrdersMap = ({ product }) => {
  const [activeBottom, setActiveBottom] = useState(false);

  return (
    <div className="border-b border-black-Default pb-3 mb-7">
      <div className="font-raleway border-b border-gray-lightlyGray pb-2.5 mb-2.5">
        <p className="text-base font-bold mb-2.5">ID заказа {product.id}</p>
        <div className="flex justify-between items-center">
          <p className="text-gray-lightGray">Статус:</p>
          <p className="text-black-topBlack text-xs">{product.status}</p>
        </div>
        <div className="flex justify-between items-center py-1">
          <p className="text-gray-lightGray">Дата заказа:</p>
          <p className="text-black-topBlack text-xs">{product.date}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-lightGray">Сумма заказа:</p>
          <p className="text-black-topBlack text-xs">{product.price}</p>
        </div>
      </div>
      <div
        onClick={() => setActiveBottom(!activeBottom)}
        className="cursor-pointer"
      >
        <div className="flex justify-between items-center">
          <p className="text-base">2 товара</p>
          {activeBottom ? (
            <IoIosArrowDown className="text-2xl" />
          ) : (
            <IoIosArrowUp className="text-2xl" />
          )}
        </div>
        {activeBottom && (
          <div className="mt-4">
            {product?.goods?.map((item, ind) => (
              <OrderProduct key={ind} data={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersMap;
