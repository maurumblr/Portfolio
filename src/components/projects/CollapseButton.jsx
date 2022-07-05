import React from 'react'
import { useState } from 'react'
import {BsThreeDots} from 'react-icons/bs'
import '../../css/CollapseButton.css'


const CollapseButton = () => {

    const [isActive, setIsActive] = useState(false);

  return (  
  <div className="collapse__container">
    <button className='collapse__container-btn' onClick={() => setIsActive(!isActive)}>
       <BsThreeDots/>
    </button>  

    {isActive && <div className='collapse__container-desc'>
      <h3>Descripcion</h3>
      <p>Hola</p>
      </div>} 
  </div>
  )  
}

export default CollapseButton