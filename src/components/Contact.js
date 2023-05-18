import React, { useEffect } from 'react'

import '../styles/common.scss'

import { useNavigate } from 'react-router-dom';
function Works() {
  const navigate = useNavigate();
  

  
  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      navigate('/works/movieapp')
    } else {
      navigate('/')
    }
  }
  



  return (
    <>
    <div className="container" onWheel={handleWheel}>
      <div className='card'>
        <div className="contact_contents">
          <h3>Contact</h3>
          <p>phone : 010 2976 4902</p>
          <p>email : sunuk555@gmail.com</p>
          <p>github</p>
        </div>
    
      </div>
    </div>
    </>
  )
}

export default Works