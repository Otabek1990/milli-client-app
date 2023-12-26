import React from "react";
import { formatPrice } from "../../utils/priceFormatter";

function OrderCard({ title, image, product_item, price, count, quantity }) {
    return (
        <>
            <div className="sm:grid grid-cols-8 items-center py-5 hidden">
                <div className={`col-span-4 flex items-center gap-5`}>
                    <img
                        className="w-28 h-28 border border-gray-400 rounded-lg"
                        src={image}
                        alt=""
                    />
                    <div className="flex flex-col">
                        <h4 className="font-bold text-base">
                            {title || product_item?.artikul_ln} fgregagsdgda dfsdfsd
                        </h4>
                    </div>
                </div>
                <div className="col-span-2 flex justify-center items-center gap-2">
                    <input
                        value={quantity}
                        // onChange={handleInputChange}
                        type="number"
                        className="h-8 rounded-md border border-solid border-gray-300 w-8 flex items-center justify-center outline-green-500 text-center"
                    />
                </div>
                <div className={`col-span-2 flex gap-2 justify-end mr-6`}>
                    <h3 className="font-bold text-2xl">
                        {formatPrice(price) || formatPrice(product_item?.price) || 0}
                    </h3>
                    <b className="font-bold text-lg mt-1">сум</b>
                </div>
            </div>

            <div className="sm:hidden flex font-raleway border-b border-gray-lightlyGray pb-5 mb-5">
                <div className="mr-5">
                    <img
                        className="w-28 h-28 border border-gray-400 rounded-lg"
                        src={image}
                        alt=""
                    />
                </div>
                <div className="">
                    <div className={`font-bold text-base flex items-center gap-1`}>
                        <h3 className="">{formatPrice(price) || formatPrice(product_item?.price) || 0}</h3>
                        <b className="">сум</b>
                    </div>
                    <div className="flex flex-col my-2.5">
                        <h4 className="font-bold text-base">
                            {title || product_item?.artikul_ln} fgregagsdgda dfsdfsd
                        </h4>
                    </div>
                    <div className="flex items-center gap-2.5">
                        <div className="">
                            <input
                                value={quantity}
                                // onChange={handleInputChange}
                                type="number"
                                className="h-10 rounded-md border border-solid border-gray-300 w-10 flex items-center justify-center outline-green-500 text-center"
                            />
                        </div>
                        <div className={`flex text-gray-lightGray text-sm font-bold`}>
                            <h3 className="">
                                {formatPrice(price) || formatPrice(product_item?.price) || 0}                            </h3>
                            <b className="ml-1">сум/шт</b>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderCard;
