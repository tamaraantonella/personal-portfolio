import FOODY from "../../assets/FOODY.png";
import IMG1 from "../../assets/img1.jpg";
import IMG2 from "../../assets/img2.jpg";
import IMG3 from "../../assets/img3.png";
import React from "react";
import { useTranslation } from "react-i18next";
import Project from "./Project";

export default function Contact() {
  const [t] = useTranslation("global");

  return (
    <section
      id="project"
      className="flex flex-col items-center  mx-auto min-h-screen py-8 w-full  "
    >
      <h5 className={`text-color_light md:text-lg `}>{t("projects.intro")}</h5>
      <h2 className="text-3xl text-center my-3 md:text-5xl md:text-left mb-5">
        {t("projects.title")}
      </h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-2 w-full">
        <Project
          name="Mascotapp"
          details="SPA Bootcamp SoyHenry"
          tech="Tech: Js, Ts, Node.js, ReactJs, Redux, Express, PostgreSQL, Auth0,
        Stripe, Tailwind and Material UI."
          repo="https://github.com/laureanomarenco/mascotapps-front"
          liveDemo="https://mascotapps.vercel.app/"
          urlImg="https://res.cloudinary.com/dfbxjt69z/image/upload/v1665519582/Screenshot_2022-10-11_at_13-14-34_Mascotapp_xeqn4k.png" //mascotapps.vercel.app/""
        />
        <Project
          name="PI-Foody"
          details="SPA Bootcamp SoyHenry"
          tech="Tech: Javascript, React, Redux, NodeJS, Express, HTML5, CSS3,
            Sequelize y PostgreSQL."
          repo="https://github.com/tamaraantonella/PI-food-tamara"
          liveDemo="https://foody-app-indol.vercel.app/"
          urlImg={FOODY}
        />
        <Project
          name="Huerta del tomate"
          details="SPA"
          tech="Tech: Javascript, React, CSS3."
          repo="https://github.com/tamaraantonella/pf-huerta-del-tomate"
          liveDemo="https://huertadeltomate.netlify.app/"
          urlImg={IMG1}
        />
        <Project
          name="Ecommerce shoe box"
          details="Web Ecommerce"
          tech="Tech: HTML, CSS & Js"
          repo="https://github.com/tamaraantonella/js_coder_house"
          liveDemo="https://tamaraantonella.github.io/js_coder_house/"
          urlImg={IMG2}
        />
        <Project
          name="LP Hollistic"
          details="Landing Page"
          tech="Tech: HTML, CSS & Js"
          repo="https://github.com/tamaraantonella/adriana_amorelli_holistic"
          liveDemo="https://tamaraantonella.github.io/adriana_amorelli_holistic/"
          urlImg={IMG3}
        />
      </div>
    </section>
  );
}
