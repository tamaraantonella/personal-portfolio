import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export function LangSwitch({ easing, stagger }) {
  //eslint-disable-next-line
  const [t, i18n] = useTranslation("global");
  const [selected, setSelected] = useState("en");
  function handleClickLanguage(lang) {
    i18n.changeLanguage(lang);
    setSelected(lang);
  }
  const langSwitch = {
    initial: {
      y: -30,
      opacity: 0,
      transition: { duration: 0.05, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      animation: {
        duration: 0.5,
        ease: easing,
      },
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={stagger}
      className={` sm:relative sm:flex sm:justify-self-end sm:mt-0 sm:m-0 sm:items-center sm:justify-end
        `}>
      <motion.div className="flex items-center" variants={langSwitch}>
        <button
          onClick={() => handleClickLanguage("es")}
          className={
            (selected === "es"
              ? `bg-[#2a2a2e] sm:bg-color_primary text-color_bg_variant`
              : `bg-transparent`) +
            ` px-3  rounded-md py-1 text-sm h-fit`
          }>
          ES
        </button>
        <button
          className={
            (selected === "en"
              ? `bg-[#2a2a2e] sm:bg-color_primary text-color_bg_variant`
              : ` bg-transparent`) + ` px-3 rounded-md py-1 text-sm h-fit`
          }
          onClick={() => handleClickLanguage("en")}>
          EN
        </button>
      </motion.div>
    </motion.div>
  );
}
