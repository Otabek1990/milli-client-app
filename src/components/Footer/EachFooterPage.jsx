import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../App"

const EachFooterPage = ({ footermenu }) => {
  //   
  const { lang } = useContext(Context)
  return (
    <div className="font-raleway mt-2.5 text-base text-gray-lightGray w-56">
      <Link>{footermenu[`title_${lang}`]}</Link>
    </div>
  );
};

export default EachFooterPage;
