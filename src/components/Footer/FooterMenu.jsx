import React, { useContext, useEffect, useState } from "react";
import EachFooterPage from "./EachFooterPage";

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import IconsFooter from "./IconsFooter";
import { Context } from "../../App";

const FooterMenu = ({ data }) => {
  const { lang } = useContext(Context)
  const [arrowFooter, setArrowFooter] = useState(false);
  const [activeWidth, setActiveWidth] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setActiveWidth(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    setArrowFooter(!arrowFooter);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (activeWidth) {
    return (
      <div className="w-full sm:w-auto sm:border-0 border-b pb-5">
        <div
          onClick={() => setArrowFooter(!arrowFooter)}
          className="flex justify-between items-center mb-7 w-full cursor-pointer"
        >
          <h3 className="text-2xl font-semibold">{data[`title_${lang}`]}</h3>
          <span className="text-2xl">
            {arrowFooter ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </span>
        </div>
        <div
          className={`${arrowFooter ? "hidden" : "block"
            } transition-all duration-300`}
        >
          {data?.menu?.map((item,index) => (
            <EachFooterPage key={index} footermenu={item} />
          ))}
          <div className="flex items-center gap-x-7">
            {data?.menu?.map((item, ind) => (
              <IconsFooter key={ind} icons={item} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="pb-5">
      <div className="flex justify-between items-center mb-7 w-full">
        <h3 className="text-2xl font-semibold">{data[`title_${lang}`]}</h3>
      </div>
      <div>
        {data?.menu?.map((item,ind) => (
          <EachFooterPage key={ind} footermenu={item} />
        ))}
        <div className="flex items-center gap-x-7">
          {data?.menu?.map((item, ind) => (
            <IconsFooter key={ind} icons={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterMenu;


