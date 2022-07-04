import React from 'react'
import '../../css/Header.css'
import ButtonCTA from './ButtonCTA'
import ME from '../../images/me.png'
import HeaderSocials from './HeaderSocials'
import {HiOutlineChevronDoubleDown} from 'react-icons/hi'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mauricio Fara</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <ButtonCTA />
        <div className='header__container-bottom'>
          <HeaderSocials />
          <div className="me">
            <img src={ME} alt="" />
          </div>
          <div className="scroll">
            <a href="#contact" className='scroll__down'>Scroll Down</a>
            <HiOutlineChevronDoubleDown className='scroll__down'/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header