import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const [t] = useTranslation("global");

  return (
    <section
      id="about"
      className="flex flex-col items-center  mx-auto min-h-screen py-8 justify-around"
    >
      <div>
        <h5 className={`text-color_light md:text-lg `}>{t("about.intro")}</h5>
        <h2 className="text-3xl text-center my-3 md:text-5xl md:text-left mb-5">
          {t("about.title")}
        </h2>
      </div>

      <div className="flex flex-col  justify-between gap-5  md:w-2/4">
        <p>{t("about.text")}</p>
        <a
          href="#contact"
          className="border border-solid rounded-md border-color_primary px-5 py-2 w-fit my-8 block pointer text-color_bg_variant  hover:bg-color_white transition ease-in-out duration-300 hover:text-color_bg hover:border-transparent"
        >
          {t("about.contact")}
        </a>
      </div>
    </section>
  );
}
