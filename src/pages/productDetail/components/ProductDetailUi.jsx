import React, { useContext, useState, useRef, useEffect } from "react";
import { productDeteilMap } from "../datas";
import Noutbook from "../../../Assets/Images/favorite_1.png";
import Heart from "../../../Assets/Icons/heart.svg";
import Shop from "../../../Assets/Icons/shopping-cart.svg";
import ShopDark from "../../../Assets/Icons/shopping-cart-dark.svg";
import ShareIcon from "../../../Assets/Icons/share.svg";
import Counter from "./Counter";
import parse from "html-react-parser";
import Filters from "./Filters";
import { Context } from "../../../App";
import Notification from "../../../components/Global/Notification";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Product.css";
import { formatPrice } from "../../../utils/priceFormatter";
import { useAddToBasketMutation } from "../../../services/basketApi";

function ProductDetailUi({ product }) {
  const { access, state, dispatch, lang, productPrice } = useContext(Context);
  const [quantity, setQuantity] = useState(1)
  const [proPrice, setProPrice] = useState(0)

  const [dataObj, setDataObj] = useState({})
  const [showAddNotification, setShowAddNotification] = useState(false);
  const totalPrice = proPrice * quantity || productPrice;
  const [addToBasket] = useAddToBasketMutation()

  const chooseCharacter = (e, title) => {
    setDataObj({
      ...dataObj,
      [title]: e.target.value
    })
  }
  const disabledBtn = product?.characteristics?.length > 0
    ? (product?.items_list[0]?.characters_id?.length === Object.values(dataObj).length)
    : false;

  const handleAddToCart = () => {
    let chosenData;
    let chosen;
    if (product?.characteristics?.length === 0) {
      const id = product?.items_list[0].id;
      chosenData = { id, quantity }
    }
    else {
      let values = Object.values(dataObj)
      chosen = product?.items_list?.find(itemm => {
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
            image: product?.images[0],
            totalPrice: (chosen?.price || productPrice) * quantity,
            price: chosen?.price || productPrice,
            title_ln: product?.title_ln,
            title_ru: product?.title_ru,
            checked: false,
            sellerName: `${product?.seller?.first_name} ${product?.seller?.last_name}`
          }

          dispatch({ type: "ADD_TO_CART", payload: localCart })
        }
      }
    }

    setShowAddNotification(true)
    setQuantity(1)

    setProPrice(chosen.price)

  };


  useEffect(() => {

    let values = Object.values(dataObj)
    const chosen = product?.items_list?.find(itemm => {
      const sorted = itemm.characters_id.toSorted()
      const sorted2 = values.map(elem => +elem).toSorted()
      return JSON.stringify(sorted) === JSON.stringify(sorted2)
    })
    
    chosen && setProPrice(chosen?.price)
  }, [dataObj])

  return (
    <div>
      <div className="w-full h-80 mb-8 sm:hidden block">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper w-full !relative"
        >
          {product?.images?.map((item, index) => (
            <SwiperSlide className="w-full h-full" key={index}>
              <img
                src={item}
                alt="..."
                className="border w-full h-full border-solid rounded-lg !object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="grid gap-5 items-start md:grid-cols-12 grid-cols-1">
        <div className="sm:grid hidden col-span-5 h-auto grid-cols-5 gap-x-5">
          <div className="flex h-[450px] flex-col overflow-y-hidden col-span-1 items-center gap-y-2">
            {product?.images?.map((item, index) => (
              <img
                key={index}
                src={item}
                alt="..."
                className="border h-20 w-full border-solid rounded-lg object-cover"
              />
            ))}
          </div>
          <div className="col-span-4   aspect-square  rounded-xl md:mx-auto mx-6">
            <img
              src={product?.images ? product?.images[0] : Noutbook}
              alt="..."
              className="w-full aspect-square md:w-[380px] md:h-[450px] object-cover rounded-xl"
            />
          </div>
        </div>
        <div
          className="bg-white-whites col-span-4 border border-solid border-gray-200
                 py-5 px-7 rounded-xl  flex flex-col items-start gap-y-5"
        >
          <p className=" font-bold text-base ">Коротко о продукте</p>
          <div className=" flex flex-col items-start gap-y-3 h-auto w-full min-h-[365px]">
            <div className="w-full flex  items-center justify-between">
              <h2 className="text-xl font-semibold">О продукте</h2>
              <button>
                <img src={ShareIcon} alt="" />
              </button>
            </div>
            <div className="w-full flex  items-center justify-between">
              <span className="text-base text-gray-lightGray font-normal">
                Brand
              </span>
              <span className="text-base font-normal text-black-topBlack">
                {product?.brand[`title_${lang}`]}
              </span>
            </div>
            <div className="w-full flex  items-center justify-between">
              <span className="text-base text-gray-lightGray font-normal">
                Model
              </span>
              <span className="text-base font-normal text-black-topBlack">
                {product?.model}
              </span>
            </div>
            {product?.sertificate_ln && (
              <div div className="w-full flex  items-center justify-between">
                <span className="text-base text-gray-lightGray font-normal">
                  Sertifikat
                </span>
                <span className="text-base font-normal text-black-topBlack">
                  {parse(product[`sertificate_${lang}`])}
                </span>
              </div>
            )}
            <div className="w-full my-4 flex flex-col items-start gap-y-4 ">
              {product?.characteristics?.map((character) => (
                <div
                  key={character.id}
                  className="w-full flex flex-col gap-2 items-start"
                >
                  <span className="text-base text-gray-lightGray font-normal">
                    {character[`title_${lang}`]}
                  </span>
                  <div className=" flex items-center gap-3 font-normal">
                    {character?.values?.map((elem, index) => (
                      <div key={index}>
                        <input
                          onChange={(e, title) => chooseCharacter(e, character.title_ln)}
                          type="radio" name={character.id} id={elem.id} value={elem.id} className="peer hidden" />
                        <label
                          htmlFor={elem.id} className="block border border-slate-400 cursor-pointer select-none rounded-xl p-2 text-center
                       peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white-Default">
                          {elem[`title_${lang}`]}
                        </label>
                      </div>
                      // <button
                      //   className="py-1 px-3 rounded border border-red-400"
                      //   key={item.id}
                      // >
                      //   {item[`title_${lang}`]}
                      // </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Counter quantity={quantity} setQuantity={setQuantity} />
            {Object.keys(product?.attributes_ln || []).length > 0 &&
              <div className="">
                <h3>Mahsulot haqida qisqacha:</h3>
                <ul className="">

                  {Object?.values(product?.attributes_ln)?.map((item, ind) => (
                    <li key={ind}>{item}</li>
                  ))}
                </ul>
              </div>
            }
          </div>
        </div>
        <div className="col-span-3 sm:block hidden">
          <div className="rounded-xl border border-solid px-5 py-7 ">
            <div className="flex justify-between items-center">
              <h2 className="font-bold">
                {productPrice ? (
                  <>
                    {formatPrice(totalPrice)} <span>сум</span>
                  </>
                ) : (
                  <>Нет цены</>
                )}
              </h2>
              <img
                src={Heart}
                alt="...."
                className="border border-solid rounded p-1"
              />
            </div>
            <button
              disabled={!disabledBtn}
              onClick={handleAddToCart}
              className={
                disabledBtn
                  ? "bg-green-Default my-5  text-white-100 flex gap-3 items-center py-2 w-full justify-center font-normal text-base rounded text-white-Default"
                  : "bg-gray-100 my-5  text-white-100 flex gap-3 items-center py-2 w-full justify-center font-normal text-base rounded text-gray-700"
              }
            >
              {productPrice ? (
                <img src={Shop} alt="..." />
              ) : (
                <img src={ShopDark} alt="..." />
              )}
              <span>
                Добавить в корзину
              </span>
            </button>
            <button
              disabled={!product?.price}
              className={
                product?.price
                  ? "border border-solid border-green-Default text-green-Default py-2 w-full text-base font-normal rounded"
                  : "border border-solid border-gray-400 text-gray-700 py-2 w-full text-base font-normal rounded"
              }
            >
              Купить сейчас
            </button>
          </div>
          {/* <div className="flex flex-col border border-solid rounded-xl p-5">
            <button className="font-normal text-base bg-[#ECECEC] rounded py-2 mb-5">
              По <span className="font-bold">2 500 000</span> сум / на
              <span className="font-bold">12</span> мес.
            </button>
            <button className="bg-green-Default text-base font-normal py-2 rounded text-white-Default">
              Купить в рассрочку
            </button>
          </div> */}
          <div className="flex flex-col gap-y-4 mt-5 justify-between">
            {productDeteilMap.usluga.uslugaOn.map((item, index) => (
              <div key={index} className="flex w-full items-start justify-between">
                <div  className="flex text-base font-normal gap-x-3">
                  <img src={item.img} alt="..." />
                  <span>{item.text}</span>
                </div>
                <span className="font-bold text-end text-black-topBlack">
                  {item.data}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
      <Filters />
      <Notification
        message={`${product?.title_ln || product?.product_item?.artikul_ln
          } savatga qoshildi`}
        show={showAddNotification}
        setShow={setShowAddNotification}
      />
    </div>
  );
}

export default ProductDetailUi;
