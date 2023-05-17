import React, { useEffect, useState } from 'react'

import '../styles/common.css'
import '../styles/Home.css'

import { useNavigate } from 'react-router-dom';
import MouseIcon from './MouseIcon';

function Home() {
  const [showScrollIcon, setShowScrollIcon] = useState(false);
  const [black, setBlack] = useState(false)
  
  useEffect(() => {
    setShowScrollIcon(true);
    setBlack(true);
  }, []);
  
  const navigate = useNavigate();

  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      return;
    } else {
      navigate('/profile')
    }
  }
  
  
  return (
    <>
      <div onWheel={handleWheel}>
        <div className="home_contents">
          <p className='home_text'>
            KIM SUN WOOK 
            <span>
              Portfolio
            </span>
          </p>
          <MouseIcon show={showScrollIcon} black={black} />
        </div>
      </div>
      
    </>
  )
}

export default Home
