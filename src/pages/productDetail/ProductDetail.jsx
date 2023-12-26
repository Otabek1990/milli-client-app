import React from "react";

import { useProductsQuery } from "../../services/productApi";
import { useParams } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import ProductDetailUi from "./components/ProductDetailUi";
import { LineWave } from "react-loader-spinner";
import { Empty, SkeletonComp } from "../../components";
import Skeleton from "./Skeleton";
import CategoryDetailSkeloton from "../categoryDetail/components/CategoryDetailSkeleton";
import { response } from "../../components/Global/Response";

function ProductDetail() {
  const { id } = useParams();
  const { data, isSuccess, isLoading } = useProductsQuery(id);
  // 
  // 
  return (
    <>
      {isSuccess ? (
        <div className={`${response.containerBoxPadding} py-4`}>
          <div className="">
            {isSuccess && <BreadCrumbs categoryCrumbs={data?.data?.category} />}
            <h1 className="text-md font-semibold">{data?.data?.title_ln}</h1>
            <h3 className="my-5 text-base font-bold">
              Магазин:{" "}
              <span className="text-blue-300">
                {isSuccess &&
                  `${data?.data?.seller?.first_name} ${data?.data?.seller?.last_name} `}
              </span>
            </h3>
          </div>
          {isLoading && (
            <div className="flex w-full items-center justify-center">
              <LineWave
                height="400"
                width="400"
                color="#4fa94d"
                ariaLabel="line-wave"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                firstLineColor=""
                middleLineColor=""
                lastLineColor=""
              />
            </div>
          )}
          {isSuccess && <ProductDetailUi product={data?.data} />}
        </div>
      ) : (
        <div className={`${response.containerBoxPadding} py-8`}><Skeleton /></div>
      )}
    </>
  );
}

export default ProductDetail;
