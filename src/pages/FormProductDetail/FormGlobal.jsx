import React from "react";
import { Input } from "../../components";

const FormGlobal = ({
  name,
  city,
  email,
  text,
  nameForm,
  cityForm,
  emailForm,
  textForm,
}) => {
  // 
  return (
    <div className="flex flex-col gap-y-2.5 mb-5">
      <Input
        change={nameForm}
        types="text"
        placeholders={name}
        style="px-5 py-2 rounded"
      />
      <Input
        change={cityForm}
        types="text"
        placeholders={city}
        style="px-5 py-2 rounded"
      />
      <Input
        change={emailForm}
        types="text"
        placeholders={email}
        style="px-5 py-2 rounded"
      />
      <textarea
        onChange={(e) => textForm(e.target.value)}
        className="px-5 py-2 border rounded outline-none"
        name="review"
        id="review"
        cols="30"
        rows="10"
        placeholder={text}
      />
    </div>
  );
};

export default FormGlobal;
