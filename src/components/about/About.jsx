import React from 'react'
import './about.css'
import ME from '../../assets/me2.jpeg'
import { RiAwardFill } from 'react-icons/ri'
import { BsFolder } from 'react-icons/bs'
import { TbMessageLanguage } from 'react-icons/tb'



export default function About() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="Me" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <RiAwardFill className='about__icon'/>
              <h5>Experience</h5>
              <small>Trainee</small>
            </article>
            <article className='about__card'>
              <TbMessageLanguage className='about__icon'/>
              <h5>Languages</h5>
              <small>English & Spanish</small>
            </article>
            <article className='about__card'>
              <BsFolder className='about__icon'/>
              <h5>Soft Skills</h5>
              <small>Organized & proactive</small>
            </article>
          </div>
          <p>
            Hi! I'm Tamara, I started as a self-taught on platforms such as freeCampCode and SoloLearn, then studied at CoderHouse and Henry and now I'm fullstack developer based in Argentina.
            I am passionate about working in teams, and my main focus is to get my first job experience.
          </p>
          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>

</div>
    </section>
  )
}
