import DesignCtegory from "./DesignCtegory";
import { useTopCategoriesQuery } from "../../services/topCategoryApi";
import { response } from "../Global/Response";
import { useTranslation } from "react-i18next";
// import { topCategory } from "./data";

const TopCategories = () => {
  const { data: topCategory } = useTopCategoriesQuery();
  const { t } = useTranslation()
  return (
    <section className={`${response.containerBox} my-12 font-raleway`}>
      <div className="flex justify-between items-end mb-9">
        <h3 className="md:text-4xl sm:text-2xl text-base font-bold text-black-topBlack">
          {t('topCategories.topCategory')}
        </h3>
        <span className="sm:text-base text-xs text-green-Default">{t('topCategories.allCategories')}</span>
      </div>
      <div className="flex flex-wrap md:gap-x-7 gap-x-4 md:gap-y-16 gap-y-5">
        {topCategory?.results?.map((item) => (
          <DesignCtegory key={item.id} category={item} />
        ))}
      </div>
    </section>
  );
};

export default TopCategories;
