import React, { useEffect } from 'react'

import '../styles/common.css'

import { useNavigate } from 'react-router-dom';

function Sem() {
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
    <div class="container" onWheel={handleWheel}>
      <div className='card'>
        
        내용내용  
      </div>
    </div>
    </>
  )
}

export default Sem