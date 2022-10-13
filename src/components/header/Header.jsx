import React from "react";
import Cta from "./Cta";
import "./header.css";
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocial";
import {useTranslation} from "react-i18next";

function Header() {
  const [t, i18n] = useTranslation("global");
  return (
    <header>
      <div className="container header__container">
        <h5>{t("header.hello")}</h5>
        <h1>Tamara Antonella Frazzetta</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Cta />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <button onClick={()=>i18n.changeLanguage("es")}>ES</button>
        <button onClick={()=>i18n.changeLanguage("en")}>EN</button>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
