import React from "react";
import IconLink from "../iconLink/IconLink";
import { motion } from "framer-motion";
import { TitleSubtitle } from "../title-subtitle/TitleSubtitle";

export function Contact({ container, subtitleAndContent, title }) {


  return (
    <motion.section
      id="contact"
      className="flex flex-col items-center mx-auto  py-8 h-[400px] lg:h-[700px] justify-center"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.8 }}>
      <TitleSubtitle
        title={title}
        subtitleAndContent={subtitleAndContent}
        section="contact"
      />
      <motion.div className="flex gap-5 mx-auto" variants={subtitleAndContent}>
        <IconLink
          name="twitter"
          path="https://twitter.com/TamaraaDev"
          icon="https://res.cloudinary.com/dfbxjt69z/image/upload/v1666992263/icons/icons8-twitter-48_aydxrx.png"
        />
        <IconLink
          name="linkedin"
          path="https://www.linkedin.com/in/tamara-frazzetta/"
          icon="https://res.cloudinary.com/dfbxjt69z/image/upload/v1666992262/icons/icons8-linkedin-48_knibze.png"
        />
        <IconLink
          name="gmail"
          path="mailto:tamarafrazzetta@gmail.com"
          icon="https://res.cloudinary.com/dfbxjt69z/image/upload/v1666992261/icons/icons8-gmail-48_kwaqji.png"
        />
        <IconLink
          name="github"
          path="https://github.com/tamaraantonella"
          icon="https://res.cloudinary.com/dfbxjt69z/image/upload/v1666992260/icons/icons8-github-48_i9vid8.png"
        />
      </motion.div>
    </motion.section>
  );
}
