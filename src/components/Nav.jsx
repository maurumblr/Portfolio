import React from 'react'
import '../css/Nav.css'
import { AiOutlineHome, AiOutlineUser, AiOutlineCode } from 'react-icons/ai'
import {BsBriefcase} from 'react-icons/bs'
import {BiMessageRounded} from 'react-icons/bi'
import { useState } from 'react'



const Nav = () => {

  const [activeSection, setActiveSection] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setActiveSection('#')} className={activeSection === '#' ? 'active' : ''}>{<AiOutlineHome/>}</a>
      <a href="#about" onClick={() => setActiveSection('#about')} className={activeSection === '#about' ? 'active' : ''}  >{<AiOutlineUser/>}</a>
      <a href="#projects" onClick={() => setActiveSection('#projects')} className={activeSection === '#projects' ? 'active' : ''}>{<AiOutlineCode/>}</a>
      <a href="#skills" onClick={() => setActiveSection('#skills')} className={activeSection === '#skills' ? 'active' : ''}>{<BsBriefcase/>}</a>
      <a href="#contact" onClick={() => setActiveSection('#contact')} className={activeSection === '#contact' ? 'active' : ''}>{<BiMessageRounded/>}</a>
    </nav>
  )
}

export default Nav