import React from "react";
import { motion } from "framer-motion";

export default function IconLink({ path, icon, name }) {
  const rotateImg = {
    hidden: { scale:1},
    show: {
      scale: 1.4,
      transition: {
        duration: 0.4,

      },
    },
  };
  return (
    <a
      href={path}
      target="_blank"
      rel="noreferrer"
      className={`flex justify-center pb-3 transition-all ease-in-out duration-500 md:grayscale hover:grayscale-0 cursor-pointer ${
        name === "Express" && "invert"
      }`}>
      <motion.img
        className="h-12 w-12 "
        src={icon}
        alt={name}
        variants={rotateImg}
        whileHover="show"
        initial="hidden"
      />
    </a>
  );
}
