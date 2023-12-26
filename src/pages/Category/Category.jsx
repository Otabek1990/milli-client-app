import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { Brand, ProductCart, RangeInput } from "../../components";
import { brendData, colorData, memoryData } from "./data";
import { productCart } from "../../components/NewProduct/data";

const Category = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  //   
  return (
    <section className="p-[100px] bg-white-whites">
      <div className="flex justify-between font-semibold text-2xl mb-6">
        <div className="">
          <h2>Смартфоны Apple</h2>
          <p className="text-base font-normal text-gray-lightGray">
            159 товаров
          </p>
        </div>
        <h2>Сначала популярные</h2>
      </div>
      <div className="flex items-start gap-x-5">
        <div className="w-[262px] flex flex-col gap-y-6">
          <div className="">
            <div className="font-raleway text-base flex justify-between mb-6">
              <p className="font-bold">Цена</p>
              <p className="text-gray-lightGray">Сбросить</p>
            </div>
            <div className="font-raleway text-base text-black-topBlack mb-6 flex justify-between">
              <span className="py-2.5 px-5 bg-white-Default">330 000</span>
              <span className="py-2.5 px-5 bg-white-Default">33 330 000</span>
            </div>
            <RangeInput />
          </div>
          <Brand
            dataInfo={brendData}
            headTitle="Бренды"
            viewMore="Показать больше"
          />
          <Brand dataInfo={memoryData} headTitle="Накопитель" />
          <Brand
            dataInfo={colorData}
            headTitle="Цвет"
            viewMore="Показать больше"
          />
        </div>
        <div className="flex justify-between gap-x-5">
          {productCart?.map((item) => (
            <ProductCart key={item.id} product={item} />
          ))}
        </div>
      </div>
      {/* <div>
        <div className="flex items-center">
          <input
            type="radio"
            id="option1"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={handleOptionChange}
            className="rounded-square border-gray-300 text-blue-600 focus:ring-blue-400"
          />
          <label htmlFor="option1" className="ml-2 rounded w-20">
            Option 1
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="option2"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={handleOptionChange}
            className="rounded-square border-gray-300 text-blue-600 focus:ring-blue-400"
          />
          <label htmlFor="option2" className="ml-2">
            Option 2
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="option3"
            value="option3"
            checked={selectedOption === "option3"}
            onChange={handleOptionChange}
            className="rounded-square border-gray-300 text-blue-600 focus:ring-blue-400"
          />
          <label htmlFor="option3" className="ml-2">
            Option 3
          </label>
        </div>
      </div> */}
    </section>
  );
};

export default Category;
