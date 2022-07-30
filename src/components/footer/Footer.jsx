import React from 'react'
import './footer.css'
import { AiOutlineGithub } from 'react-icons/ai'
import {IoLogoLinkedin} from 'react-icons/io'
import { AiFillDribbbleCircle } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'

function Footer() {
  return (
    <footer>
      <ul className="permalinks">
        <li><a href="#top">Home</a></li>
        <li><a href="about">About me</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/tamara-frazzetta/" target="_blank" rel="noreferrer"> <IoLogoLinkedin/> </a>
        <a href="https://github.com/tamaraantonella" target="_blank" rel="noreferrer"> <AiOutlineGithub/> </a>
        <a href="https://dribbble.com/tamaraf" target="_blank" rel="noreferrer"> <AiFillDribbbleCircle/> </a>
        <a href="https://twitter.com/TamaraaDev" target="_blank" rel="noreferrer"> <AiOutlineTwitter/> </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Tamara Antonella Frazzetta. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer