import React from "react";
import { motion } from "framer-motion";

export default function IconLink({ path, icon, name }) {
  const iconAnimate = {
    hidden: { scale: 1 },
    show: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  };
  const socialMedia = ["github", "linkedin", "twitter", "gmail"];
  return (
    <motion.a
      href={path}
      target="_blank"
      rel="noreferrer"
      variants={iconAnimate}
      whileHover="show"
      initial="hidden"
      className={`flex flex-col items-center justify-center pb-3 transition-all ease-in-out duration-500 md:grayscale hover:grayscale-0 cursor-pointer `}>
      <motion.img
        className={`h-10 w-10 md:h-14 md:w-14 ${
          name === "Express" && "invert"
        }`}
        src={icon}
        alt={name}
      />
      <p>{socialMedia.includes(name) ? "" : name }</p>
    </motion.a>
  );
}
