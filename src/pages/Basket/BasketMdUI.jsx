import React, { useContext } from 'react'
import { formatPrice } from '../../utils/priceFormatter';
import BasketCard from './BasketCard';
import { Button } from '../../components';
import { useTranslation } from 'react-i18next';
import { Context } from '../../App';
import { useBasketQuery } from '../../services/basketApi';

function BasketMdUI({ overallPrice, handleDelete, state, orderBasket, setCheckedItems, checkedItems }) {

    const { access, dispatch } = useContext(Context)
    const { data: basketDatas, isSuccess } = useBasketQuery()
    const { t } = useTranslation()
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
            <h1 className='font-bold text-4xl'>{t('basket.title')}</h1>
            <div className="w-full flex lg:flex-row md:flex-row sm:flex-col gap-7 items-start">
                <div className="flex flex-col lg:w-3/4 md:w-3/4 sm:w-full border rounded-md border-solid border-global-divider p-5 mt-7">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-6 items-center">
                            <input
                                type="checkbox"
                                onChange={handleSelectAll}
                                className='w-4 h-4 rounded-lg border border-solid border-gray-300 bg-white-whites'
                            />
                            <h2 className='font-semibold text-xl'>{t('basket.selectAll')}</h2>
                        </div>
                        <button onClick={handleDelete} className='font-semibold hover:text-blue-darkBlue'>
                            {t('basket.delete')}
                        </button>
                    </div>
                    <div className="flex flex-col">

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
                <div className="sm:w-full md:w-1/4 lg:w-1/4 rounded-md border border-solid border-global-divider p-5 mt-7 flex flex-col">
                    <div className="flex items-center justify-between">
                        <h1 className='font-bold text-3xl'>{t('basket.all')}:</h1>
                        <div className="flex items-end gap-1">
                            <h2 className='text-xl font-bold text-green-Default text-left'>
                                {formatPrice(overallPrice)} 
                            </h2>
                            <p className='font-bold'>{t('som')} </p>
                        </div>
                    </div>
                    <span className='font-semibold text-lg text-gray-400 my-6'>
                        {t('basket.prod')} {totalBasketItems || 0} {t('basket.item')}.
                        </span>
                    <Button styleBtn={"bg-green-Default text-white-Default p-2 rounded"}
                        handleClick={orderBasket}
                        text={t('basket.order')} />
                    <div className="flex gap-2 mt-7">
                        <input type="checkbox" className='w-8 h-8' />
                        <label className='text-xs font-normal'>{t('basket.title2')}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketMdUI