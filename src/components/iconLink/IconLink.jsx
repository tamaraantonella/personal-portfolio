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
  return (
    <motion.a
      href={path}
      target="_blank"
      rel="noreferrer"
      variants={iconAnimate}
      whileHover="show"
      initial="hidden"
      className={`flex justify-center pb-3 transition-all ease-in-out duration-500 md:grayscale hover:grayscale-0 cursor-pointer ${
        name === "Express" && "invert"
      }`}>
      <motion.img className="h-10 w-10 md:h-14 md:w-14 " src={icon} alt={name} />
    </motion.a>
  );
}
