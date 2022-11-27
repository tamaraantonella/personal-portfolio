import React from "react";
import Cta from "./Cta";
import HeaderSocial from "./HeaderSocial";
import { useTranslation } from "react-i18next";
import Top from "./Top";
import { motion } from "framer-motion";

export function Header() {
  const [t] = useTranslation("global");
  let easing = [0.6, -0.05, 0.01, 0.99];

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
        staggerDirection: 1,
      },
    },
  };
  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 0.6, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: easing, delay: 0.5 },
    },
  };
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

  const lastName = {
    initial: {
      y: -20,
    },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.4,
        staggerDirection: 1,
      },
    },
  };
  const letter = {
    initial: {
      y: 400,
    },
    animate: {
      y: 0,
      transition: { duration: 1, ...transition },
    },
  };

  const btnGroup = {
    initial: {
      y: -60,
      opacity: 0,
      transition: { duration: 0.6, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      animation: {
        duration: 0.6, ease: easing
      }
    }
  }
  return (
    <motion.section
      initial='initial'
      animate='animate'
      id="top"
      className=" min-h-screen max-h-content gap-5 flex flex-col-reverse items-center justify-center md:flex-row mx-auto md:justify-between md:gap-12 md:items-center ">
      <Top />
      <motion.div
        className="flex flex-col items-center mt-3 md:mt-8 gap-1 md:gap-1 md:items-start"
        variants={stagger}
        >
        <h1 className="text-3xl text-center my-3 md:text-5xl animate-pulse md:text-left xl:text-7xl">
          Tamara Antonella Frazzetta
        </h1>
        <div className="flex gap-3 items-center">
          <p className="text-color_primary">-</p>
          <h5 className={`text-color_light md:text-lg`}>
            {t("header.position")}
          </h5>
          <p className="text-color_primary">-</p>
        </div>
        <HeaderSocial />
        <Cta />
      </motion.div>
      <div>
        <img
          className="w-32 md:w-64 md:block"
          src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1665695767/profile-pic_6_f28hg1.png"
          alt=""
        />
      </div>
    </motion.section>
  );
}


