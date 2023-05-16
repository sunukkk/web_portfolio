import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import '../styles/common.css'
import '../styles/Works.css'

import SamsungEMLogo from '../asset/SamsunEMLogo.svg'

function Works() {
  const navigate = useNavigate();
  

  
  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      navigate('/skills')
    } else {
      navigate('/sem')
    }
  }
  



  return (
    <>
    <div className="container" onWheel={handleWheel}>
      <div className='card'>
        <div className='content1'>
          <div className='logo'>
            <img src={SamsungEMLogo} alt='Sem Logo'></img>
          </div>
          <div className='text'>
            <p>SAMSUNG</p>
            <p>Electro Mechanics</p>
            <p>2023. 01</p>
          </div>
          <div className='logo'>
            <img src={SamsungEMLogo} alt='Sem Logo'></img>
          </div>
          <div className='text'>
            <p>SAMSUNG</p>
            <p>Electro Mechanics</p>
            <p>2023. 01</p>
          </div>
          <div className='logo'>
            <img src={SamsungEMLogo} alt='Sem Logo'></img>
          </div>
          <div className='text'>
            <p>SAMSUNG</p>
            <p>Electro Mechanics</p>
            <p>2023. 01</p>
          </div>
          <div className='logo'>
            <img src={SamsungEMLogo} alt='Sem Logo'></img>
          </div>
          <div className='text'>
            <p>SAMSUNG</p>
            <p>Electro Mechanics</p>
            <p>2023. 01</p>
          </div>

        </div>


      </div>
    </div>
    </>
  )
}

export default Works