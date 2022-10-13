import FOODY from '../../assets/FOODY.png'
import IMG1 from '../../assets/img1.jpg'
import IMG2 from '../../assets/img2.jpg'
import IMG3 from '../../assets/img3.png'
import React from 'react'

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
      <div className="grid md:grid-cols-3 gap-3">
        <article className="bg-color_bg_variant border border-solid border-transparent p-[1.4rem] rounded-md transition-all duration-300 flex flex-col w-full hover:border-color_primary_variant hover:bg-transparent">
          <div className="portfolio__item-image">
            <img
              src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1665519582/Screenshot_2022-10-11_at_13-14-34_Mascotapp_xeqn4k.png"
              alt=""
            />
          </div>
          <h3>Mascotapp</h3>
          <h5>SPA Bootcamp SoyHenry</h5>
          <h5>
            Tech: Js, Ts, Node.js, ReactJs, Redux, Express, PostgreSQL, Auth0,
            Stripe, Tailwind and Material UI.
          </h5>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/laureanomarenco/mascotapps-front"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
            <a
              href="https://mascotapps.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="bg-color_bg_variant border border-solid border-transparent p-[1.4rem] rounded-md transition-all duration-300 flex flex-col w-full hover:border-color_primary_variant hover:bg-transparent">
          <div className="portfolio__item-image">
            <img src={FOODY} alt="" />
          </div>
          <h3>PI-Foody </h3>
          <h5>SPA - recipes -- Bootcamp SoyHenry</h5>
          <h5>
            Tech: Javascript, React, Redux, NodeJS, Express, HTML5, CSS3,
            Sequelize y PostgreSQL
          </h5>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/tamaraantonella/PI-food-tamara"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
            <a
              href="https://foody-app-indol.vercel.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="bg-color_bg_variant border border-solid border-transparent p-[1.4rem] rounded-md transition-all duration-300 flex flex-col w-full hover:border-color_primary_variant hover:bg-transparent">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Huerta del tomate website</h3>
          <h5>Website HTML, CSS, SASS -- Coderhouse</h5>

          <div className="portfolio__item-cta">
            <a
              href="https://github.com/tamaraantonella/pf-huerta-del-tomate"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
            <a
              href="https://huertadeltomate.netlify.app/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="bg-color_bg_variant border border-solid border-transparent p-[1.4rem] rounded-md transition-all duration-300 flex flex-col w-full hover:border-color_primary_variant hover:bg-transparent">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Ecommerce shoe box</h3>
          <h5>Website HTML, CSS & Js --Coderhouse</h5>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/tamaraantonella/js_coder_house"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
            <a
              href="https://tamaraantonella.github.io/js_coder_house/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="bg-color_bg_variant border border-solid border-transparent p-[1.4rem] rounded-md transition-all duration-300 flex flex-col w-full hover:border-color_primary_variant hover:bg-transparent">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>LP Hollistic</h3>
          <h5>Landing page - HTML & CSS</h5>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/tamaraantonella/adriana_amorelli_holistic"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
            <a
              href="https://tamaraantonella.github.io/adriana_amorelli_holistic/"
              className="btn btn-primary"
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

export default Projects