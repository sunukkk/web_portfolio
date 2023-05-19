import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import SamsungEMLogo from '../asset/SamsungEMLogo.svg'
import HtmlLogo from '../asset/HTMLLogo.svg'
import CSS3Logo from '../asset/CSS3Logo.svg'
import JsLogo from '../asset/JavaScriptLogo.svg'
import W3CLogo from '../asset/W3C_icon.svg'

import '../styles/WorksTemplate.scss'
import MouseIcon from '../components/MouseIcon';



function Sem({title, date }) {
  const [showScrollIcon, setShowScrollIcon] = useState(false);

  const navigate = useNavigate();

  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const samplePcRef = useRef(null);
  const sampleTabletRef = useRef(null);
  const sampleMobileRef = useRef(null);
  const descDateSkillsRef = useRef(null);
  const descBoxRef = useRef(null);
  const ulRef = useRef(null);
  
  useEffect(() => {
    const Contents = [
      logoRef.current,
      titleRef.current,
      descRef.current,
      samplePcRef.current,
      sampleTabletRef.current,
      sampleMobileRef.current,
      descDateSkillsRef.current,
      descBoxRef.current,
      ulRef.current
    ]

    Contents.forEach((content) => {
      content.style.opacity = 0;
    });

    const showContent = (content, delay) =>{
      setTimeout(() =>{
        content.style.opacity = 1;
      }, delay);
    };

    let delay = 1000;
    Contents.forEach((content) => {
      showContent(content, delay);
      delay += 500;
    })

    setTimeout(() => setShowScrollIcon(true), 500*Contents.length)

  }, [])
  
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
        <div className='contents'>
          
          <div className="titlebox">
            <img src={SamsungEMLogo} alt="Sem Logo" ref={logoRef}/>
            <h2 ref={titleRef}>{title}</h2>
            <p className='descsummary' ref={descRef}>웹 컨텐츠 접근성 지침 및 웹표준을 준수한 삼성전기 사이트</p>
          </div>

          <div className="samplebox">
            <div className="sample_pc" ref={samplePcRef}></div>
            <div className="sample_tablet" ref={sampleTabletRef}></div>
            <div className="sample_mobile" ref={sampleMobileRef}></div>
          </div>

          <div className="desc_date_skills" ref={descDateSkillsRef}>
            <div className="datebox">
              <h3>제작 기간</h3>
              <p className='date'>{date}</p>
            </div>

            <div className="usedskillbox">
              <h3>주요 기술</h3>
              <div className="usedskill">
                <img src={HtmlLogo} alt="Html Logo" />
                <img src={CSS3Logo} alt="CSS Logo" />
                <img src={JsLogo} alt="Js Logo" />
                <img src={W3CLogo} alt="W3C Logo" />
              </div>
            </div>
          </div>

          <div className="descbox" ref={descBoxRef}>
            <div className='desc_title_link'>
              <h3>주요 내용</h3>
              <div className="desclink">
                <h3>LINK</h3>
                <div className="linkbox">
                <a href="https://github.com/sunukkk/portfolio_samsung_sem_clone" target="_blank" rel="noopener noreferrer">GITHUB</a>
                <a href="https://sunukkk.github.io/portfolio_samsung_sem_clone/" target="_blank" rel="noopener noreferrer">SITE</a>
                </div>
              </div>
            </div>
            
            <ul ref={ulRef}>
              <li><span>W3C</span> 유효성 검사 통과</li>
              <li><span>CSS / JS </span> 이용한 이미지 슬라이드 애니메이션 및 마우스오버 효과 구현</li>
              <li>PC, Tablet, Mobile 사이즈에 따른 <span> 반응형 웹 </span>제작</li>
              <li><span> AJAX로딩</span>으로 서버와 비동기 통신 및 코드의 재사용성, 유지보수성 향상</li>
            </ul>
          </div>
          <MouseIcon show={showScrollIcon} />
        </div>
      </div>
    </div>
    </>
  )
}

export default Sem