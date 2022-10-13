import React from "react";
import CV from "../../assets/CV_Tamara_Frazzetta.pdf";
import { useTranslation } from "react-i18next";
const Cta = () => {
  const [t] = useTranslation("global");
  return (
    <div className="mt-8 mb-5 flex gap-[1.2rem] justify-center items-center">
      <a
        href={CV}
        className="border border-solid rounded-md border-color_primary text-color_primary  px-5 py-2 w-max-content block pointer hover:bg-color_white transition ease-in-out duration-300 hover:text-color_bg hover:border-transparent"
      >
        {t("header.downloadCv")}
      </a>
      <a
        href="#contact"
        className="border border-solid rounded-md bg-color_primary px-5 py-2 w-max-content block pointer text-color_bg_variant  hover:bg-color_white transition ease-in-out duration-300 hover:text-color_bg hover:border-transparent"
      >
        {t("header.contact")}
      </a>
    </div>
  );
};

export default Cta;
