import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import Top from "../header/Top";

export default function Nav() {
  const [t] = useTranslation("global");
  const [active, setActive] = useState("#");
  const [open, setOpen] = useState(false);
  function handleMenu() {
    setOpen(!open);
  }
  function handleSelection(what) {
    setActive(what);
    setOpen(false);
  }

  return (
    <>
      <button
        onClick={handleMenu}
        className={
          `fixed sm:hidden right-0 m-2 px-1 rounded-md mt-5 z-50 text-color_primary text-3xl` +
          (open ? ` bg-color_primary text-black` : ``)
        }
      >
        {!open ? <FiMenu /> : <MdOutlineClose />}
      </button>

      <div
        className={`fixed sm:z-50 sm:w-max sm:h-fit sm:pt-0 sm:rotate-90 sm:flex sm:flex-row sm:bg-transparent  sm:gap-5 sm:top-[50%] sm:translate-x-[50%] sm:right-0 mr-10  ${
          open === true
            ? "py-8 w-full h-screen gap-8 px-5 flex flex-col pt-20 bg-color_primary z-40"
            : "hidden"
        }`}
      >
        <a
          href="#top"
          onClick={() => handleSelection("#")}
          className={`text-md px-2 inline-block   ${
            active === "#"
              ? ` bg-color_primary text-color_bg`
              : ` bg-transparent`
          }`}
        >
          {t("home.home")}
        </a>
        <a
          href="#about"
          onClick={() => handleSelection("#about")}
          className={`text-md px-2 inline-block ${
            active === "#about"
              ? ` bg-color_primary text-color_bg`
              : ` bg-transparent`
          }`}
        >
          {t("about.title")}
        </a>
        <a
          href="#experience"
          onClick={() => handleSelection("#experience")}
          className={`text-md px-2 inline-block  ${
            active === "#experience"
              ? ` bg-color_primary text-color_bg`
              : ` bg-transparent`
          }`}
        >
          {t("skills.title")}
        </a>
        <a
          href="#projects"
          onClick={() => handleSelection("#projects")}
          className={`text-md px-2 inline-block ${
            active === "#projects"
              ? ` bg-color_primary text-color_bg`
              : ` bg-transparent`
          }`}
        >
          {t("projects.title")}
        </a>
        <a
          href="#contact"
          onClick={() => handleSelection("#contact")}
          className={`text-md px-2 inline-block ${
            active === "#contact"
              ? ` bg-color_primary text-color_bg`
              : ` bg-transparent`
          }`}
        >
          {t("contact.title")}
        </a>
      </div>
    </>
  );
}
