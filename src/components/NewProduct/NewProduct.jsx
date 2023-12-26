import React from "react";
import { useNewProductsQuery } from "../../services/newProductApi";
import NewProductUi from "./NewProductUi";
import { response } from "../Global/Response";
import { useTranslation } from "react-i18next";

const NewProduct = () => {
  const { data: newProducts, isSuccess } = useNewProductsQuery()
  const { t } = useTranslation()
  return (
    <section className={`${response.containerBox} mt-14`}>
      <div className="flex justify-between items-end font-raleway mb-7">
        <h3 className="text-2xl font-semibold">{t('newProds.title')}</h3>
        <p className="text-base text-green-Default">{t('newProds.allProds')}</p>
      </div>
      {isSuccess && <NewProductUi products={newProducts.results} />}
    </section>
  );
};

export default NewProduct;
