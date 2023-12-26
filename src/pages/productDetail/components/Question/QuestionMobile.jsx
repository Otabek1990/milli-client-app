import React from "react";
import { Button } from "../../../../components";
import { questionUser } from "../Review/data";
import MapQuestion from "./MapQuestion";
import { milliyIcons } from "../../../../Assets";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const QuestionMobile = ({ modal, setModal }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/questionform')
  }

  return (
    <section
      className={`${
        modal ? "visible" : "invisible"
      } transition-all duration-150 ease-linear font-raleway sm:relative fixed inset-0 px-6 w-full bg-white-Default h-screen z-50`}
    >
      <div className="flex justify-between items-center sm:hidden py-5">
        <div onClick={() => setModal(false)}>
          <IoIosCloseCircleOutline className="text-3xl" />
        </div>
        <p className="text-base font-bold w-8/12">Вопросы покупателей</p>
      </div>
      <div className="flex justify-between sm:w-11/12 w-full">
        <h3 className="text-base font-bold sm:block hidden">
          Если у вас есть какие-нибудь вопросы отправьте, мы ответим
        </h3>
        <Button
          styleBtn={`sm:w-auto w-full py-2 px-4 sm:border-none border border-green-Default sm:text-white-whites text-green-Default text-base font-raleway flex items-center justify-center gap-x-2.5 sm:bg-green-Default bg-white-Default rounded`}
          text={`Задать вопрос`}
          handleClick={handleClick}
        />
      </div>
      <div className="mt-5 sm:w-10/12 w-full">
        {questionUser?.map((item, ind) => (
          <MapQuestion key={ind} question={item} />
        ))}
      </div>
    </section>
  );
};

export default QuestionMobile;
