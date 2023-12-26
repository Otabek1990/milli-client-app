import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../App";
import { useProductsQuery } from "../../services/productApi";
import { RotatingLines } from "react-loader-spinner";
import { formatPrice } from "../../utils/priceFormatter";
import { useAddToBasketMutation } from "../../services/basketApi";
import Notification from "../Global/Notification";

export default function Modal() {
  const [quantity, setQuantity] = useState(1)
  const { state, showModal, setShowModal, productId, access, dispatch, productPrice } = useContext(Context)
  const [dataObj, setDataObj] = useState({})
  const [showAddNotification, setShowAddNotification] = useState(false);


  const { data: product, isLoading, isSuccess } = useProductsQuery(productId)
  // const [proPrice, setProPrice] = useState(isSuccess && product?.data?.items_list[0].price )
  const [proPrice, setProPrice] = useState(0)
  const [addToBasket] = useAddToBasketMutation()
  


  const totalPrice = proPrice * quantity || productPrice;
  const chooseCharacter = (e, title) => {
    setDataObj({
      ...dataObj,
      [title]: e.target.value
    })
  }

  const addToBasketHandler = () => {
    let chosenData;
    if (product?.data?.characteristics?.length === 0) {
      const id = product?.data?.items_list[0].id;
      chosenData = { id, quantity }

    }
    else {
      let values = Object.values(dataObj)
      const chosen = product?.data?.items_list?.find(itemm => {
        const sorted = itemm.characters_id.toSorted()
        const sorted2 = values.map(elem => +elem).toSorted()
        return JSON.stringify(sorted) === JSON.stringify(sorted2)
      })
      chosenData = {
        id: chosen?.id,
        quantity
      }


      if (access) {
        addToBasket({ basketItem: chosenData, access })
      }
      else {
        const checkItem = state.cart?.some(elem => elem.id === chosen.id);
        if (checkItem) {
          dispatch({
            type: "ADD_QUANTITY",
            payload: { id: chosen.id, count: quantity }
          })

        }
        else {
          const localCart = {
            ...chosenData,
            image: product?.data?.images[0],
            totalPrice: (chosen?.price || productPrice) * quantity,
            price: chosen?.price || productPrice,
            title_ln: product?.data?.title_ln,
            title_ru: product?.data?.title_ru,
            checked: false,
            sellerName: `${product?.data?.seller?.first_name} ${product?.data?.seller?.last_name}`
          }

          dispatch({ type: "ADD_TO_CART", payload: localCart })
        }
      }
    }
    setShowModal(false)
    setShowAddNotification(true)

    setQuantity(1)
    setDataObj({})
    setProPrice(0)
    // setProPrice(product?.data?.items_list[0]?.price)
  }
  const disabledBtn = product?.data?.characteristics?.length > 0
    ? !(product?.data?.items_list[0]?.characters_id?.length === Object.values(dataObj).length)
    : false;


  const handleCloseModal = () => {
    setShowModal(false)
    setQuantity(1)
    setDataObj({})
  }

  useEffect(() => {

    let values = Object.values(dataObj)

    const chosen = product?.data?.items_list?.find(itemm => {
      const sorted = itemm.characters_id.toSorted()
      const sorted2 = values.map(elem => +elem).toSorted()
      return JSON.stringify(sorted) === JSON.stringify(sorted2)
    })
    
    chosen && setProPrice(chosen?.price)
  }, [dataObj])

  return (
    <>

      {showModal ? (
        <>
          <div
            className="justify-center bg-[rgba(14,14,15,0.5)]  items-center flex   fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative bg-white-Default  min-w-[350px]  rounded-lg w-[60%] my-6 h-[650px] mx-auto ">

              {isLoading && (
                <div className="h-full w-full flex items-center justify-center">
                  <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="140"
                    visible={true}
                  />
                </div>
              )}
              {isSuccess &&
                <div className="flex w-full p-6 gap-x-6 items-start">
                  <div className=" w-[40%] ">
                    <img className="h-[350px] w-full rounded-md object-cover" src={product?.data?.images[0]} alt="rasm" />
                    <button className="w-full hover:bg-blue-700 hover:text-white-Default  mt-5 flex justify-center font-bold items-center
                 p-2 border border-slate-400 rounded bg-transparent">
                      More details
                    </button>
                  </div>
                  <div className=" w-[60%] flex flex-col items-start gap-y-6 ">
                    <div className="w-full flex items-start pb-6 border-b border-solid  border-slate-400 justify-between">
                      <h1 className="capitalize font-semibold text-2xl">

                        {product?.data?.title_ln}
                      </h1>
                      <button onClick={handleCloseModal} className="font-bold ">
                        X
                      </button>

                    </div>
                    {/* <div className="flex flex-col w-full gap-y-3 items-start">
                  <h2>Images:</h2>
                  <div className="flex flex-wrap align-content-start  items-center gap-4">
                    {product?.data?.images?.map((rasm, index) => (
                      <img className="h-24 w-16 object-cover rounded-md" key={index} src={rasm} alt="rasm" />
                    ))}

                  </div>
                </div> */}
                    {product?.data?.characteristics?.length > 0 &&
                      <div className="w-full flex flex-col gap-y-4 items-start ">
                        {
                          product?.data?.characteristics?.map(item => (
                            <div className="flex w-full items-start flex-col gap-y-3" key={item.id}>
                              <h2>{item.title_ln}:</h2>
                              <div className="flex items-center gap-3 flex-wrap">
                                {item.values?.map((elem, index) => (
                                  <div key={index}>
                                    <input
                                      onChange={(e, title) => chooseCharacter(e, item.title_ln)}
                                      type="radio" name={item.id} id={elem.id} value={elem.id} className="peer hidden" />
                                    <label
                                      htmlFor={elem.id} className="block border border-slate-400 cursor-pointer select-none rounded-xl p-2 text-center
                               peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white-Default">
                                      {elem.title_ln}
                                    </label>
                                  </div>
                                ))}
                              </div>

                            </div>
                          ))
                        }

                      </div>
                    }
                    <div className="w-full flex flex-col gap-y-3 items-start">
                      <h1>Kolichestvo:</h1>
                      <div className="border border-slate-400 px-2 py-1 flex items-center gap-x-4  rounded">
                        <button
                          onClick={() => {
                            if (quantity < 2) {
                              setQuantity(1)
                            }
                            else setQuantity(p => p - 1)

                          }}
                          className="text-2xl">-</button>
                        <span>{quantity}</span>
                        <button
                          onClick={() => setQuantity(p => p + 1)}
                          className="text-2xl ">+</button>
                      </div>
                      <div className="w-full my-4">
                        <h2 className="text-lg font-bold ">{formatPrice(totalPrice)} so'm</h2>
                      </div>
                    </div>
                    <button
                      disabled={disabledBtn}
                      onClick={addToBasketHandler}
                      className={`bg-blue-700 ${disabledBtn && "bg-opacity-20"}  text-white text-lg text-white-Default font-bold lg:text-lg rounded-lg w-full p-3`}>
                      Dovabit v korzinku
                    </button>

                  </div>
                  <div>

                  </div>
                </div>
              }


            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <Notification
        message={`${product?.data?.title_ln || ""} savatga qoshildi`}
        show={showAddNotification}
        setShow={setShowAddNotification}
      />
    </>
  );
}