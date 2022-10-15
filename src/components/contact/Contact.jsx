import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import { IoLogoLinkedin } from "react-icons/io";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";

export default function Contact() {
  const [t] = useTranslation("global");

  return (
    <section
      id="contact"
      className="flex flex-col items-center mx-auto  py-8 "
    >
      <h5 className={`text-color_light md:text-lg `}>{t("contact.intro")}</h5>
      <h2 className="text-3xl text-center my-3 md:text-5xl md:text-left mb-5">
        {" "}
        {t("contact.title")}
      </h2>
      <div className="flex flex-col md:flex-row gap-8  mx-auto justify-center mt-5">
        <div className="flex gap-5">
          <div className="flex items-center gap-3">
            <a
              className="text-color_light hover:text-color_white transition-all ease-in-out duration-300 text-2xl"
              href="https://www.linkedin.com/in/tamara-frazzetta/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <HiOutlineMail />{" "}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              className="text-color_light hover:text-color_white transition-all ease-in-out duration-300 text-2xl"
              href="https://www.linkedin.com/in/tamara-frazzetta/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <IoLogoLinkedin />{" "}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              className="text-color_light hover:text-color_white transition-all ease-in-out duration-300 text-2xl"
              href="https://github.com/tamaraantonella"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <AiOutlineGithub />{" "}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              className="text-color_light hover:text-color_white transition-all ease-in-out duration-300 text-2xl"
              href="https://twitter.com/TamaraaDev"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <AiOutlineTwitter />{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
