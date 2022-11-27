import React from "react";
import { useTranslation } from "react-i18next";
import { LangSwitch } from "../lang-switch/LangSwitch";
export default function Menu({ open, active, handleSelection, easing }) {
  const [t] = useTranslation("global");
  const menuStyle =
    open === null
      ? "z-50 justify-between pt-0 w-full py-0 flex flex-row bg-transparent gap-3 top-0 my-3 items-center h-12 backdrop-blur-sm "
      : open === true
      ? "py-8 w-screen left-0 h-screen gap-8 px-5 flex flex-col pt-20 bg-color_primary z-40 fixed"
      : "hidden";
  return (
    <div className={menuStyle}>
      <div className={`${open && "flex flex-col gap-4 "} flex-row`}>
        <a
          href="#top"
          onClick={() => handleSelection("#")}
          className={`text-md px-2 hover:text-color_primary transition-all duration-300 inline-block   ${
            active === "#" || active === "top"
              ? ` text-color_bg md:text-color_primary`
              : ` bg-transparent`
          }`}>
          {t("home.home")}
        </a>
        <a
          href="#about"
          onClick={() => handleSelection("#about")}
          className={`text-md px-2 hover:text-color_primary transition-all duration-300 inline-block ${
            active === "#about" || active === "about"
              ? ` text-color_bg md:text-color_primary`
              : ` bg-transparent`
          }`}>
          {t("about.title")}
        </a>
        <a
          href="#experience"
          onClick={() => handleSelection("#experience")}
          className={`text-md px-2 hover:text-color_primary transition-all duration-300 inline-block  ${
            active === "#experience" || active === "experience"
              ? ` text-color_bg md:text-color_primary`
              : ` bg-transparent`
          }`}>
          {t("skills.title")}
        </a>
        <a
          href="#project"
          onClick={() => handleSelection("#project")}
          className={`text-md px-2 hover:text-color_primary transition-all duration-300 inline-block ${
            active === "#project" || active === "project"
              ? ` text-color_bg md:text-color_primary`
              : ` bg-transparent`
          }`}>
          {t("projects.title")}
        </a>
        <a
          href="#contact"
          onClick={() => handleSelection("#contact")}
          className={`text-md px-2 hover:text-color_primary transition-all duration-300 inline-block ${
            active === "#contact" || active === "contact"
              ? ` text-color_bg md:text-color_primary`
              : ` bg-transparent`
          }`}>
          {t("contact.title")}
        </a>
      </div>
      <LangSwitch easing={easing} />
    </div>
  );
}
