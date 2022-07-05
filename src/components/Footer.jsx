import React from 'react'
import '../css/Footer.css'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>MAURUMBLR</a>

      <ul className='links'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/mauriciofara/?locale=en_US"><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; MAURUMBLR. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer