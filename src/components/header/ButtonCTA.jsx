import React from 'react'
import CV from '../../images/CV - Mauricio Fara EN (Developer).pdf'

const ButtonCTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Contact me</a>
    </div>
  )
}

export default ButtonCTA