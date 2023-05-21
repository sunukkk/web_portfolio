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

  useEffect(() => {}, []);

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
      <div className="container" onWheel={handleWheel}>
        <div className="card">
          <div className="skills">
            <h2>Skills</h2>
            <div className="skills_pagination">
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
                <img src={HtmlLogo} alt="HtmlLogo" />
                <img src={CssLogo} alt="CssLogo" />
                <img src={JsLogo} alt="JsLogo" />
              </div>
              <div className="skills_1_images2">
                <img src={W3CLogo} alt="W3CLogo" />
                <img src={SassLogo} alt="SassLogo" />
              </div>

              <div className="skills_desc">
                <p className="subhead">Basic web develop skills</p>
                <p>웹 컨텐츠 접근성 지침, 웹 표준을 준수한 마크업</p>
                <p>자바스크립트를 통한 객체기반 프로그래밍</p>
                <p>CSS를 통한 다양한 애니메이션 및 효과 구현 가능</p>
                <p>SASS로 생산성 향상 및 유지보수에 용이한 CSS 작성</p>
              </div>
            </div>

            <div className={`skills_2 skills-section ${activePagination === 2 && 'active'}`}>
              <div className="skills_2_images">
                <img src={ReactLogo} alt="ReactLogo" />
                <img src={ReduxLogo} alt="ReduxLogo" />
                <img src={FirebaseLogo} alt="FirebaseLogo" />
                <img src={NextLogo} alt="NextLogo" />
              </div>
              <div className="skills_desc">
                <p className="subhead">Powerful web application skills</p>
                <p>React로 개선 및 유지보수에 용이한 컴포넌트 단위 웹 제작</p>
                <p>Redux를 통한 React의 효율적인 상태관리</p>
                <p>Firebase를 이용한 CRUD 가능한 NoSQL 기반 서버리스 웹앱 제작</p>
                <p>Next를 통한 SSR 및 SEO 향상</p>
              </div>
            </div>

            <div className={`skills_3 skills-section ${activePagination === 3 && 'active'}`}>
              <div className="skills_3_images">
                <img src={PsLogo} alt="PsLogo" />
                <img src={AiLogo} alt="AiLogo" />
                <img src={FigmaLogo} alt="FigmaLogo" />
              </div>
              <div className="skills_desc">
                <p className="subhead">Creative utility design skills</p>
                <p>기획 및 디자인 단계에서 소통가능한</p>
                <p>Photoshop, Illustrator, Figma 기초지식</p>
              </div>
              <MouseIcon show={showScrollIcon} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
