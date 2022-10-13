import React from "react";
import ExperienceBack from "./ExperienceBack";
import ExperienceFront from "./ExperienceFront";
import { useTranslation } from "react-i18next";

function Experience() {
  const [t] = useTranslation("global");
  return (
    <section
      id="experience"
      className="flex flex-col items-center w-[90%] mx-auto min-h-screen py-8 w-max-[1200px] "
    >
      <h5 className={`text-color_light md:text-lg `}>{t("skills.intro")}</h5>
      <h2 className="text-3xl text-center my-3 md:text-5xl md:text-left mb-5">
        {t("skills.title")}
      </h2>
      <div className="grid md:grid-cols-2 gap-3 mt-5 w-full">
        <div className="bg-color_bg_variant py-10 px-[2rem] border border-solid border-transparent hover:bg-transparent hover:border-color_primary_variant rounded-md">
          <h3 className="text-center mb-5 text-color_primary text-2xl ">
            Frontend
          </h3>
          <ExperienceFront />
        </div>
        <div className="rounded-md bg-color_bg_variant py-10 px-[2rem] border border-solid border-transparent hover:bg-transparent hover:border-color_primary_variant">
          <h3 className="text-center mb-5 text-color_primary text-2xl ">
            Backend
          </h3>
          <ExperienceBack />
        </div>
      </div>
    </section>
  );
}

export default Experience;
