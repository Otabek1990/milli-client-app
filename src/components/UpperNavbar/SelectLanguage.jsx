import React, { useContext, useState } from 'react'
import { milliyIcons } from '../../Assets';
import { Context } from '../../App';
import { useTranslation } from 'react-i18next';

function SelectLanguage() {
    const { setLang,lang } = useContext(Context);
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { value: 'ln', label: "O'zbekcha", icon: milliyIcons.uz },
        { value: 'ru', label: "Русский", icon: milliyIcons.ru }
    ];

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleChangeLanguage = (language) => {
        setLang(language.value);
        i18n.changeLanguage(language.value);
        setIsOpen(false);
    };
    return (
        <div className="relative">
            <div className="flex gap-1 w-auto cursor-pointer" onClick={handleToggle}>
                <span className='rounded-full overflow-hidden w-5 h-5'>
                    {languages.find(langg => langg.value === lang)?.icon}
                </span>
                {languages.find(langg => langg.value === lang)?.label}
            </div>
            {isOpen && (
                <div className="gap-1 absolute flex flex-col bg-white-Default z-50 w-auto rounded-b-md shadow-2xl px-2 py-1 border-x border-b">
                    {languages
                        .filter(langg => langg.value !== lang)
                        .map((language) => (
                            <div
                                key={language.value}
                                className="flex gap-1 cursor-pointer"
                                onClick={() => handleChangeLanguage(language)}
                            >
                                <span className='rounded-full overflow-hidden w-5 h-5'>
                                    {language.icon}
                                </span>
                                {language.label}  
                            </div>
                        ))}
                </div>
            )}
        </div>

    )
}

export default SelectLanguage