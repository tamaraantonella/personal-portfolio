import IMG1 from "../../assets/img1.jpg";
import IMG2 from "../../assets/img2.jpg";
import React from "react";
import Project from "./Project";
import { TitleSubtitle } from "../title-subtitle/TitleSubtitle";
import { motion } from "framer-motion";

export function Projects({ title, subtitleAndContent, container }) {
  return (
    <motion.section
      id="project"
      className="flex flex-col items-center  mx-auto min-h-screen py-8 w-full  "
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}>
      <TitleSubtitle
        title={title}
        subtitleAndContent={subtitleAndContent}
        section="projects"
      />
      <motion.div
        className="flex flex-col gap-2 w-full"
        variants={subtitleAndContent}>
        <Project
          name="My Cattle Log"
          details="SPA - Group Project"
          tech="Tech: Js, Ts, Node.js, ReactJs, Redux, Express, MongoDB, Auth0,
         Tailwind."
          repo="https://github.com/RobTangle/My-Cattle-Log"
          liveDemo="https://my-cattle-log.vercel.app/"
          urlImg="https://res.cloudinary.com/dfbxjt69z/image/upload/v1670371183/portfolio/2022-12-06_20-52-11_ofewm5.gif"
        />
        <Project
          name="Mascotapp"
          details="SPA Bootcamp SoyHenry"
          tech="Tech: Js, Ts, Node.js, ReactJs, Redux, Express, PostgreSQL, Auth0,
        Stripe, Tailwind and Material UI."
          repo="https://github.com/laureanomarenco/mascotapps-front"
          liveDemo="https://mascotapp.vercel.app/"
          urlImg="https://res.cloudinary.com/dfbxjt69z/image/upload/v1665519582/Screenshot_2022-10-11_at_13-14-34_Mascotapp_xeqn4k.png"
        />
        <Project
          name="PI-Foody"
          details="SPA Bootcamp SoyHenry"
          tech="Tech: Javascript, React, Redux, NodeJS, Express, HTML5, CSS3,
            Sequelize y PostgreSQL."
          repo="https://github.com/tamaraantonella/PI-food-tamara"
          liveDemo="https://foody-app-indol.vercel.app/"
          urlImg="https://res.cloudinary.com/dfbxjt69z/image/upload/v1670370087/portfolio/2022-12-06_20-19-11_gzn7dt.gif"
        />
        <Project
          name="Arnica App"
          details="SPA"
          tech="Tech: Javascript, React."
          repo="https://github.com/tamaraantonella/arnica_app"
          liveDemo="https://arnica.vercel.app/"
          urlImg="https://res.cloudinary.com/dfbxjt69z/image/upload/v1666992014/Screenshot_2022-10-12_at_12-58-07_%C3%81rnica_Yoga_nrexal.png"
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
          urlImg="https://res.cloudinary.com/dfbxjt69z/image/upload/v1670371459/portfolio/2022-12-06_20-50-49_aup5kf.gif"
        />
      </motion.div>
    </motion.section>
  );
}
