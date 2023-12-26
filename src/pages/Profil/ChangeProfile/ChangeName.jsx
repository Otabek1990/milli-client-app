import React, { useState } from "react";
import { response } from "../../../components/Global/Response";
import { TopMobilMenu } from "../../../components";

const ChangeName = () => {
  const [changeName, setChangaName] = useState({
    father: "",
    firstName: "",
    lastName: "",
  });

  const changeNameInfo = (e) => {
    setChangaName((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  

  return (
    <div className={`${response.positionAbsolute} h-screen`}>
      <TopMobilMenu
        boxStyle={"justify-between"}
        path={"/mydetail"}
        textMenu={"Редактировать имя"}
        textMenuTwo={"Готово"}
      />
      <div className="px-6 mt-7">
        <div className="flex items-center justify-between text-base font-raleway border-b border-gray-lightGray py-2.5">
          <p>Фамилия</p>
          <input
            onChange={changeNameInfo}
            name="lastName"
            value={changeName.lastName}
            className="text-black-topBlack outline-none text-end placeholder:text-green-Default placeholder:font-bold placeholder:text-end"
            type="text"
            placeholder="Указать"
          />
        </div>
        <div className="flex items-center justify-between text-base font-raleway border-b border-gray-lightGray py-2.5">
          <p>Имя</p>
          <input
            onChange={changeNameInfo}
            name="firstName"
            value={changeName.firstName}
            className="text-black-topBlack outline-none text-end placeholder:text-green-Default placeholder:font-bold placeholder:text-end"
            type="text"
            placeholder="Указать"
          />
        </div>
        <div className="flex items-center justify-between text-base font-raleway py-2.5">
          <p>Отчество</p>
          <input
            onChange={changeNameInfo}
            name="father"
            value={changeName.father}
            className="text-black-topBlack outline-none text-end placeholder:text-green-Default placeholder:font-bold placeholder:text-end"
            type="text"
            placeholder="Указать"
          />
        </div>
      </div>
    </div>
  );
};

export default ChangeName;
