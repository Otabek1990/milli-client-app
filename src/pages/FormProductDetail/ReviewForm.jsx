import React, { useState } from "react";
import FormGlobal from "./FormGlobal";
// import Rating from "@mui/material/Rating";
// import Stack from "@mui/material/Stack";
import { Button } from "../../components";

const ReviewForm = () => {
  const [nameReview, setNameReview] = useState("");
  const [cityReview, setCityReview] = useState("");
  const [emailReview, setEmailReview] = useState("");
  const [textReview, setTextReview] = useState("");
  const [fileReview, setFileReview] = useState("");
  const [ratingReview, setRatingReview] = useState("");

  const reviewInfo = {
    nameReview,
    cityReview,
    emailReview,
    textReview,
    fileReview,
    ratingReview,
  };

  const handleClickInfo = (e) => {
    e.preventDefault();
    
  };

  return (
    <section className="flex flex-col items-center px-6 mt-5 text-left">
      <h3 className="text-2xl font-semibold mb-5">Написать отзыв</h3>
      <form onSubmit={handleClickInfo} className="">
        <FormGlobal
          nameForm={setNameReview}
          cityForm={setCityReview}
          emailForm={setEmailReview}
          textForm={setTextReview}
          name={"Ваша имя"}
          city={"Ваш город"}
          email={"E-mail"}
          text={"Отзыв"}
        />
        <label
          className="my-5 text-base font-raleway text-green-Default px-5 py-3 border border-green-Default rounded"
          htmlFor="foto"
        >
          Добавить фото
          <input
            id="foto"
            onChange={(e) => setFileReview(e.target.files[0])}
            className="hidden my-5"
            type="file"
          />
        </label>
        <div className="flex justify-between mt-8">
          <p className="text-base font-raleway text-gray-lightGray">
            Оценка товара:
          </p>
          {/* <Stack spacing={1}>
            <Rating
              onChange={(e) => setRatingReview(e.target.value)}
              name="half-rating"
              defaultValue={0}
              precision={1}
            />
          </Stack> */}
        </div>
        <Button
          type={"submit"}
          text={"Отправить отзыв"}
          styleBtn="bg-green-Default text-white-whites text-base w-full rounded py-2 my-7 "
        />
      </form>
    </section>
  );
};

export default ReviewForm;
