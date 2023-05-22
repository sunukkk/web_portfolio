import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../styles/Works.scss';
import '../styles/WorksLi.scss';

import SamsungEMLogo from '../asset/SamsungEMLogo.svg';
import CjoneLogo from '../asset/CjoneLogo.svg';
import SamsungCNTLogo from '../asset/SamsungCNTLogo.svg';
import MessengerLogo from '../asset/MessengerLogo.svg';
import MovieAppLogo from '../asset/MovieAppLogo.svg';
import FacebookEmoji from '../asset/facebook_emoji.png';

import WorksLi from '../components/WorkLi';
import MouseIcon from '../components/MouseIcon';

function Works() {
  const [showScrollIcon, setShowScrollIcon] = useState(false);
  const [hoveredDiv, setHoveredDiv] = useState(false)

  const navigate = useNavigate();

  const cardRef = useRef(null)
  const worksTitleRef = useRef(null);
  const worksSemRef = useRef(null);
  const worksCjoneRef = useRef(null);
  const worksScntRef = useRef(null);
  const worksMessengerAppRef = useRef(null);
  const worksMovieAppRef = useRef(null);
  const worksFacebookEmojiRef = useRef(null);

  useEffect(() => {
    
    const worksContents = [
      worksTitleRef.current,
      worksSemRef.current,
      worksCjoneRef.current,
      worksScntRef.current,
      worksMessengerAppRef.current,
      worksMovieAppRef.current,
      worksFacebookEmojiRef.current
    ];

    worksContents.forEach(content => {

        content.style.opacity = 0;
    });

    const showContent = (content, delay) => {
      setTimeout(() => {
          content.style.opacity = 1;
      }, delay);

    };

    let delay = 1000;
    worksContents.forEach(content => {
      showContent(content, delay);
      delay += 300;
    });

    setTimeout(() => setShowScrollIcon(true), 1000 + 500 * worksContents.length);
  }, []);

  const worksElements ={
    card: cardRef.current,
    worksTitle: worksTitleRef.current,
    worksSem: worksSemRef.current,
    worksCjone: worksCjoneRef.current,
    worksScnt: worksScntRef.current,
    worksMessengerApp: worksMessengerAppRef.current,
    worksMovieApp: worksMovieAppRef.current,
    worksFacebookEmoji: worksFacebookEmojiRef.current,
  };

  const transformStyles = {
    card: (xAxis, yAxis) => `rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`,
    worksTitle: (xAxis, yAxis) => `translateZ(100px) rotateY(${-xAxis}deg) rotateX(${yAxis * 2}deg)`,
    worksSem: (xAxis, yAxis) => ` rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`,
    worksCjone: (xAxis, yAxis) => ` rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`,
    worksScnt: (xAxis, yAxis) => ` rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`,
    worksMessengerApp: (xAxis, yAxis) => ` rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`,
    worksMovieApp: (xAxis, yAxis) => ` rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`,
    worksFacebookEmoji: (xAxis, yAxis) => ` rotateY(${-xAxis}deg) rotateX(${yAxis}deg)`,
  };

  const handleMouseMove = e => {

    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;

    Object.entries(worksElements).forEach(([key, element]) => {
      element.style.transform = transformStyles[key](xAxis, yAxis);
    });
  };

  const handleMouseLeave = () => {
    Object.values(worksElements).forEach((element) => {
        element.style.transform = 'translateY(0) scale(1) rotateY(0) rotateX(0)';

    });
    setHoveredDiv(null);
  };

  const handleWheel =(e) => {
    if (e.deltaY < 0) {
      navigate('/skills');
    } else {
      navigate('/works/sem');
    }
  };

  return (
    <>
      <div
        className="container"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onWheel={handleWheel}
      >
        <div className="card" ref={cardRef}>
          <div className="works">
            <h2 ref={worksTitleRef}>Works</h2>

            <Link to="sem">
              <div
                className={`worksSem ${hoveredDiv === worksSemRef.current ? 'on' : ''}`}
                ref={worksSemRef}
                onMouseEnter={() => setHoveredDiv(worksSemRef.current)}
                onMouseLeave={() => setHoveredDiv('')}
              >
                <WorksLi logo={SamsungEMLogo} title1="Samsung" title2="Electro Mechanics" date="2023. 01" />
              </div>
            </Link>

            <Link to="cjone">
              <div
                className={`worksCjone ${hoveredDiv === worksCjoneRef.current ? 'on' : ''}`}
                ref={worksCjoneRef}
                onMouseEnter={() => setHoveredDiv(worksCjoneRef.current)}
                onMouseLeave={() => setHoveredDiv('')}
              >
                <WorksLi logo={CjoneLogo} title1="CJ ONE" title2="" date="2023. 02" />
              </div>
            </Link>

            <Link to="scnt">
              <div
                className={`worksScnt ${hoveredDiv === worksScntRef.current ? 'on' : ''}`}
                ref={worksScntRef}
                onMouseEnter={() => setHoveredDiv(worksScntRef.current)}
                onMouseLeave={() => setHoveredDiv('')}
              >
                <WorksLi logo={SamsungCNTLogo} title1="Samsung" title2="Construction & Trade" date="2023. 03" />
              </div>
            </Link>

            <Link to="messengerapp">
              <div
                className={`worksMessengerApp ${hoveredDiv === worksMessengerAppRef.current ? 'on' : ''}`}
                ref={worksMessengerAppRef}
                onMouseEnter={() => setHoveredDiv(worksMessengerAppRef.current)}
                onMouseLeave={() => setHoveredDiv('')}
              >
                <WorksLi logo={MessengerLogo} title1="Messenger" title2="Web App" date="2023. 04" />
              </div>
            </Link>

            <Link to="moveiapp">
              <div
                className={`worksMovieApp ${hoveredDiv === worksMovieAppRef.current ? 'on' : ''}`}
                ref={worksMovieAppRef}
                onMouseEnter={() => setHoveredDiv(worksMovieAppRef.current)}
                onMouseLeave={() => setHoveredDiv('')}
              >
                <WorksLi logo={MovieAppLogo} title1="Movie" title2="Web App" date="2023. 05" />
              </div>
            </Link>

            <Link to="facebookemoji">
              <div
                className={`worksFacebookEmoji ${hoveredDiv === worksFacebookEmojiRef.current ? 'on' : ''}`}
                ref={worksFacebookEmojiRef}
                onMouseEnter={() => setHoveredDiv(worksFacebookEmojiRef.current)}
                onMouseLeave={() => setHoveredDiv('')}
              >
                <WorksLi logo={FacebookEmoji} title1="Facebook" title2="Emoji" date="2023. 01" />
              </div>
            </Link>


            <MouseIcon show={showScrollIcon} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Works;
