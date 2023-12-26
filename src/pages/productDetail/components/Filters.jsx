import React, { useContext, useState } from "react";
import { Button } from "../../../components";
import {
  buttonFilter,
  dataProduct,
  dataProtseccor,
  descriptionFilter,
} from "../datas";
import MapFilter from "./MapFilter";
import DecritionProduct from "./DecritionProduct/DecritionProduct";
import Review from "./Review/Review";
import Questions from "./Question/Questions";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { milliyIcons } from "../../../Assets";
import { response } from "../../../components/Global/Response";
import { Context } from "../../../App";
import DerectionProductMobile from "./DecritionProduct/DerectionProductMobile";
import ReviewTwo from "./Review/ReviewTwo";
import QuestionMobile from "./Question/QuestionMobile";

const Filters = () => {
  const [active, setActive] = useState("description");
  const [activeBtns, setActiveBtns] = useState("description");
  const [modal, setModal] = useState(false);
  const [modalTwo, setModalTwo] = useState(false);
  const [modalThree, setModalThree] = useState(false);

  const { activeWidth } = useContext(Context);

  // if (activeWidth) {
  //   <div className="mt-12 mb-7 flex flex-col items-center text-center gap-x-5">
  //     {buttonFilter?.map((btn, ind) => (
  //       <Button
  //         // handleClick={() => {
  //         //   setActiveBtns({
  //         //     charactic: false,
  //         //     description: false,
  //         //     review: false,
  //         //     question: false,
  //         //     [btn.link]: true,
  //         //   });
  //         //   setActive(btn.link);
  //         // }}
  //         handleClick={() => setModal(true)}
  //         icon={milliyIcons.arrowRightBlack}
  //         iconStyle={`text-3xl block sm:hidden`}
  //         key={ind}
  //         styleBtn={`${
  //           active === btn.link &&
  //           "sm:bg-green-Default bg-text-white-whites sm:text-white-whites text-green-Default"
  //         } sm:bg-gray-borderGray bg-white-Default font-bold sm:font-normal sm:w-auto w-full flex flex-row-reverse items-center justify-between sm:hover:bg-green-Default text-base sm:text-gray-lightGray text-green-Default hover-none sm:hover:text-white-whites rounded px-4 py-2`}
  //         text={btn.button}
  //       />
  //     ))}
  //     {/* <div className="">
  //       {active === "description" && (
  //         <>
  //           {descriptionFilter?.map((item, ind) => (
  //             <DecritionProduct
  //               key={ind}
  //               desc={item}
  //               modal={modal}
  //               setModal={setModal}
  //             />
  //           ))}
  //         </>
  //       )}
  //     </div> */}
  //   </div>;
  // }

  return (
    <section className={`mb-10`}>
      <div className="mt-12 mb-7 sm:hidden flex flex-col items-center text-center gap-x-5">
        {buttonFilter?.map((btn, ind) => (
          <Button
            // handleClick={() => {
            //   setActiveBtns({
            //     charactic: false,
            //     description: false,
            //     review: false,
            //     question: false,
            //     [btn.link]: true,
            //   });
            //   setActive(btn.link);
            // }}
            handleClick={() => {
              setActiveBtns({
                charactic: false,
                description: false,
                review: false,
                question: false,
                [btn.link]: true,
              });
              setModal(true);
              setModalTwo(true);
              setModalThree(true);
              setActive(btn.link);
            }}
            icon={milliyIcons.arrowRightBlack}
            iconStyle={`text-3xl block sm:hidden`}
            key={ind}
            styleBtn={`${
              active === btn.link &&
              "sm:bg-green-Default bg-text-white-whites sm:text-white-whites text-green-Default"
            } sm:bg-gray-borderGray bg-white-Default font-bold sm:font-normal sm:w-auto w-full flex flex-row-reverse items-center justify-between sm:hover:bg-green-Default text-base sm:text-gray-lightGray text-green-Default hover-none sm:hover:text-white-whites rounded px-4 py-2`}
            text={btn.button}
          />
        ))}
      </div>
      <div className="mt-12 mb-7 hidden sm:flex sm:flex-row flex-col items-center text-center gap-x-5">
        {buttonFilter?.map((btn, ind) => (
          <Button
            handleClick={() => {
              setActiveBtns({
                charactic: false,
                description: false,
                review: false,
                question: false,
                [btn.link]: true,
              });
              setActive(btn.link);
            }}
            icon={milliyIcons.arrowRightBlack}
            iconStyle={`text-3xl block sm:hidden`}
            key={ind}
            styleBtn={`${
              active === btn.link &&
              "sm:bg-green-Default bg-text-white-whites sm:text-white-whites text-green-Default"
            } sm:bg-gray-borderGray bg-white-Default font-bold sm:font-normal sm:w-auto w-full flex flex-row-reverse items-center justify-between sm:hover:bg-green-Default text-base sm:text-gray-lightGray text-green-Default hover-none sm:hover:text-white-whites rounded px-4 py-2`}
            text={btn.button}
          />
        ))}
      </div>
      <div className="block sm:hidden">
        {active === "description" && (
          <>
            {descriptionFilter?.map((item, ind) => (
              <DerectionProductMobile
                modal={modal}
                setModal={setModal}
                key={ind}
                desc={item}
              />
            ))}
          </>
        )}
      </div>
      <div className="sm:block hidden">
        {active === "description" && (
          <>
            {descriptionFilter?.map((item, ind) => (
              <DecritionProduct key={ind} desc={item} />
            ))}
          </>
        )}
      </div>
      <div className="sm:hidden block">
        {active === "review" && (
          <ReviewTwo modalTwo={modalTwo} setModalTwo={setModalTwo} />
        )}
      </div>
      <div className="sm:block hidden">{active === "review" && <Review />}</div>

      <div className="block sm:hidden">
        {active === "question" && (
          <QuestionMobile modal={modalThree} setModal={setModalThree} />
        )}
      </div>
      <div className="sm:block hidden">
        {active === "question" && <Questions />}
      </div>
    </section>
  );
};

export default Filters;
