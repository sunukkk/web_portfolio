import React, { useEffect } from 'react'

import SamsungEMLogo from '../asset/SamsungEMLogo.svg'
import HtmlLogo from '../asset/HTMLLogo.svg'
import CSS3Logo from '../asset/CSS3Logo.svg'
import JsLogo from '../asset/JavaScriptLogo.svg'
import W3CLogo from '../asset/W3C_icon.svg'


import '../styles/Sem.scss'
import '../styles/common.scss'

import { useNavigate } from 'react-router-dom';

function Sem({title, date }) {
  const navigate = useNavigate();
  

  
  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      navigate('/works')
    } else {
      navigate('/works/cjone')
    }
  }
  



  return (
    <>
    <div className="container" onWheel={handleWheel}>
      <div className='card'>
        <div className='sem_contents'>
          <img src={SamsungEMLogo} alt="Sem Logo" />
          <h2>{title}</h2>
        <div className='prototype'>
          <div className="prototype_PC"></div>
          <div className="prototype_Tablet"></div>
          <div className="prototype_Mobile"></div>
        </div>

        <h3>제작기간</h3>
        <p className='date'>{date}</p>

        <p className="desc">웹 컨텐츠 접근성 지침 및 웹표준을 준수한 삼성전기 기업 웹 사이트 제작</p>

        <h3>주요 기술</h3>
        <div className="usedskill">
          <img src={HtmlLogo} alt="Html Logo" />
          <img src={CSS3Logo} alt="CSS Logo" />
          <img src={JsLogo} alt="Js Logo" />
          <img src={W3CLogo} alt="W3C Logo" />
        </div>
        <div className="description">
          <h3>주요 내용</h3>
          <p>웹 접근성 준수</p>
          <p>W3C 유효성 검사 통과</p>
          <p>CSS / JS 를 이용한 이미지 슬라이드 ANIMATION 및 마우스오버 관련 효과 구현</p>
          <p>반응형 웹</p>
        </div>



        </div>
      </div>
    </div>
    </>
  )
}

export default Sem