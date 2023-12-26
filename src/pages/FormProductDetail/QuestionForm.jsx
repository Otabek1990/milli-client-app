import React, { useState } from "react";
import FormGlobal from "./FormGlobal";
import { Button } from "../../components";

const QuestionForm = () => {
  const [nameQuestion, setNameQuestion] = useState("");
  const [cityQuestion, setCityQuestion] = useState("");
  const [emailQuestion, setEmailQuestion] = useState("");
  const [textQuestion, setTextQuestion] = useState("");

  const questionInfo = {
    nameQuestion,
    cityQuestion,
    emailQuestion,
    textQuestion,
  };
  
  const handleClickInfo = (e) => {
    e.preventDefault();
    
  }

  return (
    <section className="flex flex-col items-center px-6 mt-5 text-left">
      <h3 className="text-2xl font-semibold mb-5">Задать вопрос</h3>
      <form onSubmit={handleClickInfo} className="">
        <FormGlobal
          nameForm={setNameQuestion}
          cityForm={setCityQuestion}
          emailForm={setEmailQuestion}
          textForm={setTextQuestion}
          name={"Ваша имя"}
          city={"Ваш город"}
          email={"E-mail"}
          text={"Отзыв"}
        />
        <Button
          type={"submit"}
          text={"Отправить отзыв"}
          styleBtn="bg-green-Default text-white-whites text-base w-full rounded py-2 my-7 "
        />
      </form>
    </section>
  );
};

export default QuestionForm;
