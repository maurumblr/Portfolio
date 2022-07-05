import React from 'react'
import '../../css/Projects.css'
import img1 from '../../images/portfolio1.jpg'
import img2 from '../../images/portfolio2.jpg'
import img3 from '../../images/portfolio3.jpg'
import CollapseButton from './CollapseButton'

const Projects = () => {
  return (
    <section id="projects">      
      <h2>Projects</h2>

      <div className="container project__container">

        {/* FIRST PROJECT */}
        <div className='project__container-div'>
          <article className='project__item'>
            <div className="project__item-img">
              <img src={img1} alt="" />
            </div>
            <h3>Buscadog</h3>
          </article>
            <div className="project__item-cta">
              <a href="" className='btn' target='_blank'>Demo</a>
              <a href="" className='btn btn-primary' target='_blank'>Code</a>
            </div>          
            <CollapseButton />
        </div>

        {/* SECOND PROJECT */}
        <div className='project__container-div'>
          <article className='project__item'>
            <div className="project__item-img">
              <img src={img2} alt="" />
            </div>
            <h3>Lemon Store</h3>
          </article>
            <div className="project__item-cta">
              <a href="" className='btn' target='_blank'>Demo</a>
              <a href="" className='btn btn-primary' target='_blank'>Code</a>
            </div>          
            <CollapseButton />
        </div >

        {/* THIRD PROJECT */}
        <div className='project__container-div'>
          <article className='project__item'>
            <div className="project__item-img">
              <img src={img3} alt="" />
            </div>
            <h3>Reminders</h3>
          </article>
            <div className="project__item-cta">
              <a href="" className='btn' target='_blank'>Demo</a>
              <a href="" className='btn btn-primary' target='_blank'>Code</a>
            </div>          
            <CollapseButton />
        </div>
      </div>
    </section>
  )
}

export default Projects