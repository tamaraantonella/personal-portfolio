import React from "react";
import Cta from "./Cta";
import HeaderSocial from "./HeaderSocial";
import { useTranslation } from "react-i18next";
import Top from "./Top";

function Header() {
  const [t] = useTranslation("global");
  return (
    <header className="h-screen max-h-content pt-20 gap-5 md:flex mx-auto md:justify-between md:gap-12 md:items-center w-max-[1200px] w-[90%]">
      <Top />
      <div className="flex flex-col items-center mt-16 gap-3 md:gap-1 md:items-start">
        <h5 className={`text-color_light md:text-lg`}>{t("header.hello")}</h5>
        <h1 className="text-3xl text-center my-3 md:text-5xl animate-pulse md:text-left xl:text-7xl">
          Tamara Antonella Frazzetta
        </h1>
        <h5 className={`text-color_light md:text-lg`}>
          {t("header.position")}
        </h5>
        <HeaderSocial />
        <Cta />
      </div>
      <div>
        <img
          className="hidden md:w-72 md:block"
          src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1665695767/profile-pic_6_f28hg1.png"
          alt=""
        />
      </div>
    </header>
  );
}

export default Header;
