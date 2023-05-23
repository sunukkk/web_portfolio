import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/WorksTemplate.scss'
import MouseIcon from '../components/MouseIcon';




function MovieApp({title, date }) {
  const [showScrollIcon, setShowScrollIcon] = useState(false);

  const navigate = useNavigate();

  const cardRef = useRef(null)
  const titleRef = useRef(null);
  const descSumRef = useRef(null);
  const sampleBoxRef = useRef(null);
  const samplePcRef = useRef(null);
  const sampleTabletRef = useRef(null);
  const sampleMobileRef = useRef(null);
  const dateBoxRef = useRef(null);
  const usedSkillsBoxRef = useRef(null);
  const linkBoxRef = useRef(null);
  const contentsBoxRef = useRef(null);
  const mouseiconBoxRef = useRef(null);
  
  useEffect(() => {
    const Contents = [
      titleRef.current,
      descSumRef.current,
      sampleBoxRef.current,
      samplePcRef.current,
      sampleTabletRef.current,
      sampleMobileRef.current,
      dateBoxRef.current,
      usedSkillsBoxRef.current,
      linkBoxRef.current,
      contentsBoxRef.current,
      mouseiconBoxRef.current,
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
  
  const Elements ={
    card: cardRef.current,
    title: titleRef.current,
    descSum : descSumRef.current,
    samplePC : samplePcRef.current,
    sampleTablet : sampleTabletRef.current,
    sampleMobile : sampleMobileRef.current,
    dateBox : dateBoxRef.current,
    usedSkillsBox : usedSkillsBoxRef.current,
    linkBox : linkBoxRef.current,
    contentsBox : contentsBoxRef.current,
    mouseiconBox :mouseiconBoxRef.current,
  };

  const transformStyles = {
    card: (xAxis, yAxis) => `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`,
    title: (xAxis, yAxis) => `translateZ(100px) translateX(-420px) translateY(0px) rotateY(${-xAxis}deg) rotateX(${yAxis * 2}deg)`,
    descSum: (xAxis, yAxis) => `translateZ(100px) translateX(20px) translateY(-40px) rotateY(${-xAxis}deg) rotateX(${yAxis * 2}deg)`,
    samplePC : (xAxis, yAxis) => `scale(1.5) translateX(-140px) translateY(0px) rotateY(${-xAxis}deg) rotateX(${yAxis * 2}deg)`,    sampleTablet : (xAxis, yAxis) => `scale(1.8) translateZ(100px) translateX(-400px) translateY(140px) rotateY(${-xAxis}deg) rotateX(${yAxis * 2}deg)`,
    sampleMobile : (xAxis, yAxis) => `scale(2.5) translateZ(100px) translateX(-240px) translateY(110px) rotateY(${-xAxis}deg) rotateX(${yAxis * 2}deg)`,
    dateBox : (xAxis, yAxis) => `translateZ(100px) translateX(660px) translateY(-320px) rotateY(${-xAxis}deg) rotateX(${yAxis * 2}deg)`,
    usedSkillsBox : (xAxis, yAxis) => `translateZ(100px) translateX(660px) translateY(-300px) rotateY(${-xAxis}deg) rotateX(${yAxis * 2}deg)`,
    linkBox : (xAxis, yAxis) => `translateZ(100px) translateX(660px) translateY(-280px) rotateY(${-xAxis}deg) rotateX(${yAxis * 2}deg)`,
    contentsBox : (xAxis, yAxis) => `translateZ(100px) translateX(40px) translateY(80px) rotateY(${-xAxis}deg) rotateX(${yAxis * 2}deg)`,
    mouseiconBox : (xAxis, yAxis) => `translateZ(100px) translateX(-260px) translateY(20px) rotateY(${-xAxis}deg) rotateX(${yAxis * 2}deg)`,
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
      navigate('/works/messengerapp')
    } else {
      navigate('/works/facebookemoji')
    }
  }

  return (
    <>
    <div className="container"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onWheel={handleWheel}
      >
      <div className='card' ref={cardRef}>
        <div className='contents'>
        
          <div className="titlebox">
            
            <h2 ref={titleRef}>{title}</h2>
            <p className='descsummary' ref={descSumRef}>React, Firebase, Axios를 이용한 영화 앱</p>
          </div>

          <div className="samplebox" ref={sampleBoxRef}>
            <div className="sample_pc" ref={samplePcRef}>
              <video src={process.env.PUBLIC_URL + '/videos/MovieApp_PC.mp4'} autoPlay loop muted width={'100%'} height={'100%'}></video>
            </div>
            <div className="sample_tablet" ref={sampleTabletRef}>
              <video src={process.env.PUBLIC_URL + '/videos/MovieApp_Tablet.mp4'} autoPlay loop muted width={'100%'} height={'100%'}></video>
            </div>
            <div className="sample_mobile" ref={sampleMobileRef}>
              
              <video src={process.env.PUBLIC_URL + '/videos/MovieApp_Mobile.mp4'} autoPlay loop muted width={'100%'} height={'100%'}></video>
            </div>
          </div>

          <div className="descbox">
            <div className="date_skills_link" >
              <div className="datebox" ref={dateBoxRef}>
                <h3>Project duration</h3>
                <p className='date'>{date}</p>
              </div>

              <div className="usedskillbox" ref={usedSkillsBoxRef}>
                <h3>Used skills</h3>
                <p className="usedskills">HTML, CSS, JS</p>
              </div>

              <div className="linkbox" ref={linkBoxRef}>
                <h3>Link</h3>
                <a href="https://github.com/sunukkk/movie_web_app" target="_blank" rel="noopener noreferrer">GITHUB</a>
                <a href="https://sunukkk.github.io/movie_web_app/" target="_blank" rel="noopener noreferrer">SITE</a>
              </div>
              
          </div>
          <div className="contents_mouseicon">
            <div className="contentsbox" ref={contentsBoxRef}>
              <h3>Contents</h3>
              <ul>
                
                <li><span>Firebase Auth</span>를 통해 회원가입 및 로그인, 소셜로그인 기능 </li>
                <li><span>Firebase Auth, DB, Storage</span>를 이용한 프로필 설정 기능</li>
                <li><span>Axios</span>로 외부 API 호출 및 데이터 전달</li>
                <li><span>Swiper</span>플러그인을 사용한 캐러셀 구현</li>
                <li><span>영화정보를 보여주는 모달창 구현</span></li>
                <li>검색 및 모달창 관련 <span>사용자 정의 Hook 함수 사용</span></li>
                <li>JSX, SCSS를 사용한 스타일링</li>
              </ul>
            </div>
            <div className='mouseiconbox' ref={mouseiconBoxRef}>
              <MouseIcon show={showScrollIcon}/>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  </>
  )
}

export default MovieApp
