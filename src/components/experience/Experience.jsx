import React from "react";
import IconLink from "../iconLink/IconLink";
import { motion } from "framer-motion";
import { TitleSubtitle } from "../title-subtitle/TitleSubtitle";
import { skills } from "../../constants/skills";

export function Experience({ container, subtitleAndContent, title }) {

  const CLOUD_URL =
    "https://res.cloudinary.com/dfbxjt69z/image/upload/";

  return (
    <motion.section
      id="experience"
      className="flex flex-col items-center mx-auto min-h-screen py-8  lg:w-3/4  justify-center"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.8 }}>
      <TitleSubtitle
        title={title}
        subtitleAndContent={subtitleAndContent}
        section="skills"
      />

      <div className="grid grid-cols-6  max-w-4xl justify-around  gap-3 mt-5 w-full">
        {skills.map((skill) => (
          <IconLink
            key={Math.random()}
            path={skill.path}
            icon={`${CLOUD_URL}${skill.icon}`}
            name={skill.name}
          />
        ))}
      </div>
    </motion.section>
  );
}
