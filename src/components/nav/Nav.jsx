import React, { useState } from 'react'
import './nav.css'
import { BiHome } from 'react-icons/bi'
import { BiUser } from 'react-icons/bi'
import { HiAcademicCap } from 'react-icons/hi'
import { MdHomeRepairService } from 'react-icons/md'
import { MdOutlineMessage } from 'react-icons/md'


export default function Nav() {
const [active, setActive] = useState('#')
  return (
    <nav>
      <a href="#top" onClick={() => setActive('#')} className={active==='#' ? 'active': ''} > <BiHome/></a>
      <a href="#about" onClick={() => setActive('#about')} className={active==='#about' ? 'active': ''} > <BiUser/></a>
      <a href="#experience" onClick={() => setActive('#experience')} className={active==='#experience' ? 'active': ''}> <HiAcademicCap/></a>
      <a href="#projects" onClick={() => setActive('#projects')} className={active==='#projects' ? 'active': ''}> <MdHomeRepairService/></a>
      <a href="#contact" onClick={() => setActive('#contact')} className={active==='#contact' ? 'active': ''}> <MdOutlineMessage/></a>
    </nav>
  )
}
