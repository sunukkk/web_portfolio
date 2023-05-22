import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/Skills.scss';

import HtmlLogo from '../asset/HTMLLogo.svg';
import CssLogo from '../asset/CSS3Logo.svg';
import SassLogo from '../asset/SassLogo.svg';
import JsLogo from '../asset/JavaScriptLogo.svg';
import ReactLogo from '../asset/ReactLogo.svg';
import W3CLogo from '../asset/W3C_icon.svg';
import FirebaseLogo from '../asset/FirebaseLogo.svg';
import ReduxLogo from '../asset/ReduxLogo.svg';
import NextLogo from '../asset/NextjsLogo.svg';
import PsLogo from '../asset/PhotoshopLogo.svg';
import AiLogo from '../asset/IllustratorLogo.svg';
import FigmaLogo from '../asset/FigmaLogo.svg';
import MouseIcon from '../components/MouseIcon';

function Skills() {
  const [showScrollIcon, setShowScrollIcon] = useState(false);
  const [activePagination, setActivePagination] = useState(1); 
  const [isAnimating, setIsAnimating] = useState(false); 

  const navigate = useNavigate();

  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const pageRef = useRef(null);
  const htmlRef = useRef(null);
  const cssRef = useRef(null);
  const jsRef = useRef(null);
  const w3cRef = useRef(null);
  const sassRef = useRef(null);
  const desc1Ref = useRef(null);
  const reactRef = useRef(null);
  const reduxRef = useRef(null);
  const firebaseRef = useRef(null);
  const nextRef = useRef(null);
  const desc2Ref = useRef(null);
  const psRef = useRef(null);
  const aiRef = useRef(null);
  const figmaRef = useRef(null);
  const desc3Ref = useRef(null);
  const mouseiconBoxRef = useRef(null)


  useEffect(() => {
    const Contents = [
      titleRef.current,
      pageRef.current,
      htmlRef.current,
      cssRef.current,
      jsRef.current,
      w3cRef.current,
      sassRef.current,
      desc1Ref.current,
      reactRef.current,
      reduxRef.current,
      firebaseRef.current,
      nextRef.current,
      desc2Ref.current,
      psRef.current,
      aiRef.current,
      figmaRef.current,
      desc3Ref.current,
      mouseiconBoxRef.current
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
      delay += 300;
    })

    setTimeout(() => setShowScrollIcon(true), 500 * (Contents.length + 2))

  }, [])

  const Elements = {
    card : cardRef.current,
    title : titleRef.current,
    page : pageRef.current,
    html : htmlRef.current,
    css : cssRef.current,
    js : jsRef.current,
    w3c : w3cRef.current,
    sass : sassRef.current,
    desc1 : desc1Ref.current,
    react : reactRef.current,
    redux : reduxRef.current,
    firebase : firebaseRef.current,
    next : nextRef.current,
    desc2 : desc2Ref.current,
    ps : psRef.current,
    ai : aiRef.current,
    figma : figmaRef.current,
    desc3 : desc3Ref.current,
    mouseiconBox : mouseiconBoxRef.current
  }
  
  const transformStyles = {
    card : (xAxis, yAxis) => `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`,
    title: (xAxis, yAxis) => `translateZ(100px) translateX(-120px) translateY(0px) rotateY(${-xAxis}deg) rotateX(${yAxis * 2}deg)`,
    page : (xAxis, yAxis) => `translateZ(100px) rotateY(${-xAxis * 2 }deg) rotateX(${yAxis }deg)`,
    html : (xAxis, yAxis) => `translateZ(100px) rotateY(${-xAxis * 2 }deg) rotateX(${yAxis}deg)`,
    css : (xAxis, yAxis) => `translateZ(100px) rotateY(${-xAxis}deg) rotateX(${yAxis* 2 }deg)`,
    js : (xAxis, yAxis) => `translateZ(100px) rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`,
    w3c : (xAxis, yAxis) => `translateZ(100px) rotateY(${-xAxis* 2 }deg) rotateX(${yAxis}deg)`,
    sass : (xAxis, yAxis) => `translateZ(100px) rotateY(${-xAxis}deg) rotateX(${yAxis / 2}deg)`,
    desc1 : (xAxis, yAxis) => `translateZ(100px) rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`,
    react : (xAxis, yAxis) => `translateZ(100px) rotateY(${-xAxis* 2 }deg) rotateX(${yAxis}deg)`,
    redux : (xAxis, yAxis) => `translateZ(100px) rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`,
    firebase : (xAxis, yAxis) => `translateZ(100px) rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`,
    next : (xAxis, yAxis) => `translateZ(100px) rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`,
    desc2 : (xAxis, yAxis) => `translateZ(100px) rotateY(${-xAxis / 2}deg) rotateX(${yAxis}deg)`,
    ps : (xAxis, yAxis) => `translateZ(100px) rotateY(${-xAxis}deg) rotateX(${yAxis* 2 }deg)`,
    ai : (xAxis, yAxis) => `translateZ(100px) rotateY(${-xAxis * 2}deg) rotateX(${yAxis}deg)`,
    figma : (xAxis, yAxis) => `translateZ(100px) rotateY(${-xAxis* 2 }deg) rotateX(${yAxis}deg)`,
    desc3 : (xAxis, yAxis) => `translateZ(100px) rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`,
    mouseiconBox : (xAxis, yAxis) => `translateZ(100px) rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`
  };

  const handleMouseMove = e => {

    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;

    Object.entries(Elements).forEach(([key, element]) => {
      element.style.transform = transformStyles[key](xAxis, yAxis);
    });
  };

  const handleMouseLeave = () => {
    Object.values(Elements).forEach((element) => {
        element.style.transform = 'translateX(0) translateY(0) scale(1) rotateY(0) rotateX(0)';

    });
  };

  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      navigate('/profile');
    } else {
      navigate('/works');
      setShowScrollIcon(false);
    }
  };

  const handlePaginationClick = (pageNumber) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setActivePagination(pageNumber);
        setIsAnimating(false);
      }, 300); // Wait for the animation duration
    }
  };

  return (
    <>
      <div className="container"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onWheel={handleWheel}>
        <div className="card" ref={cardRef}>
          <div className="skills">
            <h2 ref ={titleRef}>Skills</h2>
            <div className="skills_pagination" ref={pageRef}>
              <span
                className={activePagination === 1 ? 'on' : ''}
                onClick={() => handlePaginationClick(1)}
              >
                1
              </span>
              <span
                className={activePagination === 2 ? 'on' : ''}
                onClick={() => handlePaginationClick(2)}
              >
                2
              </span>
              <span
                className={activePagination === 3 ? 'on' : ''}
                onClick={() => handlePaginationClick(3)}
              >
                3
              </span>
            </div>
            <div className={`skills_1 skills-section ${activePagination === 1 && 'active'}`}>
              <div className="skills_1_images1">
                <img src={HtmlLogo} alt="HtmlLogo" ref={htmlRef}/>
                <img src={CssLogo} alt="CssLogo" ref={cssRef}/>
                <img src={JsLogo} alt="JsLogo" ref={jsRef}/>
              </div>
              <div className="skills_1_images2">
                <img src={W3CLogo} alt="W3CLogo" ref={w3cRef}/>
                <img src={SassLogo} alt="SassLogo" ref={sassRef}/>
              </div>

              <div className="skills_desc" ref={desc1Ref}>
                <p className="subhead">Basic web develop skills</p>
                <p>웹 컨텐츠 접근성 지침, 웹 표준을 준수한 마크업</p>
                <p>자바스크립트를 통한 객체기반 프로그래밍</p>
                <p>CSS를 통한 다양한 애니메이션 및 효과 구현 가능</p>
                <p>SASS로 생산성 향상 및 유지보수에 용이한 CSS 작성</p>
              </div>
            </div>

            <div className={`skills_2 skills-section ${activePagination === 2 && 'active'}`}>
              <div className="skills_2_images">
                <img src={ReactLogo} alt="ReactLogo" ref = {reactRef} />
                <img src={ReduxLogo} alt="ReduxLogo" ref = {reduxRef}/>
                <img src={FirebaseLogo} alt="FirebaseLogo" ref = {firebaseRef}/>
                <img src={NextLogo} alt="NextLogo" ref = {nextRef}/>
              </div>
              <div className="skills_desc" ref={desc2Ref}>
                <p className="subhead">Powerful web application skills</p>
                <p>React로 개선 및 유지보수에 용이한 컴포넌트 단위 웹 제작</p>
                <p>Redux를 통한 React의 효율적인 상태관리</p>
                <p>Firebase를 이용한 CRUD 가능한 NoSQL 기반 서버리스 웹앱 제작</p>
                <p>Next를 통한 SSR 및 SEO 향상</p>
              </div>
            </div>

            <div className={`skills_3 skills-section ${activePagination === 3 && 'active'}`}>
              <div className="skills_3_images">
                <img src={PsLogo} alt="PsLogo" ref = {psRef}/>
                <img src={AiLogo} alt="AiLogo" ref = {aiRef}/>
                <img src={FigmaLogo} alt="FigmaLogo" ref = {figmaRef}/>
              </div>
              <div className="skills_desc" ref = {desc3Ref}>
                <p className="subhead">Creative utility design skills</p>
                <p>기획 및 디자인 단계에서 소통가능한</p>
                <p>Photoshop, Illustrator, Figma 기초지식</p>
              </div>
              <div className="mouseiconBox" ref={mouseiconBoxRef}>
                <MouseIcon show={showScrollIcon} />
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
