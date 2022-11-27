import React from "react";
import Cta from "./Cta";
import HeaderSocial from "./HeaderSocial";
import { useTranslation } from "react-i18next";
import Top from "./Top";
import { motion } from "framer-motion";

function Header() {
  const [t] = useTranslation("global");
  return (
    <section
      id="top"
      className=" min-h-screen max-h-content gap-5 flex flex-col-reverse items-center justify-center md:flex-row mx-auto md:justify-between md:gap-12 md:items-center ">
      <Top />
      <motion.div
        className="flex flex-col items-center mt-3 md:mt-8 gap-1 md:gap-1 md:items-start"
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.4 }}>
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
    </section>
  );
}

export default Header;
