import React, { useContext, useState } from 'react'
import { Context } from '../../App'
import { useNavigate } from 'react-router-dom';
import EmptyBasket from "../../Assets/Images/empty-cart.gif"
import BasketMdUI from './BasketMdUI';
import BasketUI from './BasketUI';
import { response } from '../../components/Global/Response';
import { useTranslation } from 'react-i18next';
import { useBasketQuery, useDeleteSelectedItemsFromBasketMutation } from '../../services/basketApi';

function Basket() {
    const navigate = useNavigate()
    const { t } = useTranslation()
    const { access, state, dispatch } = useContext(Context)
    const { data: basketDatas, isSuccess } = useBasketQuery()
    const [checkedItems, setCheckedItems] = useState([]);
    const [deleteAllItemsFromBasket] = useDeleteSelectedItemsFromBasketMutation()
    const handleDelete = () => {
        if (access) {
            const obj = {
                carts_id: checkedItems
            }
            deleteAllItemsFromBasket(obj);
            return;
        }
        dispatch({ type: "DELETE_ALL_CHECKED" })
    };

    const orderBasket = () => {
        access ? navigate("/order") : navigate("/login")
    }

    // underscore
    const overallPrice = (access ? basketDatas?.data : state.cart)
        ?.reduce((total, product) => total + product.totalPrice, 0)

    if (access && isSuccess && basketDatas?.data?.length === 0) {
        return (
            <div className={`${response.containerBoxPadding} w-full bg-white py-20 flex flex-col items-center justify-center`}>
                <img src={EmptyBasket} alt="empty" />
                <h1 className='text-4xl font-bold my-7'>{t('basket.empty1')}</h1>
                <p className='text-lg'>{t('basket.empty2')}</p>
            </div>
        )
    }
    if (!access && state.cart.length === 0) {
        return (
            <div className={`${response.containerBoxPadding} w-full bg-white py-20 flex flex-col items-center justify-center`}>
                <img src={EmptyBasket} alt="empty" />
                <h1 className='text-4xl font-bold my-7'>{t('basket.empty1')}</h1>
                <p className='text-lg'>{t('basket.empty2')}</p>
            </div>
        )
    }
    
    return (
        <div className={`w-full ${response.containerBoxPadding} py-3 min-h-screen`}>
            <div className='md:block hidden'>
                <BasketMdUI
                    setCheckedItems={setCheckedItems}
                    checkedItems={checkedItems}
                    state={state}
                    overallPrice={overallPrice}
                    orderBasket={orderBasket}
                    handleDelete={handleDelete} />
            </div>
            <div className="md:hidden block">
                <BasketUI
                    setCheckedItems={setCheckedItems}
                    checkedItems={checkedItems}
                    state={state}
                    overallPrice={overallPrice}
                    orderBasket={orderBasket}
                    handleDelete={handleDelete} />
            </div>

        </div>

    )
}

export default Basket