import React, { useContext } from "react";
import { Logo, milliyIcons } from "../../Assets";
import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";
import Button from "../Global/Button";
import CatalogContainer from "./CatalogContainer";
import { AiOutlineClose } from "react-icons/ai";
import BasketModal from "./BasketModal";
import { response } from "../Global/Response";
import { Context } from "../../App";
import { useTranslation } from "react-i18next";

// import { useCategoriesQuery } from "../../services/categoriesApi";
// import CloseIcon from "../../Assets/Icons/close.png";
// import { RxHamburgerMenu } from "react-icons/rx";

const MainNavbar = () => {
  const { t } = useTranslation();

  const { access, showCatalog, setShowCatalog } = useContext(Context)
  const navigate = useNavigate()


  return (
    <nav className={`${response.containerBoxPadding} relative w-full font-raleway flex justify-between gap-x-2.5 items-center py-3 border-t border-gray-lightlyGray`}>
      <Link className="hidden md:block" to={"./"}>
        <img className="w-24 h-auto" src={Logo} alt="Logo" />
      </Link>
      <Button
        handleClick={() => setShowCatalog((p) => !p)}
        text={t('header.katalog')}
        icon={showCatalog && <AiOutlineClose className="text-xl" />}
        img={!showCatalog ? milliyIcons.menu : ""}
        styleBtn={
          "hidden md:flex gap-x-2.5 px-4 py-2 text-base items-center text-white-whites rounded bg-green-Default"
        }
      />{" "}
      {/* <Button
        handleClick={() => setShowCatalog((p) => !p)}
        icon={showCatalog && <AiOutlineClose className="text-xl" />}
        img={!showCatalog ? <RxHamburgerMenu /> : ""}
        styleBtn={
          "md:hidden flex w-10 h-10 text-2xl items-center justify-center rounded border border-black-Default rounded"
        }
      />{" "} */}
      <Search />
      <div className="hidden md:flex items-center gap-x-5">
        <Link className="flex gap-x-2.5 text-base" to={"/aksiya"}>
          {milliyIcons.aksiya} <p>
            {t('header.aksiya')}
          </p>
        </Link>
        <Link className="flex gap-x-2.5 text-base" to={"/chosen"}>
          {milliyIcons.heart} <p>{t('header.izbrinni')}</p>
        </Link>

        <BasketModal />
        <button className="flex gap-x-2.5 text-base text-green-Default border border-green-Default py-2 px-4"
          onClick={() => {
            const url = `${access ? "/profile" : "/login"}`
            navigate(url)
          }}>
          {milliyIcons.profile}
          <span>{access ? t('header.profil') : t('header.login')}</span>
        </button>
      </div>
      <CatalogContainer
        setShowCatalog={setShowCatalog}
        showCatalog={showCatalog}
      />
    </nav>
  );
};

export default MainNavbar;
