import React from "react";
import { footerData } from "./data";
import { response } from "../Global/Response";

import FooterMenu from "./FooterMenu";

const Footer = () => {
  return (
    <footer className="bg-white-whites pt-12 pb-32 border-t border-slate-400 border-solid">
      <div
        className={`${response.containerBox} flex justify-between flex-wrap gap-y-5 border-b  border-gray-borderGray pb-7`}
      >
        {footerData.map((item, ind) => (
          <FooterMenu key={ind} data={item} />
        ))}
      </div>
      <div className="py-7 flex justify-center text-gray-lightGray">Milli | Все права защищены. 2022</div>
    </footer>
  );
};

export default Footer;
