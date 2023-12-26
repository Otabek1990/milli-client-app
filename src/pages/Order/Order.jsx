import React, { useContext, useState } from "react";
import { Context } from "../../App";
import { Button } from "../../components";
import OrderCard from "./OrderCard";
import { payments } from "./data";
import { useBasketQuery, useOrderMutation } from "../../services/basketApi";
import { useNavigate } from "react-router-dom";
import { response } from "../../components/Global/Response";
import { milliyIcons } from "../../Assets";
import { formatPrice } from "../../utils/priceFormatter";

function Order() {
    const { access, setOpenAlert } = useContext(Context);

    const [selectedItem, setSelectedItem] = useState(null);
    const { data: basketDatas, isSuccess } = useBasketQuery();
    const [order] = useOrderMutation();

    const navigate = useNavigate();
    const handleRadioClick = (index) => {
        setSelectedItem(index);
    };
    const handleOrder = async () => {
        let carts = isSuccess && basketDatas?.data?.map((elem) => elem.cart_id);
        let obj = { carts };

        // await axios.post(`${baseUrl}api/v1/order/`, obj, {
        //     headers: {
        //         Authorization: `Bearer ${JSON.parse(
        //             localStorage.getItem("access-token")
        //         )}`,
        //     },
        // })
        await order({ orderItem: obj, access }).then((res) => {
            setOpenAlert(true)
            navigate("/profile/purchases");
        });
    };
    const overallPrice = basketDatas?.data?.reduce(
        (total, product) => total + product.totalPrice,
        0
    );

    return (
        <div
            className={`${response.containerBoxPadding} sm:relative absolute bg-white-Default w-full top-0 sm:pb-0 pb-64`}
        >
            <div className="flex justify-center shadow-shadowBoxThree sm:hidden">
                <h1 className="font-bold text-base py-2.5">
                    Оформление
                </h1>
            </div>
            <div className="w-full py-3">
                <div className="flex gap-7 items-start">
                    <div className="flex flex-col md:w-3/4 w-full border rounded-md sm:border-solid border-none border-global-divider sm:p-5 p-0 mt-7 md:gap-10 gap-5">
                        <h1 className="font-bold md:text-4xl text-xl sm:block hidden">
                            Оформления покупки
                        </h1>
                        <div className="flex flex-col gap-5">
                            <h3 className="font-semibold md:text-2xl sm:text-xl text-base">
                                Ваши данные
                            </h3>
                            <input
                                className="border rounded-md border-gray-300 px-5 py-2 md:w-2/4 w-full"
                                type="text"
                                placeholder="Ваш телефон*"
                            />
                            <div className="flex md:flex-row flex-col gap-5">
                                <input
                                    className="border rounded-md border-gray-300 px-5 py-2 w-full"
                                    type="text"
                                    placeholder="Ваша имя*"
                                />
                                <input
                                    className="border rounded-md border-gray-300 px-5 py-2 w-full"
                                    type="text"
                                    placeholder="Ваша Фамилия*"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex justify-between pb-5 mb-5 border-b border-gray-lightlyGray">
                                <h3 className="font-semibold md:text-2xl text-lg">Ваш заказ</h3>
                                <button className="font-normal text-base text-gray-400">
                                    Изменить
                                </button>
                            </div>
                            {basketDatas?.data?.map((item) => (
                                <OrderCard key={item.id} {...item} />
                            ))}
                        </div>
                        <div className="flex flex-col gap-5">
                            <h3 className="font-semibold md:text-2xl text-xl">
                                Способы оплаты
                            </h3>
                            <div className="grid sm:grid-cols-2 grig-cols-1 gap-7">
                                {payments.map((item, index) => (
                                    <label
                                        key={index}
                                        className={`border rounded-md border-gray-300 flex items-center gap-2 w-360 p-4 font-bold text-base cursor-pointer`}
                                    >
                                        <input
                                            type="radio"
                                            id={`radioOption-${index}`}
                                            name="radioGroup"
                                            className="hidden"
                                            checked={selectedItem === index}
                                            onChange={() => handleRadioClick(index)}
                                        />
                                        <span
                                            className={`cursor-pointer flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300 border ${selectedItem === index
                                                ? "border-[6px] border-green-Default"
                                                : "border-gray-400"
                                                }`}
                                        >
                                            {/* Custom styling for the selected state */}
                                            {/* <span
                                                className={`w-3 h-3 bg-blue-500 rounded-full transition-all duration-300 transform ${selectedItem === index ? 'scale-100' : 'scale-0'
                                                    }`}
                                            ></span> */}
                                        </span>
                                        <span>{item}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col items-start gap-5">
                            <h3 className="font-semibold md:text-2xl text-xl">Ваши отзывы</h3>
                            <textarea
                                className="border border-gray-400 rounded py-2 px-5 md:w-[540px] w-full h-[114px] resize-none"
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                placeholder="Пишите ваш отзыв"
                            ></textarea>
                            <button className="bg-green-Default text-white-Default rounded px-4 py-2">
                                Отправить отзыв
                            </button>
                        </div>
                    </div>

                    <div className="md:w-1/4 w-full bg-white-Default md:relative fixed bottom-8 sm:bottom-0 left-0 rounded-md border border-solid border-global-divider p-5 mt-7 flex items-center sm:items-start justify-between sm:flex-col flex-row sm:pb-0 ">
                        <div className="flex w-full md:flex-col flex-col-reverse md:gap-y-7 gap-y-2 md:mb-7 mb-3">
                            <div className="flex justify-between w-full">
                                <h1 className="font-bold sm:block hidden md:text-3xl text-xl">
                                    Итого:
                                </h1>
                                <div className="flex md:items-end items-center gap-1">
                                    <h2 className="sm:text-xl text-base font-bold text-green-Default text-left">
                                        {formatPrice(overallPrice) || 0}
                                    </h2>
                                    <p className="font-bold sm:text-base text-sm">сум</p>
                                </div>
                            </div>
                            <span className="font-semibold text-lg text-gray-400">
                                Товары {basketDatas?.data?.length || 0} шт.
                            </span>
                        </div>
                        <Button
                            handleClick={handleOrder}
                            styleBtn={
                                "bg-green-Default text-white-Default p-2 rounded w-full"
                            }
                            text={"Оформить заказ"}
                        />
                        <div className="sm:flex hidden items-center gap-2 md:mt-7 pt-4 pb-14">
                            <input type="checkbox" className="md:w-8 md:h-8 w-4 h-4" />
                            <label className="text-xs font-normal">
                                Согласен с условиями правил пользования торговой площадкой и
                                правилами возврата
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <span className="bg-green-Default p-2.5 rounded-full cursor-pointer z-50 fixed bottom-36 md:bottom-10 sm:bottom-64 right-6">
                {milliyIcons.foiz}
            </span>
        </div>
    );
}

export default Order;
