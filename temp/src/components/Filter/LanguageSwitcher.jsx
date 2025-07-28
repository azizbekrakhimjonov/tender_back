import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setLanguage } from '../../redux/languageSlice';
const languages = [
  { code: 'uz', label: 'Oʻzbekcha' },
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Русский' },
];

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const currentLang = useSelector((state) => state.language.lang);
  const { i18n } = useTranslation();

  const handleLanguageChange = (code) => {
    dispatch(setLanguage(code));
    i18n.changeLanguage(code);
  };

  return (
    <div className="flex gap-2">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => handleLanguageChange(code)}
          className={`px-4 py-2 rounded ${
            currentLang === code ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
