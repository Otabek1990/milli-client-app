import React, { useState } from "react";
import { milliyIcons } from "../../../../Assets";

const MapReviews = ({ comment }) => {
  const [value, setValue] = useState(2);

  return (
    <div className="rounded-[10px] shadow-shadowBoxTwo sm:p-7 p-2.5">
      <div className="flex gap-x-6">
        <img className="w-[65px] h-[65px]" src={comment.img} alt="product" />
        <div className="">
          <p className="font-semibold md:text-lg text-base">{comment.title}</p>
          <p className="md:text-base sm:text-sm text-xs text-gray-lightGray my-1">{comment.date}</p>
        </div>
      </div>
      <div className="mt-6 md:mb-24 sm:mb-14 mb-10">
        <p className="sm:font-semibold font-normal sm:text-lg text-base">{comment.desc}</p>
      </div>
      <div className="flex gap-x-6">
        <span className="flex gap-x-1">
          {milliyIcons.likeProduct} {comment.like}
        </span>
        <span className="flex gap-x-1">
          {milliyIcons.dislike} {comment.dislike}
        </span>
      </div>
    </div>
  );
};

export default MapReviews;
