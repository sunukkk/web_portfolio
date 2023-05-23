import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/WorksTemplate.scss'
import '../styles/FacebookEmoji.css'
import MouseIcon from '../components/MouseIcon';




function FacebookEmoji({title, date }) {
  const [showScrollIcon, setShowScrollIcon] = useState(false);

  const navigate = useNavigate();

  const cardRef = useRef(null)
  const titleRef = useRef(null);
  const descSumRef = useRef(null);
  const sampleBoxRef = useRef(null);

  const likeRef = useRef(null);
  const loveRef = useRef(null);
  const hahaRef = useRef(null);
  const yayRef = useRef(null);
  const wowRef = useRef(null);
  const sadRef = useRef(null);
  const angryRef = useRef(null);


  const dateBoxRef = useRef(null);
  const usedSkillsBoxRef = useRef(null);
  const contentsBoxRef = useRef(null);
  const mouseiconBoxRef = useRef(null);
  
  useEffect(() => {
    const Contents = [
      titleRef.current,
      descSumRef.current,
      sampleBoxRef.current,
      likeRef.current,
      loveRef.current,
      hahaRef.current,
      yayRef.current,
      wowRef.current,
      sadRef.current,
      angryRef.current,
      dateBoxRef.current,
      usedSkillsBoxRef.current,
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
    like : likeRef.current,
    love : loveRef.current,
    haha :hahaRef.current,
    yay : yayRef.current,
    wow : wowRef.current,
    sad : sadRef.current,
    angry : angryRef.current,
    dateBox : dateBoxRef.current,
    usedSkillsBox : usedSkillsBoxRef.current,
    contentsBox : contentsBoxRef.current,
    mouseiconBox :mouseiconBoxRef.current,
  };

  const transformStyles = {
    card: (xAxis, yAxis) => `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`,
    title: (xAxis, yAxis) => `translateZ(100px) translateX(-420px) translateY(0px) rotateY(${-xAxis}deg) rotateX(${yAxis * 2}deg)`,
    descSum: (xAxis, yAxis) => `translateZ(100px) translateX(-420px) translateY(0px) rotateY(${-xAxis}deg) rotateX(${yAxis * 2}deg)`,
    like: (xAxis, yAxis) => `scale(2) translateZ(100px) translateX(80px) translateY(0px) rotateY(${-xAxis}deg) rotateX(${yAxis * 2}deg)`,
    love: (xAxis, yAxis) => `scale(2) translateZ(100px) translateX(150px) translateY(0px) rotateY(${-xAxis}deg) rotateX(${yAxis * 2}deg)`,
    haha: (xAxis, yAxis) => ` translateZ(100px) translateX(200px) translateY(-256px) rotateY(${-xAxis}deg) rotateX(${yAxis * 2}deg)`,
    yay: (xAxis, yAxis) => `scale(2) translateZ(100px) translateX(140px) translateX(0px) translateY(0) rotateY(${-xAxis}deg) rotateX(${yAxis * 2}deg)`,
    wow: (xAxis, yAxis) => `translateZ(100px) translateX(-460px) translateY(260px) rotateY(${-xAxis}deg) rotateX(${yAxis * 2}deg)`,
    sad: (xAxis, yAxis) => `translateZ(100px) translateX(-420px) translateY(260px) rotateY(${-xAxis}deg) rotateX(${yAxis * 2}deg)`,
    angry: (xAxis, yAxis) => `translateZ(100px) translateX(-380px) translateY(260px) rotateY(${-xAxis}deg) rotateX(${yAxis * 2}deg)`,
    dateBox : (xAxis, yAxis) => `translateZ(100px) translateX(0px) translateY(200px) rotateY(${-xAxis}deg) rotateX(${yAxis * 2}deg)`,
    usedSkillsBox : (xAxis, yAxis) => `translateZ(100px) translateX(220px) translateY(124px) rotateY(${-xAxis}deg) rotateX(${yAxis * 2}deg)`,
    contentsBox : (xAxis, yAxis) => `translateZ(100px) translateX(-160px) translateY(198px) rotateY(${-xAxis}deg) rotateX(${yAxis * 2}deg)`,
    mouseiconBox : (xAxis, yAxis) => `translateZ(100px) translateX(20px) translateY(-46px) rotateY(${-xAxis}deg) rotateX(${yAxis * 2}deg)`,
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
      navigate('/works/movieapp')
    } else {
      navigate('/contact')
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
            <p className='descsummary' ref={descSumRef}>Pure CSS Animation</p>
          </div>

          <div className="samplebox" ref={sampleBoxRef}>
            <div className="sample" >
              <div className="emoji emoji_like" ref={likeRef}>
                <div className="emoji_hand">
                  <div className="emoji_thumb"></div>
                </div>
              </div>

              <div className="emoji emoji_love" ref={loveRef}> 
                <div className="emoji_heart"></div>
              </div>

              <div className="emoji emoji_haha" ref={hahaRef}>
                <div className="emoji_face">
                  <div className="emoji_eyes"></div>
                  <div className="emoji_mouth">
                    <div className="emoji_tongue"></div>
                  </div>
                </div>
              </div>

              <div className="emoji emoji_yay" ref={yayRef}>
                <div className="emoji_face">
                  <div className="emoji_eyebrows"></div>
                  <div className="emoji_mouth"></div>
                </div>
              </div>
              
              <div className="emoji emoji_wow" ref={wowRef}>
                <div className="emoji_face">
                  <div className="emoji_eyebrows"></div>
                  <div className="emoji_eyes"></div>
                  <div className="emoji_tongue"></div>
                </div>
              </div>

              <div className="emoji emoji_sad" ref={sadRef}>
                <div className="emoji_face">
                  <div className="emoji_eyebrows"></div>
                  <div className="emoji_eyes"></div>
                  <div className="emoji_mouth"></div>
                </div>
              </div>

              <div className="emoji emoji_angry" ref={angryRef}>
                <div className="emoji_face">
                  <div className="emoji_eyebrows"></div>
                  <div className="emoji_eyes"></div>
                  <div className="emoji_mouth"></div>
                </div>
              </div>
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
                <p className="usedskills">HTML, CSS</p>
              </div>

              
          </div>
          <div className="contents_mouseicon">
            <div className="contentsbox" ref={contentsBoxRef}>
              <h3>Contents</h3>
              <ul>
                <li><span>CSS</span> 만 사용해 만든 페이스북 Emoji</li>
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

export default FacebookEmoji