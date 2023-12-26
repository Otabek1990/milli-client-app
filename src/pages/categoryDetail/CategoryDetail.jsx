// import React from 'react'
// import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
// import { useCategoryItemDetailsQuery } from '../../services/categoriesApi'
// import { useParams } from 'react-router-dom'

// function CategoryDetail() {
//   const { id } = useParams()
//   const { data: category, isSuccess, isLoading } = useCategoryItemDetailsQuery(id)
//   
//   return (
//     <div className='container-div py-7 min-h-screen bg-slate-600'>
//       <BreadCrumbs />
//     </div>
//   )
// }

// export default CategoryDetail;

import React, { useEffect, useState } from "react";

import { useCategoryItemDetailsQuery, useFilterSidebarDetailsQuery } from "../../services/categoriesApi";
import { useParams } from "react-router-dom";
import CategoryDetailUi from "./CategoryDetailUi";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import CategorySidebar from "./components/CategorySidebar";
import { LineWave, Puff, TailSpin } from "react-loader-spinner";
import SidebarSkeloton from "./components/SidebarSkeloton";
import CategoryDetailSkeloton from "./components/CategoryDetailSkeleton";
import { Empty } from "../../components";
import axios from "axios";
import { baseUrl } from "../../constants";
import { response } from "../../components/Global/Response";
import { useTranslation } from "react-i18next";

const CategoryDetail = () => {
  const { t } = useTranslation()
  const { id } = useParams()
  // const { data: categoryDetails, isSuccess, isLoading } = useCategoryItemDetailsQuery(id)
  const { data: filterDetail, isSuccess: isSuccessFilterDetails, isLoading: isLoadingFilterDetails } = useFilterSidebarDetailsQuery(id)
  const [selectedOption, setSelectedOption] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const [categoryProducts, setCategoryProducts] = useState()

  const getCategoryItemDetail = () => {
    setIsLoading(true)
    setIsSuccess(false)
    const body = {
      filters: {
        category_id: id,
      }
    }
    axios.post(`${baseUrl}api/v1/product/`, body)
      .then(res => {
        setCategoryProducts(res?.data)
        setIsLoading(false)
        setIsSuccess(true)
      })
      .catch(err => console.log(err))

  }

  useEffect(() => {
    getCategoryItemDetail()
  }, [id])



  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <section className={`${response.containerBoxPadding} py-5 bg-white-whites`}>
      {isLoadingFilterDetails && (
        <div className='py-3 md:flex hidden items-center gap-5 '>

          <div className="animate-pulse  flex space-x-4">
            <div className=" bg-slate-200 h-4 rounded w-24"></div>

          </div>
        </div>
      )}
      <div className="hidden md:block">
        {isSuccessFilterDetails && <BreadCrumbs categoryCrumbs={filterDetail?.category_tree} />}
      </div>
      <div className="flex mt-5 justify-between font-semibold  md:text-2xl text-base mb-6">
        <div className="">
          {/* <h2>{categoryDetails?.category_tree?.at(-1)?.title_ln}</h2> */}
          <p className="text-base font-normal text-gray-lightGray">
            {categoryProducts?.results?.length && `${categoryProducts?.results?.length} ${t('categoryDetail.prod')}`}
          </p>
        </div>
        <h2>{t('categoryDetail.popular')}</h2>
      </div>
      <div className="flex items-start gap-x-5">
        {isLoadingFilterDetails &&
          <SidebarSkeloton />
        }
        {isSuccessFilterDetails && <CategorySidebar filterDetail={filterDetail} />}
        {isLoading && (
          <CategoryDetailSkeloton />
        )}
        {isSuccess && <CategoryDetailUi categoryDetails={categoryProducts} />}
      </div>
      <div>
        {/* <div className="flex items-center">
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
        </div> */}
      </div>
    </section>

  );
};

export default CategoryDetail;



