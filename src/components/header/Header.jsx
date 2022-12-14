import React from "react";
import Cta from "./Cta";
import HeaderSocial from "./HeaderSocial";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

export function Header({ stagger, easing, transition }) {
  const [t] = useTranslation("global");
const fadeInUp = {
  initial: {

    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
  animate: {

    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.5,
      ease: easing,
    },
  },
};
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.4 }}
      transition={{ duration: 0.3, ease: easing }}
      animate={{ opacity: 1, scale: 1 }}
      id="top"
      className=" min-h-screen max-h-content gap-5 flex flex-col-reverse items-center justify-center md:flex-row mx-auto md:justify-between md:gap-12 md:items-center ">
      <motion.div
        className="flex flex-col items-center mt-3 md:mt-8 gap-1 md:gap-1 md:items-start"
        initial='initial' animate='animate'>
        <h1 className="text-3xl text-center my-3 md:text-5xl  md:text-left xl:text-7xl">
          Tamara Antonella Frazzetta
        </h1>
        <motion.div className="flex gap-3 items-center" variants={stagger}>
          <p className="text-color_primary">-</p>
          <motion.h5
            className={`text-color_light md:text-lg`}
            variants={fadeInUp}>
            {t("header.position")}
          </motion.h5>
          <p className="text-color_primary">-</p>
        </motion.div>
        <HeaderSocial transition={transition} />
        <Cta />
      </motion.div>
      <div>
        {/* <img
          className="w-32 md:w-64 md:block"
          src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1665695767/profile-pic_6_f28hg1.png"
          alt=""
        /> */}
      </div>
    </motion.section>
  );
}
