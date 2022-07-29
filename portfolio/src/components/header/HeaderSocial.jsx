import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import {IoLogoLinkedin} from 'react-icons/io'
import { AiFillDribbbleCircle } from 'react-icons/ai'



const HeaderSocial = () => {
    return (
        <div className="header__socials">
        <a href="https://www.linkedin.com/in/tamara-frazzetta/" target="_blank" rel="noreferrer"> <IoLogoLinkedin/> </a>
        <a href="https://github.com/tamaraantonella" target="_blank" rel="noreferrer"> <AiOutlineGithub/> </a>
        <a href="https://dribbble.com/tamaraf" target="_blank" rel="noreferrer"> <AiFillDribbbleCircle/> </a>
    </div>
    )
}

export default HeaderSocial