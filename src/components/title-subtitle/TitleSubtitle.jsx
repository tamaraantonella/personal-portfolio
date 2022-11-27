import React from 'react'
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function TitleSubtitle({title, subtitleAndContent, section}) {
  const [t] = useTranslation("global");
  return (
    <>
      <motion.h5 className={`text-color_light md:text-lg `} variants={title}>
        {t(`${section}.intro`)}
      </motion.h5>
      <motion.h2
        className="text-3xl text-center my-3 md:text-5xl md:text-left mb-12"
        variants={subtitleAndContent}>
        {t(`${section}.title`)}
      </motion.h2>
    </>
  );
}
