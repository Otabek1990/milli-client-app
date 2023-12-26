import React, { useContext, useEffect, useState } from 'react'

import { FaRegCircleXmark } from "react-icons/fa6"

import BasketModalCard from './BasketModalCard'
import Button from '../Global/Button';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../App';
import { formatPrice } from '../../utils/priceFormatter';
import { milliyIcons } from '../../Assets';
import { useTranslation } from 'react-i18next';
import { useBasketQuery } from '../../services/basketApi';

function BasketModal() {
    const navigate = useNavigate()
    const { t } = useTranslation();
    const { state, access } = useContext(Context)
    const [showBasket, setShowBasket] = useState(false)
    const { data: basketDatas, isSuccess } = useBasketQuery()

    const handleOpenBasket = () => {
        if (access) {
            isSuccess && basketDatas?.data?.length === 0 ? navigate("/basket") : setShowBasket(true)
        }
        else {
            state.cart?.length === 0 ? navigate("/basket") : setShowBasket(true)

        }
    }

    useEffect(() => {

        const closeOnOutsideClick = (e) => {
            if (showBasket && e.target.closest('.dropdown-container') === null) {
                setShowBasket(false);
            }
        };
        document.body.addEventListener('click', closeOnOutsideClick);
        return () => {
            document.body.removeEventListener('click', closeOnOutsideClick);
        };
    }, [showBasket]);

    const handleNavigateBasket = () => {
        navigate("/basket")
        setShowBasket(false)
    }

    const overallPrice = (isSuccess && basketDatas?.data.length > 0)
        ? basketDatas?.data?.map(elem => elem.price * elem.quantity).reduce((a, b) => a + b)
        : state.cart?.reduce((a, b) => a + b.totalPrice, 0)


    return (
        <div className="relative inline-block text-left dropdown-container">
            <div>
                <button className="flex gap-x-2.5 text-base" onClick={handleOpenBasket}>
                    {milliyIcons.shoppingCart}
                    <span>{t('header.cart')} <b>({(access && isSuccess && basketDatas?.data)
                        ? basketDatas?.data?.length
                        : state.cart?.length})</b> </span>
                </button>
            </div>

            {showBasket && (
                <div className="origin-top-right rounded absolute right-0 mt-5 w-[31rem] shadow-lg border border-green-Default ring-opacity-5 bg-white-whites z-50 max-h-[38rem] overflow-y-auto scrollbar-style">
                    <div
                        className="flex flex-col relative"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        <div className="flex justify-between items-center p-5 bg-white-Default shadow-md sticky top-0">
                            <h3 className='text-xl font-semibold'>{t('header.basket')}</h3>
                            <button onClick={() => setShowBasket(false)} className="flex items-center gap-2">
                                <FaRegCircleXmark />
                                {t('header.close')}
                            </button>
                        </div>
                        <div className="p-5 h-full">
                            <span className='text-gray-400 font-normal text-base'>
                                {t('header.your')} {(isSuccess && basketDatas?.data) ? basketDatas?.data?.length : state.cart?.length} {t('header.basketItem')}
                            </span>
                            <div className="flex flex-col gap-2">
                                {access && isSuccess && basketDatas ? (
                                    basketDatas.data?.map((item, index) =>
                                        <BasketModalCard
                                            key={index}
                                            {...item}
                                            setShowBasket={setShowBasket} />)
                                )
                                    : state.cart?.map((item, index) =>
                                        <BasketModalCard
                                            key={index}
                                            {...item}
                                            setShowBasket={setShowBasket} />)
                                }
                            </div>
                        </div>
                        <div className="flex flex-col sticky bottom-0 left-0 p-5 bg-white-Default shadow-md">
                            <div className="flex justify-between">
                                <h3 className='font-semibold text-2xl'>{t('basket.all')}:</h3>
                                <span>{formatPrice(overallPrice)} {t('som')}</span>
                            </div>
                            <Button
                                styleBtn={`gap-x-2.5 rounded p-2 text-white-whites bg-green-Default text-xl text-center mt-4`}
                                text={t('header.viewCart')}
                                handleClick={handleNavigateBasket} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default BasketModal