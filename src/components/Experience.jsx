import React from 'react'
import '../css/Experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">      
      <h2>My Skills</h2>

      <div className="container experience__container">
        <div className='experience__technologies'>
          <h3>Technologies</h3>
            <div className="experience__languajes">
              <article className='experience__details'>
                <div className='experience__details-icon'>
                  <BsFillPatchCheckFill />
                  <h4>HTML</h4>
                </div>
                <div className='experience__details-frame'>
                  <small></small>
                </div>
              </article>
              <article className='experience__details'>
                <div className='experience__details-icon'>
                  <BsFillPatchCheckFill />
                  <h4>CSS</h4>
                </div>
                <div className='experience__details-frame'>
                  <small>[Bootstrap]</small>
                </div>
              </article>
              <article className='experience__details'>
                <div className='experience__details-icon'>
                  <BsFillPatchCheckFill />
                  <h4>SASS</h4>
                </div>
                <div className='experience__details-frame'>
                  <small></small>
                </div>
              </article>
              <article className='experience__details'>
                <div className='experience__details-icon'>
                  <BsFillPatchCheckFill />
                  <h4>JAVASCRIPT</h4>
                </div>
                <div className='experience__details-frame'>
                  <small>[React, Three.js]</small>
                </div>
              </article>
              <article className='experience__details'>
                <div className='experience__details-icon'>
                  <BsFillPatchCheckFill />
                  <h4>PYTHON</h4>
                </div>
                <div className='experience__details-frame'>
                  <small>[Django, UnitTest]</small>
                </div>
              </article>
              <article className='experience__details'>
                <div className='experience__details-icon'>
                  <BsFillPatchCheckFill />
                  <h4>SQL</h4>
                </div>
                <div className='experience__details-frame'>
                  <small>[SQL Server, PostgreSQL]</small>
                </div>
              </article>
              <article className='experience__details'>
                <div className='experience__details-icon'>
                  <BsFillPatchCheckFill />
                  <h4>GIT</h4>
                </div>
                <div className='experience__details-frame'>
                  <small></small>
                </div>
              </article>
            </div>
         </div>
      </div>
    </section>
  )
}

export default Experience