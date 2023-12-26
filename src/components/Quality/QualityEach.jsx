import React, { useContext } from "react";
import { Context } from "../../App";

const QualityEach = ({ quality }) => {
    const { lang } = useContext(Context)
    return (
        <div className="font-raleway bg-white-whites rounded-[10px] px-2 flex flex-col items-center text-center justify-center md:w-56 w-[145px] sm:w-48 md:h-[300px] sm:h-64 h-[206px]">
            <span className="h-auto w-12 sm:w-[75px] md:w-[100px]">
                {quality.img}
            </span>
            <h3 className="sm:text-lg text-[13px] my-2.5 font-semibold">
                {quality[`title_${lang}`]}
            </h3>
            <p className="sm:text-sm text-[8.5px]">{quality[`desc_${lang}`]}</p>
        </div>
    );
}

export default QualityEach;
