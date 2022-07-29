import React, { useState } from 'react'
import './nav.css'
import { BiHome } from 'react-icons/bi'
import { BiUser } from 'react-icons/bi'
import { FiBook } from 'react-icons/fi'
import { MdHomeRepairService } from 'react-icons/md'
import { MdOutlineMessage } from 'react-icons/md'


export default function Nav() {
const [active, setActive] = useState('#')
  return (
    <nav>
      <a href="#top" onClick={() => setActive('#')} className={active==='#' ? 'active': ''} > <BiHome/></a>
      <a href="#about" onClick={() => setActive('#about')} className={active==='#about' ? 'active': ''} > <BiUser/></a>
      <a href="#experience" onClick={() => setActive('#experience')} className={active==='#experience' ? 'active': ''}> <FiBook/></a>
      <a href="#services" onClick={() => setActive('#services')} className={active==='#services' ? 'active': ''}> <MdHomeRepairService/></a>
      <a href="#contact" onClick={() => setActive('#contact')} className={active==='#contact' ? 'active': ''}> <MdOutlineMessage/></a>
    </nav>
  )
}
