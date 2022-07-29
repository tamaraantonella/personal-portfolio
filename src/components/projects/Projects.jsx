import React from 'react'
import './projects.css'
import IMG1 from '../../assets/img1.jpg'
import IMG2 from '../../assets/img2.jpg'
import IMG3 from '../../assets/img3.png'


function Projects() {
  return (
    <section id="projects">
      <h5>Bootcamp Projects</h5>
      <h2>Projects</h2>
      <div className="container projects__container">
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG1} alt="" />
          </div>
          <h3>Huerta del tomate website</h3>
          <h5>Website HTML, CSS, SASS</h5>

          <div className="portfolio__item-cta">
            <a href="https://github.com/tamaraantonella/pf-huerta-del-tomate" className='btn' target='_blank' rel='noreferrer'>Repo</a>
            <a href="https://tamaraantonella.github.io/pf-huerta-del-tomate/" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>

          </div>
          </article>
          <article className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
          </div>
          <h3>Ecommerce shoe box</h3>
          <h5>Website HTML, CSS & Js</h5>
          <div className="portfolio__item-cta">
                <a href="https://github.com/tamaraantonella/js_coder_house" className='btn' target='_blank' rel='noreferrer'>Repo</a>
                <a href="https://tamaraantonella.github.io/js_coder_house/" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article>
          <article className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
              </div>
          <h3>LP Hollistic</h3>
          <h5>Landing page - HTML & CSS</h5>
          <div className="portfolio__item-cta">
                <a href="https://github.com/tamaraantonella/adriana_amorelli_holistic" className='btn' target='_blank' rel='noreferrer'>Repo</a>
                <a href="https://tamaraantonella.github.io/adriana_amorelli_holistic/" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article>
      </div>

    </section>
  )
}

export default Projects