import React from "react";
import { MdCode } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";
import { useTranslation } from "react-i18next";
export default function About() {
  const [t] = useTranslation("global");

  return (
    <section
      id="about"
      className="flex flex-col items-center w-[90%] mx-auto min-h-screen py-8 w-max-[1200px] "
    >
      <h5 className={`text-color_light md:text-lg `}>{t("about.intro")}</h5>
      <h2 className="text-3xl text-center my-3 md:text-5xl md:text-left mb-5">
        {t("about.title")}
      </h2>
      <div className="flex flex-col md:flex-row justify-between gap-5 mt-8 md:mt-8  md:w-full">
        <div className="grid grid-cols-2 gap-2 max-w-md md:w-1/3">
          <article className="cursor-pointer bg-color_bg_variant border border-solid border-transparent rounded-md p-8 text-center transition-all ease-in-out duration-300 hover:bg-transparent hover:border-color_primary flex flex-col items-center">
            <MdCode className="about__icon" />
            <h5>{t("about.items.1")}</h5>
            <small>{t("about.items.2")}</small>
          </article>
          <article className="cursor-pointer bg-color_bg_variant border border-solid border-transparent rounded-md p-8 text-center transition-all ease-in-out duration-300 hover:bg-transparent hover:border-color_primary flex flex-col items-center">
            <BiWorld className="about__icon" />
            <h5>{t("about.items.3")}</h5>
            <small>{t("about.items.4")}</small>
          </article>
          <article className="cursor-pointer bg-color_bg_variant border border-solid border-transparent rounded-md p-8 text-center transition-all ease-in-out duration-300 hover:bg-transparent hover:border-color_primary flex flex-col items-center col-span-2">
            <RiTeamFill className="" />
            <h5>{t("about.items.5")}</h5>
            <small>{t("about.items.6")}</small>
          </article>
        </div>
        <div className="md:w-2/4">
          <p>{t("about.text")}</p>
          <a
            href="#contact"
            className="border border-solid rounded-md bg-color_primary px-5 py-2 w-fit my-8 block pointer text-color_bg_variant  hover:bg-color_white transition ease-in-out duration-300 hover:text-color_bg hover:border-transparent"
          >
            {t("about.contact")}
          </a>
        </div>
      </div>
    </section>
  );
}
