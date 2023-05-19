import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';

import '../styles/Skills.scss'

import HtmlLogo from '../asset/HTMLLogo.svg';
import CssLogo from '../asset/CSS3Logo.svg'
import SassLogo from '../asset/SassLogo.svg'
import JsLogo from '../asset/JavaScriptLogo.svg'
import ReactLogo from '../asset/ReactLogo.svg'
import W3CLogo from '../asset/W3C_icon.svg'
import FirebaseLogo from '../asset/FirebaseLogo.svg'
import ReduxLogo from '../asset/ReduxLogo.svg'
import NextLogo from '../asset/NextjsLogo.svg'
import PsLogo from '../asset/PhotoshopLogo.svg'
import AiLogo from '../asset/IllustratorLogo.svg'
import FigmaLogo from '../asset/FigmaLogo.svg'
import MouseIcon from '../components/MouseIcon';


function Skills() {
  const [showScrollIcon, setShowScrollIcon] = useState(false);
  
  const navigate = useNavigate();

  const cardRef=useRef(null)
  const skillsTitleRef=useRef(null)
  const row1Contents1Ref=useRef(null)
  const row2Contents1Ref=useRef(null)
  const row3Contents1Ref=useRef(null)
  const row4Contents1Ref=useRef(null)

  useEffect(() =>{
    const skillsContents = [
      skillsTitleRef.current,
      row1Contents1Ref.current,
      row2Contents1Ref.current,
      row3Contents1Ref.current,
      row4Contents1Ref.current
    ]
    skillsContents.forEach(content => {
      content.style.opacity = 0;
    })

    const showContent = (content, delay) =>{
      setTimeout(() =>{
        content.style.opacity = 1;
      }, delay);
    };

    let delay = 1000;
    skillsContents.forEach(content => {
      showContent(content, delay);
      delay += 500;
    })

    setTimeout(() => setShowScrollIcon(true), 1000 + 500*skillsContents.length);

  }, [])

  const skillsElements = {
    card: cardRef.current,
    skillsTitle: skillsTitleRef.current,
    row1Contents: row1Contents1Ref.current,
    row2Contents: row2Contents1Ref.current,
    row3Contents: row3Contents1Ref.current,
    row4Contents: row4Contents1Ref.current
  };
  
  const transformStyles = {
    card: (xAxis, yAxis) => `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`,
    skillsTitle: (xAxis, yAxis) => `translateX(20px) scale(1.4) rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`,
    row1Contents: (xAxis, yAxis) => `translateX(-250px) translateY(100px) scale(1.2) rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`,
    row2Contents: (xAxis, yAxis) => `translateX(250px) translateY(-60px) rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`,
    row3Contents: (xAxis, yAxis) => `translateX(-250px) translateY(100px) rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`,
    row4Contents: (xAxis, yAxis) => `translateX(250px) translateY(-60px) rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`
  };
  
  const handleMouseMove = e => {

    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  
    Object.entries(skillsElements).forEach(([key, element]) => {
      element.style.transform = transformStyles[key](xAxis, yAxis);
    });
  };
  
  const handleMouseLeave = () => {
    Object.values(skillsElements).forEach(element => {
      element.style.transform = 'translateY(0) scale(1) rotateY(0) rotateX(0)';
    });
  };
  
  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      navigate('/profile')
    } else {
      navigate('/works')
      setShowScrollIcon(false)
    }
  }
  



  return (
    <>
    <div
      className="container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onWheel={handleWheel}
    >
      <div className='card' ref={cardRef}>
        <div className = 'skills'>
          <h2 ref={skillsTitleRef}>Skills</h2>
          <div className ='skills_Row1' ref={row1Contents1Ref}>
            <div className = 'skills_Row1_images' >
              <img src={HtmlLogo} alt='HtmlLogo' />
              <img src={CssLogo} alt='CssLogo' />
              <img src={W3CLogo} alt='W3CLogo' />
              <img src={SassLogo} alt='SassLogo' />
            </div>

            <div className='skills_Row1_desc' >
              <p>웹 컨텐츠 접근성 지침, 웹 표준을 준수한 마크업</p>
              <p>CSS를 통한 다양한 애니메이션 및 효과 구현 가능</p>
              <p>SASS로 생산성 향상 및 유지보수에 용이한 CSS 작성</p>
            </div>
          </div>

          <div className ='skills_Row2' ref={row2Contents1Ref}>
            <div className = 'skills_Row2_images' >
              <img src={JsLogo} alt='JsLogo' />
              <img src={ReactLogo} alt='ReactLogo' />
            </div>
            <div className='skills_Row1_desc' >
              <p>자바스크립트를 통한 객체기반 프로그래밍</p>
              <p>React 개선 및 유지보수에 용이한 컴포넌트 단위 웹 제작</p>
              
            </div>
          </div>

          <div className ='skills_Row3' ref={row3Contents1Ref}>
            <div className = 'skills_Row3_images' >
              <img src={FirebaseLogo} alt='FirebaseLogo' /> 
              <img src={ReduxLogo} alt='ReduxLogo' />
              <img src={NextLogo} alt='NextLogo' />
            </div>
            <div className='skills_Row3_desc' >
              <p>Firebase로 CRUD 가능한 NoSQL기반 서버리스 웹앱 제작</p>
              <p>Redux로 React 의 효율적인 상태관리</p>
              <p>Next를 통한 SSR 및 SEO 향상</p>
            </div>
          </div> 

          <div className='skills_Row4' ref={row4Contents1Ref}>
            <div className = 'skills_Row4_images' >
              <img src={PsLogo} alt='PsLogo' />
              <img src={AiLogo} alt='AiLogo' />
              <img src={FigmaLogo} alt='FigmaLogo' />
            </div>
            <div className='skills_Row1_desc' >
              <p>기획 및 디자인 단계에서 소통가능한</p>
              <p>Photoshop, Illustrator, Figma 기초 지식</p>
            </div>
          </div>
    
          <MouseIcon show={showScrollIcon}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Skills