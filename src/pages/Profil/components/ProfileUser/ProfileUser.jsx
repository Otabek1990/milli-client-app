import React from "react";
import { milliyIcons } from "../../../../Assets";
import { InputRadio } from "../../../../components";
import { response } from "../../../../components/Global/Response";

const ProfileUser = () => {
  return (
    <div className={`${response.containerBoxPadding}`}>
      <div className="text-2xl font-semibold flex gap-8 mt-10 mb-5">
        <h3 className="text-black-topBlack">Личные данные</h3>
        <h3 className="text-gray-lightGray">Уведомление</h3>
      </div>
      <div className="mb-8 py-5 px-7 rounded-[10px] border border-gray-lightlyGray">
        <div className="flex items-center mb-5">
          <div className="relative w-[100px] h-auto">
            <span>{milliyIcons.profilCircle}</span>
            <span className="absolute bottom-2 right-2 bg-white-Default rounded-full">
              {milliyIcons.closeCircle}
            </span>
          </div>
          <h3 className="text-2xl font-semibold text-black-topBlack ml-5 mr-2.5">
            Имя не указано
          </h3>
          <span>{milliyIcons.magicPens}</span>
        </div>
        <div className="flex gap-x-48">
          <div className="text-base">
            <div className="flex gap-2">
              <p className="text-gray-lightGray">E-mail</p>
              <span>{milliyIcons.magicPens}</span>
            </div>
            <p className="font-bold text-black-topBlack mt-2.5">Не указано</p>
          </div>
          <div className="text-base">
            <div className="flex gap-2">
              <p className="text-gray-lightGray">Номер телефона</p>
              <span>{milliyIcons.magicPens}</span>
            </div>
            <p className="font-bold text-black-topBlack mt-2.5">
              +998 99 123 45 67
            </p>
          </div>
          <div className="">
            <p className="text-gray-lightGray text-base mb-2">Пол</p>
            <div className="flex items-center gap-5">
              <div className="flex items-center">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                />
                <label
                  forHtml="default-radio-1"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Муж.
                </label>
              </div>
              <div className="flex items-center">
                <input
                  checked
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <label
                  forHtml="default-radio-2"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Жен.
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center mb-12">
        <div className="flex flex-col items-center py-10 px-14 rounded-[10px] border-[3px] border-green-Default">
          <span>{milliyIcons.addCircle}</span>
          <h3 className="text-2xl font-semibold text-green-Default mt-5">
            Добавить карту
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
