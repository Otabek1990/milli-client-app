import React from "react";
import { reviewsProduct } from "./data";
import MapReviews from "./MapReviews";
import { TopMobilMenu } from "../../../../components";
import { response } from "../../../../components/Global/Response";

const Reviews = () => {
  return (
    <div className={`${response.positionAbsolute} h-screen sm:h-auto`}>
      <div className="mb-10 sm:hidden block">
        <TopMobilMenu
          textStyle={"pl-[30%]"}
          path={"/profile"}
          textMenu={"Отзывы"}
        />
      </div>
      <div className={`${response.containerBoxPadding}`}>
        <h3 className="sm:block hidden text-2xl font-semibold text-black-topBlack my-10">
          Отзывы
        </h3>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start gap-7 mb-32 sm:pb-24 pb-0">
          {reviewsProduct?.map((item, ind) => (
            <MapReviews key={ind} comment={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
