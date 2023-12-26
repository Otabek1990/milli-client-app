import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Global, Logo, milliyIcons } from "../../Assets";
import { response } from "../Global/Response";
import { Context } from "../../App";
import { useTranslation } from "react-i18next";
import SelectLanguage from "./SelectLanguage";

const UpperNavbar = () => {
  const { setLang, lang } = useContext(Context)
  const { t, i18n } = useTranslation();
  const handleChangeLanguage = e => {
    setLang(e.target.value)
    i18n.changeLanguage(e.target.value)

  }
  // {t('headerTitle', { appName: "App for Translations" })}
  return (
    <section className="w-full  bg-white-whites">
      <div className={`${response.containerBoxPadding} flex justify-between items-center md:px-[100px] px-5 py-2`}>
        <div className="flex gap-x-8">
          <div className="flex items-center gap-x-7">
            <Link className="md:hidden block" to={"./"}>
              <img className="w-24 h-auto" src={Logo} alt="Logo" />
            </Link>
            <SelectLanguage />
          </div>
          <Link className="hidden md:block text-gray-lightGray text-base px-2.5 py-1.5">

            {t('header.dokonlar')}
          </Link>

          <Link className="hidden md:block text-green-Default border border-green-Default rounded text-base px-2.5 py-1.5">
            {t('header.sotuvchiBolish')}
          </Link>
        </div>
        <div className="md:hidden flex gap-x-7">
          <Link>{milliyIcons.aksiya}</Link>
          <Link>{milliyIcons.call}</Link>
        </div>
        <div className="hidden md:flex items-center gap-x-8">
          <Link className="text-gray-lightGray text-base px-2.5 py-1.5">
            +99 899 999-99-99
          </Link>
          <Link className="text-gray-lightGray text-base px-2.5 py-1.5">
            {t('header.bizBnAloqa')}

          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpperNavbar;

