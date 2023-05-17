import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import '../styles/common.css'
import '../styles/Works.css'

import SamsungEMLogo from '../asset/SamsungEMLogo.svg'
import CjoneLogo from '../asset/CjoneLogo.svg';
import SamsungCNTLogo from '../asset/SamsungCNTLogo.svg'
import MessengerLogo from '../asset/MessengerLogo.svg'
import MovieAppLogo from '../asset/MovieAppLogo.svg'
import FacebookEmoji from '../asset/facebook_emoji.png'

import WorksLi from './WorkLi';

function Works() {
  const navigate = useNavigate();
  

  
  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      navigate('/skills')
    } else {
      navigate('/works/sem')
    }
  }
  



  return (
    <>
    <div className="container" onWheel={handleWheel}>
      <div className='card'>
        <div className='card_content'>
          <WorksLi logo={SamsungEMLogo} title1='Samsung' title2='Electro Mechanics' date='2023. 01' />
          <WorksLi logo={CjoneLogo} title1='CJ ONE' title2='' date='2023. 02'/>
          <WorksLi logo={SamsungCNTLogo} title1='Samsung' title2='Construction & Trade' date='2023. 03'/>
          <WorksLi logo={MessengerLogo} title1='Messenger' title2='Web App' date='2023. 04'/>
          <WorksLi logo={MovieAppLogo} title1='Movie' title2='Web App' date='2023. 05'/>
          <WorksLi logo={FacebookEmoji} title1='Facebook' title2='Emoji' date='2023. 01'/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Works