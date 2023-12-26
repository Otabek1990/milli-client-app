import React from "react";
import { Button } from "../index";
import { milliyIcons } from "../../Assets";
import { Link } from "react-router-dom";
import { useTopProductsQuery } from "../../services/topProduct";
import RecommendUi from "./RecommendUi";
import { response } from "../Global/Response";
import { useTranslation } from "react-i18next";

const Recomend = () => {
  const { data: topProducts, isSuccess } = useTopProductsQuery()
  const { t } = useTranslation()
  return (
    <section className={`${response.containerBox} mt-14`}>
      {/* <h3 className="text-2xl font-semibold">Рекомендуем вам</h3> */}
      <div className="flex justify-between items-end font-raleway mb-7">
        <div className="flex gap-x-5 mt-5">
          <h1 className="font-semibold text-2xl">
            {t('recProduct.title')}
          </h1>
        </div>
        <div className="flex gap-x-5">
          <Button img={milliyIcons.arrowLeft} style={`bg-green-lightGreen p-2 rounded`} />
          <Button img={milliyIcons.arrowRight} style={`bg-green-lightGreen p-2 rounded`} />
        </div>
      </div>
      {isSuccess &&
        <RecommendUi products={topProducts?.results} />
      }
    </section>
  );
};

export default Recomend;
