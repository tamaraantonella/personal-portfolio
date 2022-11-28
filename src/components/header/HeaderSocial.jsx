import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import { AiOutlineTwitter } from "react-icons/ai";
import { motion } from "framer-motion";
const HeaderSocial = () => {
  const icon = {
    initial: {
      y: 600,
    },
    animate: {
      y: 0,
      transition: { duration: 0.4 },
    },
  };
  return (
    <motion.div
      className="hidden md:flex items-center w-1/3 justify-around md:justify-start md:gap-5 md:mt-8"
      >
      <motion.a
        variants={icon}
        className="text-color_light hover:text-color_white transition-all ease-in-out duration-300 text-2xl"
        href="https://www.linkedin.com/in/tamara-frazzetta/"
        target="_blank"
        rel="noreferrer">
        {" "}
        <IoLogoLinkedin />{" "}
      </motion.a>
      <motion.a
        variants={icon}
        className="text-color_light hover:text-color_white transition-all ease-in-out duration-300 text-2xl"
        href="https://github.com/tamaraantonella"
        target="_blank"
        rel="noreferrer">
        {" "}
        <AiOutlineGithub />{" "}
      </motion.a>

      <motion.a
        variants={icon}
        className="text-color_light hover:text-color_white transition-all ease-in-out duration-300 text-2xl"
        href="https://twitter.com/TamaraaDev"
        target="_blank"
        rel="noreferrer">
        {" "}
        <AiOutlineTwitter />{" "}
      </motion.a>
    </motion.div>
  );
};

export default HeaderSocial;
