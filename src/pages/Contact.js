import React from 'react'

import '../styles/Contact.scss'
import '../styles/common.scss'

import { useNavigate } from 'react-router-dom';
function Works() {
  const navigate = useNavigate();
  

  
  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      navigate('/works/facebookemoji')
    } else {
      return;
    }
  }
  



  return (
    <>
    <div className="container" onWheel={handleWheel}>
      <div className='card'>
        <div className="contact_contents">
          <h3>Contact</h3>
          <p><span>Phone</span> 010 2976 4902</p>
          <p><span>Email</span> sunuk555@gmail.com</p>
          <p><span>Github</span>
           <a href="https://github.com/sunukkk/" target="_blank" rel="noopener noreferrer">Link</a>
          </p>
        </div>
    
      </div>
    </div>
    </>
  )
}

export default Works