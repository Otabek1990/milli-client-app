import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../App';
import { formatPrice } from '../../utils/priceFormatter';
import { useTranslation } from 'react-i18next';
import { useUpdateBasketMutation } from '../../services/basketApi';

function BasketCard({ checkedItems, setCheckedItems, title_ln, cart_id, image, checked, price, quantity, id, title_ru, }) {
    const { t } = useTranslation()
    const [count, setCount] = useState(quantity)

    const { access, dispatch, lang } = useContext(Context)
    const [updateBasketCount] = useUpdateBasketMutation()
    const jamiNarx = count * (price);

    const decrementCount = () => {
        if (count > 1) {
            setCount(count => count - 1);
        }
    };
    const incrementCount = () => {
        setCount(count => count + 1);
    };

    const handleInputChange = (e) => {
        const newValue = parseInt(e.target.value, 10);
        if (!isNaN(newValue)) {
            setCount(newValue);
        }
    };

    const handleCheckInput = e => {
        if (access) {
            setCheckedItems(checkedItems.includes(cart_id)
                ? checkedItems.filter(id => id !== cart_id)
                : [...checkedItems, cart_id]);
            return;
        }
        dispatch({ type: "CHECKED_ITEM", payload: { id, checked: e.target.checked } })
    }

    useEffect(() => {
        if (access) {
            const updatedBasketCount = {
                id: cart_id,
                quantity: count
            };
            updateBasketCount(updatedBasketCount);
            return
        }
        dispatch({ type: "UPDATE_CART", payload: { id, quantity: count } })
    }, [count])

    const checkedd = access ?
        checkedItems.includes(cart_id)
        : checked

    return (
        <>
            {/* Basket Card MD UI ============= */}
            <div className="md:grid lg:grid-cols-8 md:grid-cols-8 hidden items-start py-5">
                <div className={`col-span-4  flex items-center gap-5 ${count === 0 ? "opacity-25" : "opacity-100"}`}>
                    <input
                        checked={checkedd}
                        onChange={handleCheckInput}
                        type="checkbox"
                        className='w-4 h-4 rounded-lg border border-solid border-gray-300 bg-white-whites'
                    />
                    <img className='w-28 h-28 border border-gray-400 rounded-lg' src={image} alt="" />
                    <div className="flex flex-col">
                        <div className={`flex gap-2 justify-end mr-6 ${count === 0 ? "opacity-25" : "opacity-100"} `}>
                            <h3 className='font-bold text-2xl'>{formatPrice(price) || 0}</h3>
                            <b className='font-bold text-lg mt-1'>{t('som')}</b>
                        </div>
                        <h4 className='font-bold text-base'>{lang === "ln" ? title_ln : title_ru}</h4>
                        {/* <p className='font-normal text-base text-gray-500'>{t('basket.color')}: <span className='font-bold text-gray-600'>Pacific Blue</span></p> */}
                        {/* <p className='font-normal text-base text-gray-500'>{t('basket.shop')}: <span className='font-bold text-gray-600'>Mac</span></p> */}
                    </div>
                </div>
                <div className="col-span-2 flex justify-center items-center gap-2">
                    <button disabled={count === 1} onClick={decrementCount} className={`rounded-md ${count === 1 ? "bg-green-200" : "bg-green-500"} w-8 h-8 text-white font-semibold text-xl`}>
                        -
                        </button>
                    <input
                        value={count}
                        onChange={handleInputChange}
                        type="number"
                        className='h-8 rounded-md border border-solid border-gray-300 w-8 flex items-center justify-center outline-green-500 text-center'
                    />
                    <button onClick={incrementCount} className='rounded-md bg-green-500 w-8 h-8 text-white font-semibold text-xl'>+</button>
                </div>
                <div className={`col-span-2 lg:flex md:flex sm:hidden gap-2 justify-end mr-6 ${count === 0 ? "opacity-25" : "opacity-100"} `}>
                    <h3 className='font-bold text-2xl'>{formatPrice(jamiNarx || price || 0)}</h3>
                    <b className='font-bold text-lg mt-1'>{t('som')}</b>
                </div>
            </div>
            {/* Basket Card SM UI ============ */}

            <div className='md:hidden grid grid-cols-8 py-4 justify-between'>
                <div className="col-span-3">
                    <img className='h-24 w-24 border border-gray-400 rounded-lg' src={image} alt="" />

                </div>
                <div className="col-span-4 flex flex-col gap-1">
                    <h1 className='text-base flex gap-1'>
                        <span className='font-bold'>{formatPrice(price || 0)}</span>
                        <b className='font-bold'>{t('som')}</b>
                    </h1>
                    <h1 className='text-base font-bold'>
                        {`title_${lang}`}
                    </h1>
                    <p className='font-normal text-sm text-gray-500'>{t('basket.shop')}: Mac</p>
                    <p className='font-normal text-sm text-gray-500 mt-4'>{formatPrice(jamiNarx || price || 0)} {t('som')} / {t('basket.item')}</p>
                    <div className="flex items-center gap-2">
                        <button
                            disabled={count === 1}
                            onClick={decrementCount}
                            className={`rounded-md ${count === 1 ? "bg-green-200" : "bg-green-500"} w-8 h-8 text-white font-semibold text-xl`}>
                            -
                        </button>
                        <input
                            value={count}
                            onChange={handleInputChange}
                            type="number"
                            className='h-8 rounded-md border border-solid border-gray-300 w-8 flex items-center justify-center outline-green-500 text-center'
                        />
                        <button onClick={incrementCount} className='rounded-md bg-green-500 w-8 h-8 text-white font-semibold text-xl'>+</button>
                    </div>
                </div>
                <div className="col-span-1 justify-end flex">
                    <input
                        checked={checkedd}
                        onChange={handleCheckInput}
                        type="checkbox"

                        className='w-4 h-4 rounded-lg border border-solid border-gray-300 bg-white-whites'
                    />
                </div>
            </div>
        </>
    )

}

export default BasketCard