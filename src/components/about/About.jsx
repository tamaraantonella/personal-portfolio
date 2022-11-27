import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { TitleSubtitle } from "../title-subtitle/TitleSubtitle";

export function About({ container, subtitleAndContent, title }) {
  const [t] = useTranslation("global");

  return (
    <motion.section
      id="about"
      className="flex flex-col items-center  mx-auto min-h-screen py-8 justify-center"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.8 }}>
      <TitleSubtitle
        title={title}
        subtitleAndContent={subtitleAndContent}
        section="about" />

      <motion.div
        className="flex flex-col text-justify justify-between gap-5 mt-8 "
        variants={subtitleAndContent}>
        <p>{t("about.text")}</p>
        <a
          href="#contact"
          className="border border-solid rounded-md border-color_primary px-5 py-2 w-fit my-8 block pointer text-color_primary  hover:bg-color_white transition ease-in-out duration-300 hover:text-color_bg hover:border-transparent">
          {t("about.contact")}
        </a>
      </motion.div>
    </motion.section>
  );
}
