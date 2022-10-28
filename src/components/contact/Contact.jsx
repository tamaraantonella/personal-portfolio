import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import { IoLogoLinkedin } from "react-icons/io";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";
import IconLink from "../iconLink/IconLink";

export default function Contact() {
  const [t] = useTranslation("global");

  return (
    <section
      id="contact"
      className="flex flex-col items-center mx-auto  py-8 h-[400px] lg:h-[700px] justify-center"
    >
      <h5 className={`text-color_light md:text-lg text-center `}>
        {t("contact.intro")}
      </h5>
      <h2 className="text-3xl text-center my-3 md:text-5xl md:text-left mb-5">
        {" "}
        {t("contact.title")}
      </h2>
      <div className="flex flex-col md:flex-row gap-8  mx-auto justify-center mt-8">
        <div className="flex gap-5">
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
        </div>
      </div>
    </section>
  );
}
