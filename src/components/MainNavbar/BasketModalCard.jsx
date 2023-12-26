import React, { useContext } from 'react'
import Trash from "../../Assets/Icons/trash.svg"
import { useNavigate } from 'react-router-dom';
import { Context } from '../../App';
import { formatPrice } from '../../utils/priceFormatter';
import { useTranslation } from 'react-i18next';
import { useDeleteBasketMutation } from '../../services/basketApi';

function BasketModalCard({ id, image, setShowBasket, title_ln, cart_id, title_ru, price, quantity }) {
    
    const navigate = useNavigate()
    const { t } = useTranslation()
    const { dispatch, lang, access } = useContext(Context)
    const [deleteBasketItem] = useDeleteBasketMutation()
    const handleRemoveFromCart = (e) => {
        e.stopPropagation();
        if (access) {
            deleteBasketItem(cart_id);
            return;
        }
        dispatch({ type: 'REMOVE_FROM_CART', payload: id });

    };
    const handleNavigateProductDetail = () => {
        navigate(`/product/${id}`)
        setShowBasket(false)
    }

    return (
        <div className="flex items-center justify-between gap-8 rounded-md border border-gray-300 p-3">
            <div className="flex items-center gap-6" onClick={handleNavigateProductDetail}>
                <img className='w-28 h-28 cursor-pointer' src={image} alt="img" />
                <div className="flex flex-col gap-3">
                    <h3 className='text-base font-bold'>{lang === "ln" ? title_ln : title_ru}</h3>
                    <p className='text-green-Default text-base font-bold'>{formatPrice(price || 0)} {t('som')} x {quantity}</p>
                </div>
            </div>
            <button onClick={handleRemoveFromCart}>
                <img src={Trash} alt="" />
            </button>
        </div>
    )
}


export default BasketModalCard