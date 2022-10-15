import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Top() {
  //eslint-disable-next-line
  const [t, i18n] = useTranslation("global");
  const [selected, setSelected] = useState("en");
  function handleClickLanguage(lang) {
    i18n.changeLanguage(lang);
    setSelected(lang);
  }
  return (
    <div
      className={`absolute top-0 left-0 m-2 mt-5 sm:right-0 sm:flex sm:w-full sm:px-8 sm:my-3 sm:h-12 sm:items-center sm:justify-end
        `}
    >
      <div className="flex items-center">
        <button
          onClick={() => handleClickLanguage("es")}
          className={
            (selected === "es"
              ? `bg-color_primary text-color_bg_variant`
              : `bg-transparent`) + ` px-3  rounded-md py-1 text-sm h-fit`
          }
        >
          ES
        </button>
        <button
          className={
            (selected === "en"
              ? `bg-color_primary text-color_bg_variant`
              : `bg-transparent`) + ` px-3 rounded-md py-1 text-sm h-fit`
          }
          onClick={() => handleClickLanguage("en")}
        >
          EN
        </button>
      </div>
    </div>
  );
}
