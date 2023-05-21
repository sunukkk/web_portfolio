import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/WorksTemplate.scss'
import MouseIcon from '../components/MouseIcon';
import Modal from '../components/Modal';
import semValHtml from '../asset/validator/sem/HTML.png';
import semValCss from '../asset/validator/sem/CSS.png';
import semValLighthouse from '../asset/validator/sem/LIGHTHOUSE.png';




function Sem({title, date }) {
  const [showScrollIcon, setShowScrollIcon] = useState(false);
  const [ModalOpen, setModalOpen] = useState(false)

  const navigate = useNavigate();

  const cardRef = useRef(null)
  const titleRef = useRef(null);
  const descSumRef = useRef(null);
  const sampleBoxRef = useRef(null);
  const samplePcRef = useRef(null);
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
      delay += 1;
    })

    setTimeout(() => setShowScrollIcon(true), 500 * (Contents.length + 2))

  }, [])
  
  const Elements ={
    card: cardRef.current,
    title: titleRef.current,
    descSum : descSumRef.current,
    samplePC : samplePcRef.current,
    dateBox : dateBoxRef.current,
    usedSkillsBox : usedSkillsBoxRef.current,
    linkBox : linkBoxRef.current,
    contentsBox : contentsBoxRef.current,
    mouseiconBox : mouseiconBoxRef.current,
  };

  const transformStyles = {
    card: (xAxis, yAxis) => `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`,
    title: (xAxis, yAxis) => `translateZ(100px) translateX(-500px) translateY(10px) rotateY(${-xAxis}deg) rotateX(${yAxis * 2}deg)`,
    descSum: (xAxis, yAxis) => `translateZ(100px) translateX(-500px) translateY(10px) rotateY(${-xAxis}deg) rotateX(${yAxis * 2}deg)`,
    samplePC : (xAxis, yAxis) => `scale(1.8) translateX(-50px) translateY(100px) rotateY(${-xAxis}deg) rotateX(${yAxis * 2}deg)`,    sampleTablet : (xAxis, yAxis) => `translateZ(100px) rotateY(${-xAxis}deg) rotateX(${yAxis * 2}deg)`,
    sampleMobile : (xAxis, yAxis) => `translateZ(100px) rotateY(${-xAxis}deg) rotateX(${yAxis * 2}deg)`,
    dateBox : (xAxis, yAxis) => `translateZ(100px) translateX(400px) translateY(-480px) rotateY(${-xAxis}deg) rotateX(${yAxis * 2}deg)`,
    usedSkillsBox : (xAxis, yAxis) => `translateZ(100px) translateX(600px) translateY(-560px) rotateY(${-xAxis}deg) rotateX(${yAxis * 2}deg)`,
    linkBox : (xAxis, yAxis) => `translateZ(100px) translateX(400px) translateY(-560px) rotateY(${-xAxis}deg) rotateX(${yAxis * 2}deg)`,
    contentsBox : (xAxis, yAxis) => `translateZ(100px) translateX(266px) translateY(-410px) rotateY(${-xAxis}deg) rotateX(${yAxis * 2}deg)`,
    mouseiconBox :  (xAxis, yAxis) => `translateZ(100px) translateX(266px) translateY(-10px) rotateY(${-xAxis}deg) rotateX(${yAxis * 2}deg)`,
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

  const handleWebAccessibilityClick = () =>{
    setModalOpen(!ModalOpen)
  }

  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      navigate('/works')
    } else {
      navigate('/works/cjone')
      setShowScrollIcon(false)
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
            <p className='descsummary' ref={descSumRef}>웹 컨텐츠 접근성 지침 및 웹표준을 준수한 삼성전기 사이트</p>
          </div>

          <div className="samplebox" ref={sampleBoxRef}>
            <div className="sample_pc" ref={samplePcRef}>
              <video src={process.env.PUBLIC_URL + '/videos/Sem_PC.mp4'} autoPlay loop muted width={'100%'} height={'100%'}></video>
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
                <a href="https://github.com/sunukkk/portfolio_samsung_sem_clone" target="_blank" rel="noopener noreferrer">GITHUB</a>
                <a href="https://sunukkk.github.io/portfolio_samsung_sem_clone/" target="_blank" rel="noopener noreferrer">SITE</a>
                <p onClick={handleWebAccessibilityClick}>Web Accessibility</p>
              </div>
              
          </div>
          <div className="contents_mouseicon">
            <div className="contentsbox" ref={contentsBoxRef}>
              <h3>Contents</h3>
              <ul>
                <li><span>W3C</span> 유효성 검사 통과</li>
                <li><span>CSS / JS </span> 이용한 이미지 슬라이드 애니메이션 및 마우스오버 효과 구현</li>
                <li>PC, Tablet, Mobile 사이즈에 따른 <span> 반응형 웹 </span>제작</li>
                <li><span> AJAX로딩</span>으로 서버와 비동기 통신 및 코드의 재사용성, 유지보수성 향상</li>
              </ul>
            </div>
            <div className='mouseiconbox' ref={mouseiconBoxRef}>
              <MouseIcon show={showScrollIcon}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    {ModalOpen && <Modal setModalOpen={setModalOpen} ValHtml={semValHtml} ValCss={semValCss} ValLighthouse={semValLighthouse}/>}
  </div>
  </>
  )
}

export default Sem