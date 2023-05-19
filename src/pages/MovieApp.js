import React, { useEffect } from 'react'

import MovieappLogo from '../asset/MovieAppLogo.svg'
import ReactLogo from '../asset/ReactLogo.svg'
import SassLogo from '../asset/SassLogo.svg'
import FirebaseLogo from '../asset/FirebaseLogo.svg'
 

import '../styles/common.scss'

import { useNavigate } from 'react-router-dom';
function MovieApp({title, date}) {
  const navigate = useNavigate();
  

  
  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      navigate('/works/messengerapp')
    } else {
      navigate('/works/facebookemoji')
    }
  }
  



  return (
    <>
    <div className="container" onWheel={handleWheel}>
      <div className='card'>
        <div className='messengerapp_contents'>
          <img src={MovieappLogo} alt="Sem Logo" />
          <h2>{title}</h2>
          <div className='prototype'>
            <div className="prototype_PC"></div>
            <div className="prototype_Tablet"></div>
            <div className="prototype_Mobile"></div>
          </div>

          <h3>제작기간</h3>
          <p className='date'>{date}</p>

          <p className="desc">REACT , FIREBASE 를 이용한 넷플릭스 클론 앱 </p>

          <h3>주요 기술</h3>
          <div className="usedskill">
            <img src={ReactLogo} alt="Html Logo" />
            <img src={SassLogo} alt="CSS Logo" />
            <img src={FirebaseLogo} alt="Js Logo" />
            
          </div>
          <div className="description">
            <h3>주요 내용</h3>
            <p>반응형 웹 제작</p>
            <p>Axios 를 통한 API 호출 및 데이터 전달</p>
            <p>Firebase Auth 이용한 로그인 기능 구현</p>
            <p>Firebase Database 와 Firebase Storage 이용, 프로필 설정 기능 구현 </p>
            <p>사용자 정의 훅함수를 이용한 효과적인 모달 및 검색기능 구현</p>
            <p>Styled Component를 사용한 스타일링</p>
            <p>Swiper 라이브러리 사용</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default MovieApp