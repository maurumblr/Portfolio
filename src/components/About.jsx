import React from 'react'
import '../css/About.css'
import ME from '../images/me-about.jpg'
import {ImUsers,ImBook} from 'react-icons/im'
import {IoIosRocket} from 'react-icons/io'


const About = () => {
  return (
    <section id="about">      
      <h2>About Me</h2>

      <div className="container about__container">        
        <div className="about__content">

          <div className="about__text">
            <p>
            I'm a <b>Fullstack Developer</b> working principaly with <b>Django</b> and <b>React</b>. I'm committed to provide fast and
            functional solutions. I recently worked as a BI backend developer. I approach different issues with critical
            thinking to find efficient solutions. I am always ready for new challenges <IoIosRocket className='p__icon'/>
            </p>
            <a href="#contact" className='btn btn-primary'>Let's talk</a>
          </div>
          
          <div className="about__cards">
            <article className='about__card'>
              <ImUsers className='about__icon'/>
              <h5>Good comunication skills</h5>              
            </article>
            <article className='about__card'>
              <ImBook className='about__icon'/>
              <h5>Self Driven and Enthusiastic</h5>              
            </article>
            <article className='about__card'>
              <ImUsers className='about__icon'/>
              <h5>Experience</h5>
              <small>3+years</small>
            </article>
            <article className='about__card'>
              <ImUsers className='about__icon'/>
              <h5>Experience</h5>
              <small>3+years</small>
            </article>
          </div>          
          
        </div>        
      </div>
    </section>
  )
}

export default About