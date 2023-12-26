import React, { useContext } from 'react'
import BasketCard from './BasketCard';
import { formatPrice } from '../../utils/priceFormatter';
import { Button } from '../../components';
import { Context } from '../../App';
import { useBasketQuery } from '../../services/basketApi';
import { useTranslation } from 'react-i18next';

function BasketUI({ overallPrice, handleDelete, state, orderBasket, setCheckedItems, checkedItems }) {
    const { access, dispatch } = useContext(Context);
    const { data: basketDatas, isSuccess } = useBasketQuery()
    const { t } = useTranslation();
    const totalBasketItems=access ? (isSuccess &&  basketDatas?.data?.length) : state?.cart?.length;
    

    const handleSelectAll = (e) => {
        if (access) {
            const cartIds = e.target.checked
                ? basketDatas?.data?.map(elem => elem.cart_id)
                : [];
            setCheckedItems(cartIds);
            return;
        }
        dispatch({ type: "CHECKED_ALL_ITEMS", payload: e.target.checked })
    }
    return (
        <div >
            <h1 className='font-bold text-xl text-center'>{state.cart.length || 0} товара в корзине</h1>
            <div className="w-full flex flex-col gap-4 items-start">
                <div className="flex flex-col mt-7 w-full">
                    <div className="flex justify-between items-center">
                        <button onClick={handleDelete} className='font-semibold text-sm'>Удалить выбранное</button>
                        <div className="flex gap-2 items-center">
                            <h2 className='font-semibold text-sm'>Выбрать всё</h2>
                            <input
                                type="checkbox"
                                onChange={handleSelectAll}
                                className='w-4 h-4 rounded-lg border border-solid border-gray-300 bg-white-whites'
                            />
                        </div>
                    </div>
                    <div className="flex flex-col divide-y-[1px] border-y-[1px] my-2">
                        {(access && isSuccess
                            ? basketDatas?.data
                            : state?.cart)
                            .map((item) => (
                                <BasketCard
                                    setCheckedItems={setCheckedItems}
                                    checkedItems={checkedItems}
                                    key={item.id}
                                    {...item}
                                />
                            ))}

                    </div>
                </div>

                <div className="flex flex-col w-full gap-2">
                    <h1 className='font-bold text-xl'>Ваш заказ</h1>
                    <div className="flex justify-between items-center">
                        <p>{totalBasketItems || 0} товара</p>
                        <p>{formatPrice(overallPrice) || 0} сум</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Скидки на товары</p>
                        <p>0 сум</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Итого</p>
                        <h1 className='font-semibold text-xl'>{formatPrice(overallPrice) || 0} сум</h1>
                    </div>
                </div>
            </div>

            <div className="fixed w-full flex bg-white-Default justify-between items-center py-2 px-6 bottom-[60px] shadow-2xl border-y-[1px] left-0">
                <div className="flex flex-col">
                    <p>{totalBasketItems || 0} товара</p>
                    <h3 className='font-bold text-lg'>{formatPrice(overallPrice) || 0} сум</h3>
                </div>
                <Button
                    styleBtn={"bg-green-Default text-white-Default px-3 py-1 rounded"}
                    handleClick={orderBasket}
                    text={"Оформить"} />
            </div>
        </div>
    )
}

export default BasketUI