import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';

import '../styles/common.scss'
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
import MouseIcon from './MouseIcon';


function Skills() {
  const [showScrollIcon, setShowScrollIcon] = useState(false);
  
  const navigate = useNavigate();

  const cardRef=useRef(null)
  const skillsTitleRef=useRef(null)
  const row1Contents1Ref=useRef(null)
  const row1ImagesRef=useRef(null)
  const row1DescRef=useRef(null)
  const row2Contents1Ref=useRef(null)
  const row2ImagesRef=useRef(null)
  const row2DescRef=useRef(null)
  const row3Contents1Ref=useRef(null)
  const row3ImagesRef=useRef(null)
  const row3DescRef=useRef(null)
  const row4Contents1Ref=useRef(null)
  const row4ImagesRef=useRef(null)
  const row4DescRef=useRef(null)

  useEffect(() =>{

    const card = cardRef.current
    const skillsTitle = skillsTitleRef.current
    const row1Images = row1ImagesRef.current
    const row1Desc = row1DescRef.current
    const row2Images = row2ImagesRef.current
    const row2Desc = row2DescRef.current
    const row3Images = row3ImagesRef.current
    const row3Desc = row3DescRef.current
    const row4Images = row4ImagesRef.current
    const row4Desc = row4DescRef.current

    skillsTitle.style.opacity = 0;
    row1Images.style.opacity = 0
    row1Desc.style.opacity = 0;
    row2Images.style.opacity = 0;
    row2Desc.style.opacity = 0;
    row3Images.style.opacity = 0;
    row3Desc.style.opacity = 0;
    row4Images.style.opacity = 0;
    row4Desc.style.opacity = 0;

    const showSkillsTitle = () =>{
      skillsTitle.style.opacity = 1
      
    }

    const showRow1 = () =>{
      row1Images.style.opacity = 1;
      row1Desc.style.opacity = 1;
    }

    const showRow2 = () =>{
      row2Images.style.opacity = 1;
      row2Desc.style.opacity = 1;
    }

    
    const showRow3 = () =>{
      row3Images.style.opacity = 1;
      row3Desc.style.opacity = 1;
    }

    
    const showRow4 = () =>{
      row4Images.style.opacity = 1;
      row4Desc.style.opacity = 1;
    }

    setTimeout(showSkillsTitle, 1500);
    setTimeout(showRow1, 2000);
    setTimeout(showRow2, 2500);
    setTimeout(showRow3, 3000);
    setTimeout(showRow4, 3500);
    setTimeout(() => setShowScrollIcon(true), 4000);

  }, [])

  const handleMouseMove = e =>{
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;  

    const card = cardRef.current
    const skillsTitle = skillsTitleRef.current;
    const row1Contents = row1Contents1Ref.current;
    const row2Contents = row2Contents1Ref.current;
    const row3Contents = row3Contents1Ref.current;
    const row4Contents = row4Contents1Ref.current;

    card.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg) `;
    skillsTitle.style.transform = `translateX(20px) scale(1.4) rotateY(${-xAxis}deg) rotateX(${yAxis}deg) `;
    row1Contents.style.transform = `translateX(-250px) translateY(100px) scale(1.2) rotateY(${-xAxis}deg) rotateX(${yAxis}deg) `;
    row2Contents.style.transform = `translateX(250px) translateY(-60px) rotateY(${-xAxis}deg) rotateX(${yAxis}deg) `;
    row3Contents.style.transform = `translateX(-250px) translateY(100px) rotateY(${-xAxis}deg) rotateX(${yAxis}deg) `;
    row4Contents.style.transform = `translateX(250px) translateY(-60px) rotateY(${-xAxis}deg) rotateX(${yAxis}deg) `;
  }

  const handleMouseLeave = () =>{
    const card = cardRef.current
    const skillsTitle = skillsTitleRef.current;
    const row1Contents = row1Contents1Ref.current;
    const row2Contents = row2Contents1Ref.current;
    const row3Contents = row3Contents1Ref.current;
    const row4Contents = row4Contents1Ref.current;
    
    card.style.transform = `translateY(0) scale(1) rotateY(0) rotateX(0)`;
    skillsTitle.style.transform = `translateY(0) scale(1) rotateY(0) rotateX(0) `;
    row1Contents.style.transform = `translateY(0) rotateY(0) rotateX(0) `;
    row2Contents.style.transform = `translateY(0) rotateY(0) rotateX(0) `;
    row3Contents.style.transform = `translateY(0) rotateY(0) rotateX(0) `;
    row4Contents.style.transform = `translateY(0) rotateY(0) rotateX(0) `;
    
  }
  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      navigate('/profile')
    } else {
      navigate('/works')
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
            <div className = 'skills_Row1_images' ref={row1ImagesRef}>
              <img src={HtmlLogo} alt='HtmlLogo' />
              <img src={CssLogo} alt='CssLogo' />
              <img src={W3CLogo} alt='W3CLogo' />
              <img src={SassLogo} alt='SassLogo' />

            </div>
            <div className='skills_Row1_desc' ref={row1DescRef}>
              <p>웹 컨텐츠 접근성 지침, 웹 표준을 준수한 마크업</p>
              <p>CSS를 통한 다양한 애니메이션 및 효과 구현 가능</p>
              <p>SASS로 생산성 향상 및 유지보수에 용이한 CSS 작성</p>
            </div>
          </div>

          <div className ='skills_Row2' ref={row2Contents1Ref}>
            <div className = 'skills_Row2_images' ref={row2ImagesRef}>
              <img src={JsLogo} alt='JsLogo' />
              <img src={ReactLogo} alt='ReactLogo' />
            </div>
            <div className='skills_Row1_desc' ref={row2DescRef}>
              <p>자바스크립트를 통한 객체기반 프로그래밍</p>
              <p>React 개선 및 유지보수에 용이한 컴포넌트 단위 웹 제작</p>
              
            </div>
          </div>

          <div className ='skills_Row3' ref={row3Contents1Ref}>
            <div className = 'skills_Row3_images' ref={row3ImagesRef}>
              <img src={FirebaseLogo} alt='FirebaseLogo' /> 
              <img src={ReduxLogo} alt='ReduxLogo' />
              <img src={NextLogo} alt='NextLogo' />
            </div>
            <div className='skills_Row3_desc' ref={row3DescRef}>
              <p>Firebase로 CRUD 가능한 NoSQL기반 서버리스 웹앱 제작</p>
              <p>Redux로 React 의 효율적인 상태관리</p>
              <p>Next를 통한 SSR 및 SEO 향상</p>
            </div>
          </div> 

          <div className='skills_Row4' ref={row4Contents1Ref}>
            <div className = 'skills_Row4_images' ref={row4ImagesRef}>
              <img src={PsLogo} alt='PsLogo' />
              <img src={AiLogo} alt='AiLogo' />
              <img src={FigmaLogo} alt='FigmaLogo' />
            </div>
            <div className='skills_Row1_desc' ref={row4DescRef}>
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