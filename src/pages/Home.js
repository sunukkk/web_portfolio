import React, { useEffect, useState } from 'react'

import '../styles/Home.scss'

import { useNavigate } from 'react-router-dom';
import MouseIcon from '../components/MouseIcon';

function Home() {
  const [showScrollIcon, setShowScrollIcon] = useState(false);
  const [black, setBlack] = useState(false)
  

  const navigate = useNavigate();
  

  useEffect(() => {
    setShowScrollIcon(true);
    setBlack(true);
  }, []);
  

  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      return;
    } else {
      navigate('/profile')
    }
  }
  
  
  return (
    
      <div className="container"onWheel={handleWheel}>
        <div className="card">
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
      </div>
    
  )
}

export default Home
