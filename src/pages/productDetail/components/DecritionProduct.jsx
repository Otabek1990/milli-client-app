import React from "react";

const DecritionProduct = ({ desc }) => {
  return (
    <div className="mt-5 font-raleway">
      <img src={desc.img} alt="" />
      <div className="w-7/12">
        <h3 className="text-3xl font-bold my-2.5">{desc.title}</h3>
        <p className="text-base">{desc.desc}</p>
      </div>
    </div>
  );
};

export default DecritionProduct;
