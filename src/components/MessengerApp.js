import React, { useEffect } from 'react'

import MessengerLogo from '../asset/MessengerLogo.svg'
import ReactLogo from '../asset/ReactLogo.svg'
import SassLogo from '../asset/SassLogo.svg'
import FirebaseLogo from '../asset/FirebaseLogo.svg'
 

import '../styles/common.scss'

import { useNavigate } from 'react-router-dom';
function MessengerApp({title, date}) {
  const navigate = useNavigate();
  

  
  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      navigate('/works/scnt')
    } else {
      navigate('/works/movieapp')
    }
  }
  



  return (
    <>
    <div className="container" onWheel={handleWheel}>
      <div className='card'>
        <div className='messengerapp_contents'>
          <img src={MessengerLogo} alt="Sem Logo" />
          <h2>{title}</h2>
          <div className='prototype'>
            <div className="prototype_PC"></div>
            <div className="prototype_Tablet"></div>
            <div className="prototype_Mobile"></div>
          </div>

          <h3>제작기간</h3>
          <p className='date'>{date}</p>

          <p className="desc">React, Firebase 를 이용한 CRUD 구현한 메신저 웹 앱</p>

          <h3>주요 기술</h3>
          <div className="usedskill">
            <img src={ReactLogo} alt="Html Logo" />
            <img src={SassLogo} alt="CSS Logo" />
            <img src={FirebaseLogo} alt="Js Logo" />
            
          </div>
          <div className="description">
            <h3>주요 내용</h3>
            <p>Axios 를 통한 API 호출 및 데이터 전달</p>
            <p>Firebase Auth 이용 <br />
            회원가입 및 로그인, 소셜로그인 기능 구현</p>
            <p>Firebase Database 와 Firebase Storage 이용<br />
            채팅 메시지 및 이미지파일 전송 기능 구현</p>
            <p>Sass(Scss)를 활용한 스타일링</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default MessengerApp