import React from "react";

const Button = ({ text, styleBtn, img, handleClick, icon, iconStyle, disabled, styleCss }) => {
  return (
    <>
      <button style={{ background: `${styleCss}` }} onClick={handleClick} className={`${styleBtn}`} disabled={disabled}>
        {img}
        <span className={`${iconStyle}`}>{icon}</span>
        {text}
      </button>
    </>
  );
};

export default Button;
