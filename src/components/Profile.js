import React, { useEffect, useRef } from 'react'
import profilePicture from '../asset/profile_pic.jpg';
import '../styles/Profile.css'
import { useNavigate } from 'react-router-dom'

function Profile() {
  const navigate = useNavigate();

  const cardRef = useRef(null);
  const profilePicRef = useRef(null);
  const contentsRef = useRef(null);
  const titleRef = useRef(null);
  const subheadRef = useRef(null);
  const descriptionRef = useRef(null);
  const scrollIconRef = useRef(null);




  useEffect(() => {

    const card = cardRef.current;
    const profilePic = profilePicRef.current;
    const contents = contentsRef.current;
    const title = titleRef.current;
    const subhead = subheadRef.current;
    const description = descriptionRef.current;
    const scrollIcon = scrollIconRef.current;
    // 페이지가 로드될 때 각 요소가 하나씩 나타나도록 설정

    profilePic.style.opacity = 0;
    title.style.opacity = 0;
    subhead.style.opacity = 0;
    description.style.opacity = 0;
    scrollIcon.style.opacity = 0;


    const showProfilePic = () => {
      profilePic.style.opacity = 1;
    };

    const showTitle = () => {
      title.style.opacity = 1;
    };

    const showSubhead = () => {
      subhead.style.opacity = 1;
    }

    const showDescription = () =>{
      description.style.opacity = 1;
    }

    const showScrollIcon = () =>{
      scrollIcon.style.opacity = 1;
    }

    setTimeout(showProfilePic, 1800);
    setTimeout(showTitle, 2400);
    setTimeout(showSubhead, 3000);
    setTimeout(showDescription, 3600);
    setTimeout(showScrollIcon, 4200);

  }, []);


  const handleMouseMove = (e) => {
    // Moving Animation Event
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;  

    const card = cardRef.current;
    const profilePic = profilePicRef.current;
    const contents = contentsRef.current; 

    card.style.transform = `rotateY(${-xAxis}deg) rotateX(${yAxis}deg) `;
    profilePic.style.transform = `translateY(-80px) scale(1.4) rotateY(${-xAxis}deg) rotateX(${yAxis}deg) `;
    profilePic.style.boxShadow = `0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2)`;
    contents.style.transform = `translateZ(70px) rotateY(${-xAxis / 2}deg) rotateX(${yAxis / 2}deg)`;
  };

  const handleMouseLeave = () => {
    // Animate Out
    const card = cardRef.current;
    const profilePic = profilePicRef.current;
    const contents = contentsRef.current; 

    card.style.transition = "";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    contents.style.transform = "translateZ(0px)";
    profilePic.style.transform = "translateZ(0px) rotateZ(0deg)";
    profilePic.style.boxShadow = "none";
  };

  
  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      return;
    } else {
      navigate('/skills')
    }
  }
  
   return (
    <>
      <div
        className="profile_container"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onWheel={handleWheel}
      >
        <div className="card" ref={cardRef}>
          <div className="profilePicture">
            <img src={profilePicture} alt="profilePic" className="profile_profilePic" ref={profilePicRef} />
          </div>
          <div className="profile_contents" ref={contentsRef}>
            <h1 className="profile_title" ref={titleRef}>
              Sun Wook Kim
            </h1>
            <h3 className="profile_subhead" ref={subheadRef}>
              Frontend Developer
            </h3>
            <p className="profile_description" ref={descriptionRef}>
              소통하며 성장하는 개발자 김선욱 입니다
            </p>
            <div className="profile_scroll-icon-box" ref={scrollIconRef}>
              <div className="profile_scroll-icon"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Profile