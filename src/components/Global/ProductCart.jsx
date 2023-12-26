import React, { useContext } from "react";
import Button from "./Button";
import { milliyIcons } from "../../Assets";
import { useNavigate } from "react-router-dom";
import { Context } from "../../App";
import { formatPrice } from "../../utils/priceFormatter";
import ShopDark from "../../Assets/Icons/shopping-cart-dark.svg"
import { useTranslation } from "react-i18next";

const ProductCart = ({ product }) => {
  const { t } = useTranslation()
  const {  setShowModal, setProductId,lang,setProductPrice } = useContext(Context)

  const navigate = useNavigate()


  const handleAddToCart = () => {
    setShowModal(true)
    setProductId(product.item_id)
    setProductPrice(product?.price)
   
  };
  return (
    <div className="lg:p-4 md:p-3 sm:p-3 p-2 w-full font-raleway rounded bg-white-whites border border-gray-lightlyGray">
      <img
        onClick={() => {
          navigate(`/product/${product?.item_id}`)
         product?.price && setProductPrice(product?.price)
        }
        }
        className="w-full cursor-pointer lg:h-56 md:h-52 sm:h-[150px] h-[145px] object-cover"
        src={product.image}
        alt={product[`title_${lang}`]}
      />
      <div className="flex gap-x-2.5 my-2.5">
        <span className="lg:text-xs md:text-xs sm:text-lg text-[8px] font-semibold text-white-whites px-2 py-1 bg-red-danger rounded">
          -15% {t('productCard.discount')}
        </span>
        <span className="lg:text-xs md:text-xs sm:text-[10px] text-[8px] font-semibold text-white-whites px-2 py-1 bg-blue-darkBlue rounded">
          {t('productCard.superPrice')}
        </span>
      </div>
      <p className="lg:text-base md:text-base sm:text-sm text-[14px] mb-2.5">{product[`title_${lang}`] || ""}</p>
      {product?.price ?
        <h2 className="lg:text-2xl md:xl sm:text-base text-base text-green-Default font-semibold">
          {formatPrice(product?.price)} {t('som')}
        </h2> : <></>
      }
      <div className="my-2.5 w-full h-[1px] bg-gray-lightlyGray"></div>
      <div className="flex items-center justify-between md:gap-5">
        <Button
          disabled={!product?.price}
          img={product?.price ? milliyIcons.shoppingWhite : <img src={ShopDark} alt="..." />}
          text={t('productCard.addCart')}
          styleBtn={`${product?.price ? "bg-green-Default text-white-100 flex items-center w-full justify-center font-normal rounded text-white-Default" : "bg-gray-100 text-white-100 w-full justify-center font-normal rounded text-gray-700 flex items-center"} lg:gap-x-2.5 md:gap-x-2 gap-x-1 rounded lg:p-2 md:p-1.5 p-1 lg:text-xl text-[13px] whitespace-nowrap`}
          handleClick={() => product.price && handleAddToCart()}
        />
        <div className="border border-gray-lightlyGray lg:p-2 md:p-1.5 p-0.5 rounded-md">
          {milliyIcons.heart}
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
