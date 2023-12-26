import React from "react";

const RangeInput = () => {
  return (
    <div>
      <input
        type="range"
        min="330000"
        max="33330000"
        step="1"
        className="bg-green-lightGreen text-green-Default appearance-none w-full h-3 rounded-md focus:outline-none focus:ring-green-lightGreen"
      />
    </div>
  );
};

export default RangeInput;