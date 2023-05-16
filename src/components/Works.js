import React, { useEffect } from 'react'

import '../styles/Skills.css'
import { useNavigate } from 'react-router-dom';
function Works() {
  const navigate = useNavigate();
  

  
  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      navigate('/profile')
    } else {
      navigate('/skills')
    }
  }
  



  return (
    <>
    <div class="skills_container" onWheel={handleWheel}>
      <div className='card'>
        
    
      </div>
    </div>
    </>
  )
}

export default Works