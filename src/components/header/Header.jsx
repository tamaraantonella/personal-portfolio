import React from 'react'
import Cta from './Cta'
import './header.css'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Tamara Antonella Frazzetta</h1>
        <h5 className="text-light">
          Fullstack Developer
        </h5>
        <Cta />
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt=""/>
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header