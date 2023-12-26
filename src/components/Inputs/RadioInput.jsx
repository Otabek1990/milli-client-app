import React, { useState } from "react";

const RadioInput = ({ data }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div className="mt-5 font-raleway text-base text-black-topBlack">
      <input
        type="radio"
        id={data.title_ln}
        value={data.title_ln}
        checked={selectedOption === data.title_ln}
        onChange={handleOptionChange}
        className="rounded-square border-gray-300 text-blue-600 focus:ring-blue-400"
      />
      <label htmlFor={data.title_ln} className="ml-2.5 rounded w-20">
      {data.title_ln}
      </label>
    </div>
  );
};

export default RadioInput;