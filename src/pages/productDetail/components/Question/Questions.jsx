import React from "react";
import { Button } from "../../../../components";
import { questionUser } from "../Review/data";
import MapQuestion from "./MapQuestion";
import { milliyIcons } from "../../../../Assets";

const Questions = () => {
  return (
    <section>
      <div className="flex justify-between sm:w-11/12 w-full">
        <h3 className="text-base font-bold sm:block hidden">
          Если у вас есть какие-нибудь вопросы отправьте, мы ответим
        </h3>
        <Button
          styleBtn={`sm:w-auto w-full py-2 px-4 sm:border-none border border-green-Default sm:text-white-whites text-green-Default text-base font-raleway flex items-center justify-center gap-x-2.5 sm:bg-green-Default bg-white-Default rounded`}
          text={`Задать вопрос`}
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

export default Questions;
