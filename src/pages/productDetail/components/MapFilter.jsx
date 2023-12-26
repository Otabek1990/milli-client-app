import React from "react";
import AllCharacteristics from "./AllCharacteristics";

const MapFilter = ({dataProduct}) => {
  return (
    <div>
      {dataProduct?.map((item, ind) => (
        <AllCharacteristics key={ind} character={item} />
      ))}
    </div>
  );
};

export default MapFilter;
