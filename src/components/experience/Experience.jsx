import React from "react";
import { useTranslation } from "react-i18next";
import IconLink from "./IconLink";

function Experience() {
  const [t] = useTranslation("global");
  return (
    <section
      id="experience"
      className="flex flex-col items-center mx-auto min-h-screen py-8  lg:w-3/4  justify-center"
    >
      <h5 className={`text-color_light md:text-lg `}>{t("skills.intro")}</h5>
      <h2 className="text-3xl text-center my-3 md:text-5xl md:text-left mb-5">
        {t("skills.title")}
      </h2>

      <div className="grid grid-cols-6 justify-around  gap-3 mt-5 w-full">
        <IconLink
          name="auth0"
          path="https://auth0.com/"
          icon="https://res.cloudinary.com/dfbxjt69z/image/upload/v1665850653/icons/icons8-auth0-the-solution-you-need-for-web_-mobile_-iot_-and-internal-applications.-48_pdsycp.png"
        />
        <IconLink
          name="javascript"
          path="https://www.javascript.com/"
          icon="https://res.cloudinary.com/dfbxjt69z/image/upload/v1665850445/icons/icons8-javascript-48_ecmuyc.png"
        />
        <IconLink
          name="typescript"
          path="https://www.typescriptlang.org/"
          icon="https://res.cloudinary.com/dfbxjt69z/image/upload/v1665850446/icons/icons8-typescript-48_s6dww3.png"
        />
        <IconLink
          name="tailwind"
          path="https://tailwindcss.com/"
          icon="https://res.cloudinary.com/dfbxjt69z/image/upload/v1665850446/icons/icons8-tailwind-css-48_y4s9ic.png"
        />
        <IconLink
          name="react"
          path="https://es.reactjs.org/"
          icon="https://res.cloudinary.com/dfbxjt69z/image/upload/v1665850446/icons/icons8-react-a-javascript-library-for-building-user-interfaces-48_iwmci4.png"
        />
        <IconLink
          name="npm"
          path="https://www.npmjs.com/"
          icon="https://res.cloudinary.com/dfbxjt69z/image/upload/v1665850446/icons/icons8-ngp-48_fqnpdx.png"
        />
        <IconLink
          name="nodejs"
          path="https://nodejs.org/"
          icon="https://res.cloudinary.com/dfbxjt69z/image/upload/v1665850445/icons/icons8-nodejs-48_p3nbkq.png"
        />
        <IconLink
          name="postgresql"
          path="https://www.postgresql.org/"
          icon="https://res.cloudinary.com/dfbxjt69z/image/upload/v1665850446/icons/icons8-postgresql-48_bk2jc8.png"
        />
        <IconLink
          name="material ui"
          path="https://mui.com/"
          icon="https://res.cloudinary.com/dfbxjt69z/image/upload/v1665850445/icons/icons8-material-ui-48_rhlev4.png"
        />
        <IconLink
          name="git"
          path="https://git-scm.com/"
          icon="https://res.cloudinary.com/dfbxjt69z/image/upload/v1665850445/icons/icons8-git-48_ysp95w.png"
        />
        <IconLink
          name="express"
          path="https://expressjs.com/es/"
          icon="https://res.cloudinary.com/dfbxjt69z/image/upload/v1665850445/icons/icons8-express-js-48_x4mgtg.png"
        />
        <IconLink
          name="html"
          icon="https://res.cloudinary.com/dfbxjt69z/image/upload/v1665850445/icons/icons8-html-5-48_imakok.png"
        />
        <IconLink
          name="sequelize"
          path="https://sequelize.org/"
          icon="https://res.cloudinary.com/dfbxjt69z/image/upload/v1665850445/icons/17839680241551942828-48_np01ju.png"
        />
        <IconLink
          name="css"
          icon="https://res.cloudinary.com/dfbxjt69z/image/upload/v1665850444/icons/icons8-css3-48_f9owtl.png"
        />
        <IconLink
          name="postman"
          path="https://www.postman.com/"
          icon="https://res.cloudinary.com/dfbxjt69z/image/upload/v1665850444/icons/16475775581551942134-48_bq8zaf.png"
        />
        <IconLink
          name="firebase"
          path="https://firebase.google.com/"
          icon="https://res.cloudinary.com/dfbxjt69z/image/upload/v1665850444/icons/6247864081536298180-48_udskfp.png"
        />
        <IconLink
          name="redux"
          path="https://redux.js.org/"
          icon="https://res.cloudinary.com/dfbxjt69z/image/upload/v1665850444/icons/9818154791551942292-48_bunbkz.png"
        />
        <IconLink
          name="bootstrap"
          path="https://getbootstrap.com/"
          icon="https://res.cloudinary.com/dfbxjt69z/image/upload/v1665852702/icons/icons8-oreja-48_j7qg21.png"
        />
      </div>
    </section>
  );
}

export default Experience;
