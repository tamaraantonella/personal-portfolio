import FOODY from "../../assets/FOODY.png";
import IMG1 from "../../assets/img1.jpg";
import IMG2 from "../../assets/img2.jpg";
import IMG3 from "../../assets/img3.png";
import React from "react";

function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center w-[90%] mx-auto min-h-screen py-8 w-max-[1200px] "
    >
      <h5 className={`text-color_light md:text-lg `}>Bootcamp Projects</h5>
      <h2 className="text-3xl text-center my-3 md:text-5xl md:text-left mb-5">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        <article className="bg-color_bg_variant border border-solid border-transparent p-[1.4rem] rounded-md transition-all duration-300 flex flex-col w-full hover:border-color_primary_variant hover:bg-transparent">
          <div className="rounded-md w-full h-[200px] md:h-[250px]">
            <img
              className="w-full h-full object-cover object-center transform ease-in-out duration-300 hover:scale-[1.01] rounded-md"
              src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1665519582/Screenshot_2022-10-11_at_13-14-34_Mascotapp_xeqn4k.png"
              alt=""
            />
          </div>
          <h3 className="font-semibold text-xl mt-3">Mascotapp</h3>
          <h5 className="text-color_light">SPA Bootcamp SoyHenry</h5>
          <h5 className="text-color_light mb-3">
            Tech: Js, Ts, Node.js, ReactJs, Redux, Express, PostgreSQL, Auth0,
            Stripe, Tailwind and Material UI.
          </h5>
          <div className="flex gap-2 mb-3">
            <a
              href="https://github.com/laureanomarenco/mascotapps-front"
              className="border border-solid rounded-md border-color_primary text-color_primary  px-5 py-2 w-max-content block pointer hover:bg-color_white transition ease-in-out duration-300 hover:text-color_bg hover:border-transparent"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
            <a
              href="https://mascotapps.vercel.app/"
              className="border border-solid rounded-md bg-color_primary px-5 py-2 w-max-content block pointer text-color_bg_variant  hover:bg-color_white transition ease-in-out duration-300 hover:text-color_bg hover:border-transparent"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="bg-color_bg_variant border border-solid border-transparent p-[1.4rem] rounded-md transition-all duration-300 flex flex-col w-full hover:border-color_primary_variant hover:bg-transparent">
          <div className="rounded-md w-full h-[200px] md:h-[250px]">
            <img
              className="w-full h-full object-cover object-center transform ease-in-out duration-300 hover:scale-[1.01] rounded-md"
              src={FOODY}
              alt=""
            />
          </div>
          <h3 className="font-semibold text-xl mt-3">PI-Foody </h3>
          <h5 className="text-color_light">
            SPA - recipes -- Bootcamp SoyHenry
          </h5>
          <h5 className="text-color_light mb-3">
            Tech: Javascript, React, Redux, NodeJS, Express, HTML5, CSS3,
            Sequelize y PostgreSQL
          </h5>
          <div className="flex gap-2 mb-3">
            <a
              href="https://github.com/tamaraantonella/PI-food-tamara"
              className="border border-solid rounded-md border-color_primary text-color_primary  px-5 py-2 w-max-content block pointer hover:bg-color_white transition ease-in-out duration-300 hover:text-color_bg hover:border-transparent"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
            <a
              href="https://foody-app-indol.vercel.app/"
              className="border border-solid rounded-md bg-color_primary px-5 py-2 w-max-content block pointer text-color_bg_variant  hover:bg-color_white transition ease-in-out duration-300 hover:text-color_bg hover:border-transparent"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="bg-color_bg_variant border border-solid border-transparent p-[1.4rem] rounded-md transition-all duration-300 flex flex-col w-full hover:border-color_primary_variant hover:bg-transparent">
          <div className="rounded-md w-full h-[200px] md:h-[250px]">
            <img
              className="w-full h-full object-cover object-center transform ease-in-out duration-300 hover:scale-[1.01] rounded-md"
              src={IMG1}
              alt=""
            />
          </div>
          <h3 className="font-semibold text-xl mt-3">Huerta del tomate website</h3>
          <h5 className="text-color_light mb-3">
            Website HTML, CSS, SASS -- Coderhouse
          </h5>

          <div className="flex gap-2 mb-3">
            <a
              href="https://github.com/tamaraantonella/pf-huerta-del-tomate"
              className="border border-solid rounded-md border-color_primary text-color_primary  px-5 py-2 w-max-content block pointer hover:bg-color_white transition ease-in-out duration-300 hover:text-color_bg hover:border-transparent"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
            <a
              href="https://huertadeltomate.netlify.app/"
              className="border border-solid rounded-md bg-color_primary px-5 py-2 w-max-content block pointer text-color_bg_variant  hover:bg-color_white transition ease-in-out duration-300 hover:text-color_bg hover:border-transparent"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="bg-color_bg_variant border border-solid border-transparent p-[1.4rem] rounded-md transition-all duration-300 flex flex-col w-full hover:border-color_primary_variant hover:bg-transparent">
          <div className="rounded-md w-full h-[200px] md:h-[250px]">
            <img
              className="w-full h-full object-cover object-center transform ease-in-out duration-300 hover:scale-[1.01] rounded-md"
              src={IMG2}
              alt=""
            />
          </div>
          <h3 className="font-semibold text-xl mt-3">Ecommerce shoe box</h3>
          <h5 className="text-color_light mb-3">
            Website HTML, CSS & Js --Coderhouse
          </h5>
          <div className="flex gap-2 mb-3">
            <a
              href="https://github.com/tamaraantonella/js_coder_house"
              className="border border-solid rounded-md border-color_primary text-color_primary  px-5 py-2 w-max-content block pointer hover:bg-color_white transition ease-in-out duration-300 hover:text-color_bg hover:border-transparent"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
            <a
              href="https://tamaraantonella.github.io/js_coder_house/"
              className="border border-solid rounded-md bg-color_primary px-5 py-2 w-max-content block pointer text-color_bg_variant  hover:bg-color_white transition ease-in-out duration-300 hover:text-color_bg hover:border-transparent"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="bg-color_bg_variant border border-solid border-transparent p-[1.4rem] rounded-md transition-all duration-300 flex flex-col w-full hover:border-color_primary_variant hover:bg-transparent">
          <div className="rounded-md w-full h-[200px] md:h-[250px]">
            <img
              className="w-full h-full object-cover object-center transform ease-in-out duration-300 hover:scale-[1.01] rounded-md"
              src={IMG3}
              alt=""
            />
          </div>
          <h3 className="font-semibold text-xl mt-3">LP Hollistic</h3>
          <h5 className="text-color_light mb-3">Landing page - HTML & CSS</h5>
          <div className="flex gap-2 mb-3">
            <a
              href="https://github.com/tamaraantonella/adriana_amorelli_holistic"
              className="border border-solid rounded-md border-color_primary text-color_primary  px-5 py-2 w-max-content block pointer hover:bg-color_white transition ease-in-out duration-300 hover:text-color_bg hover:border-transparent"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
            <a
              href="https://tamaraantonella.github.io/adriana_amorelli_holistic/"
              className="border border-solid rounded-md bg-color_primary px-5 py-2 w-max-content block pointer text-color_bg_variant  hover:bg-color_white transition ease-in-out duration-300 hover:text-color_bg hover:border-transparent"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;
