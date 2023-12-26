import React, { useContext } from "react";
import { Context } from "../../App";

const DesignCtegory = ({ category }) => {
  // 
  const { lang } = useContext(Context)
  return (
    <div className="flex items-start text-center ">
      <div className="flex flex-col items-center md:w-[212px] sm:w-36 w-[75px]">
        <div
          className="object-center md:w-[212px] md:h-[212px] sm:w-36 sm:h-36 w-[75px] h-[75px] "
        // style={{
        //   backgroundImage: `url(${category?.image})`,
        //   // width: "212px",
        //   // height: "212px",
        //   backgroundSize: "cover",
        // }}
        >
          <img
          onClick={()=>window.location.replace(category?.url)}
           className="object-cover cursor-pointer w-full h-full md:rounded-[10px] rounded" src={category?.image} alt="" />
        </div>
        {/* <img className='object-cover' src={category.image} alt="Top Category" /> */}
        <p className="sm:text-base text-xs font-semibold mt-2">
          {category.category[`title_${lang}`]}
        </p>
      </div>
    </div>
  );
};

export default DesignCtegory;
