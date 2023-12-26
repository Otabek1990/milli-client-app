import React from "react";
import MaxCarousel from "./MaxCarousel";
import MiniCarousel from "./MiniCarousel";
import { useBannersQuery } from "../../services/bannerApi";
import { useAdsProductsQuery } from "../../services/adsProduct";
import HeaderSkeleton from "./HeaderSkeleton";
import { response } from "../Global/Response";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation()
  const { data: banners, isSuccess, isLoading } = useBannersQuery();
  const { data: adsProducts, isSuccess: isSuccessTopProduct } =
    useAdsProductsQuery();

  return (
    <>
      {isLoading && (
        <div className={`${response.containerBox}`}>
          <HeaderSkeleton />
        </div>
      )}
      <header
        className={`${response.containerBox} font-raleway grid md:grid-cols-4 grid-cols-1 items-start gap-7`}
      >
        <div className="md:col-span-3 col-span-1 flex flex-col items-start gap-y-7 ">
          <h4 className="text-2xl font-semibold md:block hidden">
            {t('banner.topText')}
          </h4>
          {isSuccess && <MaxCarousel banners={banners?.results} />}
        </div>
        <div className="col-span-1 flex flex-col items-start gap-y-7">
          <h4 className="text-2xl font-semibold md:block hidden">{t('banner.kunTovari')}</h4>
          {isSuccessTopProduct && (
            <MiniCarousel adsProducts={adsProducts?.results} />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
