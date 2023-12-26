import React from "react";

const Input = ({ types, placeholders, style, id }) => {
  return (
    <>
      {/* <input
        className={`${style} w-full`}
        type={types}
        placeholder={placeholders}
      /> */}
      <input
        type={types}
        id={id}
        className={`${style} border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block outline-none w-full dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        placeholder={placeholders}
        required
      />
    </>
  );
};

export default Input;
