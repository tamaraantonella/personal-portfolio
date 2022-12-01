import React from "react";
import CVES from "../../assets/CV_TAMARA_FRAZZETTA_FULLSTACK_ES.pdf"
import CVEN from "../../assets/CV_TAMARA_FRAZZETTA_FULLSTACK_EN.pdf"
import { useTranslation } from "react-i18next";
const Cta = () => {
  const [t] = useTranslation("global");
  return (
    <div className="mt-8 mb-5 flex gap-[1.2rem] justify-center items-center">
      <a
        href={t("header.downloadCv") === "Download CV" ? CVEN : CVES}
        className="border text-center border-solid rounded-md border-color_primary text-color_primary  px-5 py-2 w-max-content block pointer hover:bg-color_white transition ease-in-out duration-300 hover:text-color_bg hover:border-transparent">
        {t("header.downloadCv")}
      </a>
      <a
        href="#contact"
        className="border border-solid border-color_primary rounded-md text-black bg-color_primary px-5 py-2 w-max-content block pointer  hover:bg-color_white transition ease-in-out duration-300 hover:text-color_bg hover:border-transparent">
        {t("header.contact")}
      </a>
    </div>
  );
};

export default Cta;
