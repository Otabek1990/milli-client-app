import React, { useContext, useState } from "react";
import { Button } from "../../../../components";
import { milliyIcons } from "../../../../Assets";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../../App";

const MapChoosen = ({ product }) => {
  const { state, dispatch } = useContext(Context);
  const navigate = useNavigate();

  const [showAddNotification, setShowAddNotification] = useState(false);
  const [count, setCount] = useState(1)

  const handleAddToCart = (item) => {
    const check = state.cart.some((elem) => elem.id === item.id);
    if (check) {
      alert("Produt oldin qoshilgan");
      return;
    }
    dispatch({ type: "ADD_TO_CART", payload: item });
    setShowAddNotification(true);
  };
  return (
    <div className="p-4 w-full font-raleway rounded bg-white-whites border border-gray-lightlyGray">
      <img
        className="w-full cursor-pointer object-cover"
        src={product.img}
        alt="product"
      />
      <p className="md:text-base text-sm my-2.5">{product.product}</p>
      <h2 className="md:text-2xl sm:text-base text-sm text-green-Default font-semibold">
        {parseInt(product?.summa * count).toLocaleString("uz-Uz", {
          style: "currency",
          currency: "uzs"
        })} сум
      </h2>
      <div className="my-2.5 w-full h-[1px] bg-gray-lightlyGray"></div>
      <Button
        img={milliyIcons.shoppingWhite}
        text={"В корзину"}
        styleBtn={`flex items-center sm:gap-x-2.5 gap-x-1 sm:text-base text-sm rounded p-2 text-white-whites bg-green-Default`}
        handleClick={() => handleAddToCart(product)}
      />
    </div>
  );
};

export default MapChoosen;
